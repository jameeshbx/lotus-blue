"use client";

interface CourseImageProps {
  category: string;
  title: string;
  className?: string;
}

export function CourseImage({
  category,
  title,
  className = "",
}: CourseImageProps) {
  const getCategoryColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "coding":
        return "bg-gradient-to-br from-green-500 to-blue-600";
      case "testing":
        return "bg-gradient-to-br from-purple-500 to-pink-600";
      case "designing":
        return "bg-gradient-to-br from-orange-500 to-red-600";
      default:
        return "bg-gradient-to-br from-gray-500 to-gray-700";
    }
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "coding":
        return "💻";
      case "testing":
        return "🔍";
      case "designing":
        return "🎨";
      default:
        return "📚";
    }
  };

  return (
    <div className={`relative h-48 lg:h-full ${className}`}>
      <div
        className={`w-full h-full rounded-l-md ${getCategoryColor(
          category
        )} flex items-center justify-center`}
      >
        <div className="text-center text-white">
          <div className="text-6xl mb-4">{getCategoryIcon(category)}</div>
          <div className="text-lg font-semibold">{category}</div>
        </div>
      </div>
      <div className="absolute top-8 left-12">
        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
          {category}
        </span>
      </div>
    </div>
  );
}
