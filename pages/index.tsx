import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Box, Button, Center, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Register = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <>
      <div style={{ backgroundColor: "#E85B9E", height: "100vh" }}>
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
              <VStack alignItems="center" justifyContent="center" h="full">
                <Text>ยินดีต้อนรับเข้าสู่</Text>
                <Text>ให้ ไว้ ยืน</Text>
              </VStack>
            </div>
            <div className="keen-slider__slide number-slide2">
              <VStack p="50px 30px" h="full">
                <Text> ฝาก และ รับ </Text>
                <Text> สิทธิลุ้นรางวัล</Text>
                <Box
                  h="full"
                  display="flex"
                  flexDir="column"
                  justifyContent="center"
                >
                  <Center>
                    <Text> ฝากเงิน </Text>
                  </Center>
                </Box>
              </VStack>
            </div>
            <div className="keen-slider__slide number-slide3">
              <VStack
                p="50px 30px"
                justifyContent="space-between"
                alignItems="center"
                h="full"
              >
                <Text mr="20px"> begin your saving </Text>
                <Box
                  style={{ backgroundColor: "black", color: "white" }}
                  p="10px 80px"
                  borderRadius="22px"
                  onClick={() => router.push("/ticket")}
                >
                  {" "}
                  เริ่มต้น{" "}
                </Box>
              </VStack>
            </div>
          </div>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </div>
        {loaded && instanceRef.current && (
          <div className="dots">
            {[0, 1, 2].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default Register;
