export default function getTime(dateString: string): string {
    const postDate = new Date(dateString);
    const currentDate = new Date();
    const diffInMilliseconds = currentDate.getTime() - postDate.getTime();
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24)); // Milliseconds to days

    if (diffInDays < 1) {
      return "Today";
    } else if (diffInDays === 1) {
      return "1 day ago";
    } else if (diffInDays < 30) {
      return `${diffInDays} days ago`;
    } else {
      const diffInMonths = Math.floor(diffInDays / 30);
      if (diffInMonths === 1) {
        return "1 month ago";
      } else if (diffInMonths < 12) {
        return `${diffInMonths} months ago`;
      } else {
        const diffInYears = Math.floor(diffInMonths / 12);
        if (diffInYears === 1) {
          return "1 year ago";
        } else {
          return `${diffInYears} years ago`;
        }
      }
    }
};