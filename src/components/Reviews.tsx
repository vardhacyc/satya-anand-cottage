import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Reviews = () => {
  const reviews = [
    {
      name: "Priya Sharma",
      rating: 5,
      date: "2 weeks ago",
      comment: "Amazing peaceful location with beautiful mountain views. The vegetarian food was absolutely delicious and the staff was very welcoming. Perfect for a spiritual retreat!"
    },
    {
      name: "Rajesh Kumar",
      rating: 4,
      date: "1 month ago", 
      comment: "Great cottage with clean rooms and excellent service. The alcohol-free environment made it perfect for our family vacation. Kids loved the mountain air and gardens."
    },
    {
      name: "Meena Patel",
      rating: 5,
      date: "3 weeks ago",
      comment: "Wonderful experience! The cottage is well-maintained and the location is serene. The pure vegetarian meals were fresh and tasty. Will definitely visit again."
    },
    {
      name: "Sanjay Reddy",
      rating: 4,
      date: "2 months ago",
      comment: "Beautiful cottage nestled in the hills. The rooms were comfortable and the view from our balcony was breathtaking. Great value for money and very peaceful atmosphere."
    },
    {
      name: "Anjali Singh",
      rating: 5,
      date: "1 month ago",
      comment: "Exceptional hospitality and stunning views! The cottage exceeded our expectations. The homely atmosphere and delicious vegetarian cuisine made our stay memorable."
    },
    {
      name: "Vikram Gupta",
      rating: 4,
      date: "5 weeks ago",
      comment: "Perfect getaway from city life. The cottage is clean, well-organized and the staff is very helpful. The mountain location provides a refreshing change of pace."
    }
  ];

  const averageRating = 4.1;
  const totalReviews = 297;

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-mountain-light via-white to-mountain-light/30" id="reviews">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-mountain-deep mb-4">
            What Our Guests Say
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              {renderStars(Math.floor(averageRating))}
              {averageRating % 1 !== 0 && (
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 opacity-50" />
              )}
            </div>
            <span className="text-2xl font-bold text-mountain-deep">{averageRating}</span>
            <span className="text-gray-600">({totalReviews} reviews)</span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read authentic reviews from our guests who experienced the tranquility and hospitality of Satya Anand Cottage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{review.comment}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-mountain-deep">{review.name}</p>
                    <p className="text-sm text-gray-500">Google Review</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=Satya+Anand+Cottage+Coonoor+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300 shadow-soft hover:shadow-elegant"
          >
            <Star className="h-5 w-5" />
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
