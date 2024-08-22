import Text "mo:base/Text";

actor {
  public query func search(searchQuery : Text) : async Text {
    // For this MVP, we'll just return a simple message with the query
    return "Searching for: " # searchQuery;
  };
}