export default function NotificationMentions() {
  return (
    <>
      <div className="flex flex-col gap-5 bg-white p-5">
        <img src="/noRecord.png" alt="" />
        <div className="flex flex-col text-center">
          <p className="text-lg font-semibold">No new mentions</p>
          <p className="text-md w-2/3 mx-auto">
            When someone tags you in a post or comment, that notification will appear here.
          </p>
        </div>
      </div>
    </>
  );
}
