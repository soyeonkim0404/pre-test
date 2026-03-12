import {reviews} from "@/data/reviews"
import {FaStar, FaRegStar, FaRegStarHalfStroke} from 'react-icons/fa6'

function StarRating({rating}:{rating:number}){
  const maxStars = 5;
  return(
    <span className="flex items-center">
      {Array.from({length:maxStars},(_,i) => (
        i < rating ? <FaStar key={i} /> : <FaRegStar key={i}/>
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {reviews.map((review) => {
          return(
            <div key={review.id}>
              <div className="text-2xl font-bold">{review.productName}</div>
              <div className="text-lg font-bold"><StarRating rating={review.rating}/></div>
              <div>{review.content}</div>
              <div>
                <span>{review.author}</span>
                <span>{review.createdAt}</span>
              </div>
            </div>
          )
        })}
      </main>
    </div>
  );
}
