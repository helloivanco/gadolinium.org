const MapPlaceholder = () => {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
      <div className="relative w-full h-56 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <svg className="w-14 h-14 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-sm text-gray-500 font-medium">Map Location Placeholder</p>
          <p className="text-xs text-gray-400 mt-1">Replace with Google Maps embed</p>
        </div>
      </div>
    </div>
  );
};

export default MapPlaceholder;





