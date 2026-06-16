import type { Metadata } from "next";
import { Masthead } from "@/components/newspaper/Masthead";
import { Footer } from "@/components/newspaper/Footer";
import { BookmarksList } from "@/components/newspaper/BookmarkButton";

export const metadata: Metadata = {
  title: "Bookmarks",
  description: "Your saved articles from The Global Grid",
};

export default function BookmarksPage() {
  return (
    <>
      <Masthead />

      <main className="mx-auto max-w-3xl px-4 py-8 md:px-8">
        <header className="text-center mb-10">
          <h1 className="headline-lg">Saved Articles</h1>
          <hr className="rule-thin mt-4 max-w-xs mx-auto" />
        </header>

        <BookmarksList />
      </main>

      <Footer />
    </>
  );
}
