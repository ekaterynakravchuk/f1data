import { useRef, useEffect } from "react";
import gsap from "gsap";

export const F1LightsLoader = () => {
  const lightsRef = useRef<(HTMLDivElement | null)[]>([]);
  const inactiveLightsRef = useRef<(HTMLDivElement | null)[]>([]); // Для второго ряда

  useEffect(() => {
    // Включение огней с более длинным интервалом
    gsap.to(lightsRef.current, {
      backgroundColor: "#b5151b", // Красный цвет огней
      duration: 0.2, // Плавное включение
      stagger: 0.8, // Увеличенный интервал между загоранием огней
    });

    // Задержка перед тем, как все огни погаснут одновременно
    gsap.delayedCall(4, () => {
      gsap.to(lightsRef.current, {
        backgroundColor: "#333", // Гасим огни
        duration: 0.2, // Плавное гашение
      });
    });
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center py-6">
      <div className="bg-gray-800 p-4 rounded-lg mb-4">
        <div className="flex space-x-2">
          {/* Второй ряд огней (всегда погашенные) */}
          {[...Array(5)].map((_, index) => (
            <div
              key={`inactive-${index}`}
              ref={(el) => {
                if (el) inactiveLightsRef.current[index] = el;
              }}
              className="w-8 h-8 bg-[#333] rounded-full"
            ></div>
          ))}
        </div>
        <div className="flex space-x-2 mt-2">
          {/* Первый ряд огней (будут включаться и гаснуть) */}
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) lightsRef.current[index] = el;
              }}
              className="w-8 h-8 bg-[#333] rounded-full"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
