## Rendering Environments:

# Client Side Rendering and Server Side Rendering

## Client Side Rendering
- Large Bundles and More memory
- Resource Heavy
- No SEO
- Less Secure

## Server Side Rendering
- Smaller Bundles
- Resource Efficient
- SEO
- More Secore

## Caching
### 3 Data sources where we get data from [faster to slower]:
- Memory
- File System
- Network

### NextJS built in data cache
- Data cache is based on file system
- fetch('url://', {
    cache: 'no-store',
});
-fetch('url://', {
    next: {revalidate: 10},
});
- Only implemented in fetch function. Not available in axios and you will not get data-cache.

