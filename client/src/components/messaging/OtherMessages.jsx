export default function OtherMessages() {
  return (
    <>
      <div className="flex flex-col gap-2 w-[80%] mx-auto text-center">
        <img src="/noMessages.png" alt="" />
        <p className="font-semibold text-lg">No messages yet</p>
        <p className="text-sm">Reach out and start a conversation to advance your career</p>
        <button className="border border-blue-600 rounded-3xl py-1 px-3 hover:bg-blue-100">Start a message</button>
      </div>
    </>
  );
}
