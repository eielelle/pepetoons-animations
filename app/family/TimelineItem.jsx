import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function TimelineItem({ img, title, year, description, isEnd }) {
  return (
    <li>
      <div className="timeline-middle">
        <FontAwesomeIcon
          icon={faExclamationCircle}
          className="text-white-500 w-8 h-8"
        />
      </div>
      <div
        className={`${
          isEnd ? "timeline-end md:text-start" : "timeline-start md:text-end"
        } mb-10`}
      >
        <div className="grid grid-cols-3 items-center gap-4">
          {isEnd && (
            <div className="bg-black p-2 inline-block">
              <div className="bg-white p-2">
                <Image
                  src={img}
                  alt="img"
                  width={200}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          )}

          <div className="col-span-2">
            <time className="font-mono italic text-xl popup">{year}</time>
            <div
              className={`text-4xl my-4 font-black border-primary popup ${
                isEnd ? "border-l-4 pl-4" : "border-r-4 pr-4"
              }`}
            >
              {title}
            </div>
            <p className="font-[montserrat] popup">{description}</p>
          </div>

          {!isEnd && (
            <div className="bg-black p-2 inline-block">
              <div className="bg-white p-2">
                <Image
                  src={img}
                  alt="img"
                  width={200}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <hr />
    </li>
  );
}
