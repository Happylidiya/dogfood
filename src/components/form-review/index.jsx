import { useForm } from 'react-hook-form';
import Form from '../form';
import FormInput from '../form-input';
import FormButton from '../form-button';
// import s from './styles.module.css';
// import cn from 'classnames';
import Rating from '../rating';
import { useState } from 'react';
import api from '../../utils/api';

function FormReview({ title = 'Отзыв о товаре', _id , setProduct }) {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: "onBlur" })
    const [rating, setRating] = useState(5);

    const handleSubmitFormReview = (data) => {
		api.createReviewProduct(_id, { ...data, rating })
			.then(newProduct => {
				setProduct && setProduct(newProduct)
				reset();
				setRating(5)
			})
        console.log(_id);
	}

    const textReview = register('text', {
        required: {
            value: true,
            message: 'Обязательное поле'
        }
    })

    return (
        <>
            <h2>{title}</h2>
            <Rating currentRating={rating} setCurrentRating={setRating} isEditable />
            <Form handleFormSubmit={handleSubmit(handleSubmitFormReview)}>
                <FormInput
                    {...textReview}
                    typeTag="textarea"
                    id="text"
                    placeholder="Напишите текст отзыва"
                />
                {errors?.text && <p className="errorMessage">{errors?.text?.message}</p>}


                <FormButton type="submit" color="primary">Отправить отзыв</FormButton>
            </Form>
        </>

    );
}

export default FormReview;