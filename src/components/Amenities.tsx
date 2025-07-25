import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Wifi, Car, Coffee, TreePine, Dumbbell, Bath, Clock } from "lucide-react";
import vegFood from "@/assets/veg-food.jpg";

const Amenities = () => {
  const amenities = [
    {
      icon: Utensils,
      title: "Pure Vegetarian Restaurant",
      description: "Enjoy delicious, wholesome vegetarian meals prepared with fresh, local ingredients. Our kitchen serves traditional South Indian and North Indian cuisines.",
      features: ["Fresh Local Ingredients", "Traditional Recipes", "Breakfast, Lunch & Dinner", "Room Service Available"]
    },
    {
      icon: Wifi,
      title: "Free High-Speed WiFi",
      description: "Stay connected with complimentary high-speed internet access throughout the property, perfect for both leisure and business travelers.",
      features: ["24/7 Connectivity", "All Areas Covered", "High-Speed Internet", "Device Friendly"]
    },
    {
      icon: Car,
      title: "Free Parking",
      description: "Secure, complimentary parking space for all our guests with easy access to the main building and rooms.",
      features: ["Secure Parking", "24/7 Access", "Car & Bike Friendly", "CCTV Monitored"]
    },
    {
      icon: Coffee,
      title: "Tea & Coffee Service",
      description: "Complimentary tea and coffee service in all rooms with premium local tea blends and fresh coffee.",
      features: ["Premium Tea Blends", "Fresh Coffee", "24/7 Service", "Local Specialties"]
    },
    {
      icon: TreePine,
      title: "Garden & Nature Walks",
      description: "Explore our beautiful gardens and enjoy guided nature walks through the surrounding hills and tea estates.",
      features: ["Landscaped Gardens", "Nature Trails", "Bird Watching", "Photography Spots"]
    },
    {
      icon: Dumbbell,
      title: "Wellness Activities",
      description: "Participate in yoga sessions, meditation classes, and wellness activities in our serene mountain environment.",
      features: ["Morning Yoga", "Meditation Sessions", "Wellness Programs", "Expert Instructors"]
    },
    {
      icon: Bath,
      title: "Clean & Hygienic Facilities",
      description: "All our facilities maintain the highest standards of cleanliness and hygiene for your comfort and safety.",
      features: ["Daily Housekeeping", "Sanitized Rooms", "Clean Bathrooms", "Hygienic Dining"]
    },
    {
      icon: Clock,
      title: "24/7 Front Desk",
      description: "Round-the-clock assistance for all your needs including travel arrangements, local guidance, and emergency support.",
      features: ["24/7 Support", "Travel Assistance", "Local Guidance", "Emergency Help"]
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-gradient-to-b from-mountain-cream to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Amenities & Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-mountain-green mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience comfort and convenience with our comprehensive range of amenities 
            designed to make your stay memorable and relaxing.
          </p>
        </div>

        {/* Featured Amenity - Restaurant */}
        <div className="mb-16">
          <Card className="overflow-hidden border-0 shadow-mountain">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={vegFood} 
                  alt="Pure Vegetarian Food"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-mountain-green rounded-full flex items-center justify-center mr-4">
                    <Utensils className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground">Pure Vegetarian Dining</h3>
                </div>
                <p className="text-muted-foreground mb-6 text-lg">
                  Savor authentic vegetarian cuisine prepared with love and the finest local ingredients. 
                  Our kitchen specializes in traditional recipes that nourish both body and soul.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      South Indian Delicacies
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      North Indian Classics
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      Fresh Local Ingredients
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      Custom Dietary Options
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Other Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.slice(1).map((amenity, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-mountain transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-mountain-green/10 rounded-full flex items-center justify-center mr-4">
                    <amenity.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">{amenity.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">{amenity.description}</p>
                
                <div className="space-y-2">
                  {amenity.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Features */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-mountain-green/10 to-primary/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">What Makes Us Special</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl mb-2">🌿</div>
                <h4 className="font-semibold text-foreground mb-2">Eco-Friendly</h4>
                <p className="text-sm text-muted-foreground">Sustainable practices and environmental consciousness</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🏔️</div>
                <h4 className="font-semibold text-foreground mb-2">Mountain Location</h4>
                <p className="text-sm text-muted-foreground">Breathtaking views of Nilgiri hills from every angle</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">👨‍👩‍👧‍👦</div>
                <h4 className="font-semibold text-foreground mb-2">Family Values</h4>
                <p className="text-sm text-muted-foreground">Traditional Indian hospitality in alcohol-free environment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
