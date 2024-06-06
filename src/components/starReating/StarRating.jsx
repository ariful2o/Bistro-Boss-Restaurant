import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
export default function StarRating({rating}) {
    return (
        <Rating className='mx-auto'
        style={{ maxWidth: 180 }}
        value={rating}
        readOnly
      />
      );
}
