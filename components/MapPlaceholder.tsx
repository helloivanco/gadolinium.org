import { MapPin } from 'lucide-react';

const MapPlaceholder = () => {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
      <div className="relative w-full h-56 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-14 h-14 text-gray-400 mx-auto mb-3" aria-hidden="true" />
          <p className="text-sm text-gray-500 font-medium">Map Location Placeholder</p>
          <p className="text-xs text-gray-400 mt-1">Replace with Google Maps embed</p>
        </div>
      </div>
    </div>
  );
};

export default MapPlaceholder;






