export default function WelcomeSection() {
  return (
    <div
      id="welcome-section"
      className="w-full py-[100px] bg-white flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-5 w-[1152px]">
        <h1 className="text-5xl p-2">Welcome</h1>
        <hr className=" w-[350px] h-[2px] bg-yellow-300 border-0 rounded" />
        <div className="flex flex-col gap-3 text-center m-2">
          <p>
            Welcome to Serenity Cove Luxury Resort & Spa, an oasis of elegance
            nestled in the heart of paradise.
          </p>
          <p>
            Here, luxury meets tranquility in a harmonious blend designed for
            discerning travelers seeking an escape into indulgence.
          </p>
          <p>
            Experience unparalleled service, exquisite accommodations, and a
            world where your preferences are our priority. Embrace the art of
            relaxation and let us make your stay unforgettable.
          </p>
        </div>
      </div>
    </div>
  );
}
