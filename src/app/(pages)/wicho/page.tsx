
"use client";

import { useEffect, useState } from "react";
import WichoCard from "seitc/app/components/wicho/card";

type WichoPost = {
    id: string;
    message: string;
    author?: string | null;
    createdAt: string;
};

const WichoPage = () => {
    const [posts, setPosts] = useState<WichoPost[]>([]);
    const [message, setMessage] = useState("");
    const [author, setAuthor] = useState("");
    const [loading, setLoading] = useState(false);

    const loadPosts = async () => {
        const response = await fetch("/api/wicho-post", { cache: "no-store" });
        const data = await response.json();
        setPosts(data);
    };

    const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        event.preventDefault();
        if (!message.trim()) return;

        setLoading(true);
        await fetch("/api/wicho-post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: message.trim(),
                author: author.trim() || undefined,
            }),
        });

        setMessage("");
        setAuthor("");
        await loadPosts();
        setLoading(false);
    };

    useEffect(() => {
        void loadPosts();
    }, []);

    return (
        <main className="p-6 bg-blue-400 min-h-screen">
            <h1 className="text-2xl font-semibold">Wicho Posts</h1>
            <div className="bg-gray-50 w-full h-60">
                <h2 className="text-lg font-semibold mt-4">carrusel de fotos o algo asi</h2>
            </div>

            <div className="">

                <div className="p-6 flex flex-wrap gap-5">
                    {posts.map((post) => (
                        <WichoCard key={post.id} message={post.message} author={post.author ?? "Anonymous"} createdAt={post.createdAt} />
                    ))}
                    {posts.length === 0 && <p className="text-sm opacity-70">No posts yet.</p>}
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 fixed bottom-10 right-10 p-10 bg-white rounded-lg">
                    <h2 className="text-lg font-semibold">Add a new post</h2>
                    <input
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        placeholder="Message"
                        className="w-full rounded border px-3 py-2"
                    />
                    <input
                        value={author}
                        onChange={(event) => setAuthor(event.target.value)}
                        placeholder="Author (optional)"
                        className="w-full rounded border px-3 py-2"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="rounded border px-4 py-2"
                    >
                        {loading ? "Posting..." : "Post"}
                    </button>
                </form>

            </div>
        </main>
    );
};

export default WichoPage;