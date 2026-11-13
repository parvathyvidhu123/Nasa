export function getContextualFallback(destination?: string): string {
  switch (destination?.toLowerCase()) {
    case 'moon':
      return 'https://images-assets.nasa.gov/image/as11-40-5927/as11-40-5927~medium.jpg';
    case 'mars':
      return 'https://images-assets.nasa.gov/image/PIA04304/PIA04304~medium.jpg';
    case 'deep space':
      return 'https://images-assets.nasa.gov/image/PIA17046/PIA17046~medium.jpg';
    case 'saturn':
      return 'https://images-assets.nasa.gov/image/PIA17172/PIA17172~medium.jpg';
    case 'jupiter':
      return 'https://images-assets.nasa.gov/image/PIA01259/PIA01259~orig.jpg';
    case 'asteroids':
      return 'https://images-assets.nasa.gov/image/PIA19167/PIA19167~orig.jpg';
    default:
      return 'https://images-assets.nasa.gov/image/as17-148-22727/as17-148-22727~medium.jpg';
  }
}

