import Image from "next/image";

export default function MidImage() {
  return (
    <div>
      <Image
        src="/assets/images/main.jpeg"
        alt="나영 관휘 사진"
        width={300}
        height={500}
      />
    </div>
  );
}
