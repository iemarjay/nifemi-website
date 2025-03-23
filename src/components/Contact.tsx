import Image from "next/image";
import GmailIcon from "/public/icons/gmail.svg";
import Link from "next/link";
import ContactImage from "/public/images/contact.png";

const socailLinks = [
  {
    icon: "/icons/social1.svg",
    href: "https://www.whatsapp.com/08144778546",
  },
  {
    icon: "/icons/social2.svg",
    href: "https://www.instagram.com/socialswithnife?igsh=eW1iNmJibzJqNmxs&utm_source=qr",
  },
  {
    icon: "/icons/social3.svg",
    href: "https://x.com/ni_fe_mii?s=21&t=xP9dAmNCqjYAfBm4TzFjQQ",
  },
  {
    icon: "/icons/social4.svg",
    href: "http://linkedin.com/in/kehinde-odeyemi-5a8a82191",
  },
  {
    icon: "/icons/social5.svg",
    href: "mailto:odeyemiseyifunmi30@gmail.com",
  },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-14 bg-dark">
      <h2 className="text-2xl md:text-[56px] font-semibold text-center pb-6">
        Contact me
      </h2>
      <div className="contain grid grid-cols-1 md:grid-cols-[36%_1fr]">
        <div className="hidden md:flex w-full items-center justify-center">
          <div className="w-[243px] md:h-[375px]">
            <Image
              src={ContactImage}
              alt="Odeyemi ‘Nifemi’ Kehinde Profile Image"
              className="object-contain"
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center md:items-start md:justify-start gap-6">
          <div className="flex flex-col items-center justify-center md:items-start md:justify-start gap-2">
            <h3 className="text-base text-center md:text-start md:text-3xl font-semibold">
              Thank you for exploring my portfolio.
            </h3>
            <p className="text-sm font-normal text-center md:text-start max-w-[450px]">
              Let&apos;s help you reach your target audience & unlock the full
              potential of your brand’s online presence.
            </p>
          </div>
          <Link href="mailto:odeyemiseyifunmi30@gmail.com">
          <button
            type="button"
            className="flex items-center justify-center gap-x-2 ourline-none bg-primary rounded-lg px-4 py-2 min-h-12"
          >
            <Image src={GmailIcon} alt="gmail icon" />
            <span className="text-base font-semibold">Hire me</span>
          </button>
          </Link>
          <nav className="flex items-center justify-center md:justify-start gap-6">
            {socailLinks.map((social, index) => (
              <Link key={index} href={social.href}>
                <Image
                  src={social.icon}
                  alt="social icon"
                  width={32}
                  height={32}
                />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Contact;
