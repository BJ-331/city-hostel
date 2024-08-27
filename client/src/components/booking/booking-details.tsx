import { Toaster } from "react-hot-toast";
import {
  BreadCrumbLayout,
  BreadCrumbs,
  InfoText,
  LoaderSpinner,
  MediumInfoText,
} from "../../units";
import { useParams } from "react-router-dom";
import { useGetBookingByIdQuery } from "../../state-management/api/booking-api";

interface userDetails {
  userName: string;
  address: string;
  email: string;
  contact: string;
  role: string;
  _id: string;
}

interface roomDetails {
  frequency: string;
  price: string;
  _id: string;
  contact: string;
  email: string;
  hostelName: string;
  imgUrl: string;
  location: string;
  peopleNumber: number;
  title: string;
  totalbed: number;
}

interface bookingDetails {
  user: userDetails;
  room: roomDetails;
  checkInDate: Date;
  createdAt: Date;
}

export const BookingDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetBookingByIdQuery(id);
  console.log(data);

  return (
    <main className="flex flex-col p-8 gap-8">
      <Toaster />

      <header>
        <BreadCrumbs>
          <BreadCrumbLayout path="/rooms" title="Rooms" />
          <BreadCrumbLayout path="/" title="booking-details" current={true} />
        </BreadCrumbs>
      </header>

      {isLoading ? (
        <LoaderSpinner />
      ) : (
        <section className="flex flex-col gap-4 bg-bg-secondary p-4">
          <header className="grid grid-cols-6 place-items-center justify-between border-b border-b-other-white-200  p-2">
            <InfoText title="User" />
            <InfoText title="Contact" />
            <InfoText title="Address" />
            <InfoText title="Arrival Date" />
            <InfoText title="Submitted Date" />
            <InfoText title="Action" />
          </header>

          {data?.data.length > 0 ? (
            data?.data.map((detail: bookingDetails, index: number) => (
              <div
                className="grid grid-cols-6 place-items-center p-2 border-b border-b-other-white-200  "
                key={detail.user._id + index}
              >
                <section className=" ">
                  <InfoText title={detail.user.userName} />
                  <InfoText title={detail.user.email} />
                </section>
                <InfoText title={detail.user.contact} />
                <InfoText title={detail.user.address} />
                <InfoText title={detail.checkInDate.toString().slice(0, 10)} />
                <InfoText
                  title={
                    detail?.createdAt?.toString().slice(0, 10) ?? "2024-1-10"
                  }
                />
                <div className="   flex gap-4  ">
                  <button
                    type="button"
                    className="text-sm bg-love px-3 py-2 rounded-md text-other-white-100 font-semibold hover:animate-glow"
                  >
                    Reject
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-brand px-3 py-2 text-sm text-other-white-100 font-semibold hover:animate-glow"
                  >
                    Accept
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="flex place-self-center mt-12">
              <MediumInfoText title="No data has been found yet!!" />
            </div>
          )}
        </section>
      )}
    </main>
  );
};
