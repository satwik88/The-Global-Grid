export function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();

  const diffInMs = now.getTime() - date.getTime();
  const diffInMins = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMins / 60);

  if (diffInMins < 1) {
    return "Updated just now";
  } else if (diffInMins < 60) {
    return `Updated ${diffInMins} min ago`;
  } else if (diffInHours < 24) {
    return `Updated ${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  } else {

    const days = Math.floor(diffInHours / 24);
    return `Updated ${days} day${days > 1 ? 's' : ''} ago`;
  }
}

export function isRecent(dateString: string, hoursThreshold: number = 2): boolean {
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
  return diffInHours <= hoursThreshold && diffInHours >= 0;
}
