import SuggestionsFromGroups from "./SuggestionsFromGroups";
import SuggestionsFromUniversity from "./SuggestionsFromUniversity";

export default function MyNetworkSuggestions() {
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg border border-gray-400 p-5">
        <SuggestionsFromUniversity />

        <SuggestionsFromGroups />
      </div>
    </>
  );
}
