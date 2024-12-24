import Image from 'next/image';

export function Background() {
    return (
        <div className="w-full relative" style={{ paddingTop: '9.56%' }}>
          <Image
            src="/home-page/pattern_green.png"
            alt="Decorative pattern"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
    );
}