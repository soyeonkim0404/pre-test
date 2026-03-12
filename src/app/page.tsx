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
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-[30px] px-16 bg-white dark:bg-black sm:items-start">
        <div className="text-[24px] font-bold">Reviews</div>
  
        {reviews.map((review) => {
          return(
            <div key={review.id} className="bg-[#f5f5f5] flex flex-col w-full mt-[20px] first:mt-0 p-[10px_20px]">
              <div className="text-[18px]">{review.productName}</div>
              <div className="text-[11px] mt-[5px]"><StarRating rating={review.rating}/></div>
              <div className="text-[16px] mt-[20px]">{review.content}</div>
              <div className="flex items-center gap-2 mt-[5px]">
                <span className="text-[12px]">{review.author}</span>
                <span className="text-[12px]">{review.createdAt}</span>
              </div>
            </div>
          )
        })}
      </main>
    </div>
  );
}
