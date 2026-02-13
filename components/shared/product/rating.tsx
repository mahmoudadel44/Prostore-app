export default function Rating({ value }: { value: number }) {
  const fullStars = Math.floor(value);
  const halfStar = value - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5 text-yellow-500">
      {Array.from({ length: fullStars }, (_, i) => (
        <span key={`full-${i}`}>&#9733;</span>
      ))}
      {halfStar && <span>&#9734;</span>}
      {Array.from({ length: emptyStars }, (_, i) => (
        <span key={`empty-${i}`} className="text-gray-300">
          &#9734;
        </span>
      ))}
    </div>
  );
}
