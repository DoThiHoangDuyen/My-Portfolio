import { useTheme } from "@/hooks/useTheme";
import { StarBackground } from "./StarBackground";

export const DynamicBackground = () => {
  const { isDarkMode } = useTheme();

  if (isDarkMode) {
    return <StarBackground />;
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        style={{ filter: "brightness(0.8)" }}
      >
        <source src="/projects/Download.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Gradient overlay để tăng độ tương phản cho chữ */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.4) 100%)'
        }}
      ></div>
    </div>
  );
};
