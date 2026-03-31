"use client";

import { useEffect, useState } from "react";
import WichoCard from "seitc/app/components/wicho/card";
import { Send } from "lucide-react";

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
            headers: { "Content-Type": "application/json" },
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
        <main className="min-h-screen bg-gray-50 pt-20">

            {/* Header */}
            <div className="bg-blue-900 text-white py-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <h1 className="text-3xl font-bold mb-2">Wicho Posts</h1>
                    <p className="text-blue-200 text-sm">Mensajes y publicaciones de la comunidad SEITC</p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 flex flex-col lg:flex-row gap-8">

                {/* Posts */}
                <section className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-700 mb-5">
                        {posts.length > 0 ? `${posts.length} publicación${posts.length !== 1 ? "es" : ""}` : "Publicaciones"}
                    </h2>
                    {posts.length === 0 ? (
                        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-10 text-center text-gray-400">
                            <p className="text-sm">Aún no hay publicaciones. ¡Sé el primero en escribir algo!</p>
                        </div>
                    ) : (
                        <div className="grid gap-4 sm:grid-cols-2">
                            {posts.map((post) => (
                                <WichoCard
                                    key={post.id}
                                    message={post.message}
                                    author={post.author ?? undefined}
                                    createdAt={post.createdAt}
                                />
                            ))}
                        </div>
                    )}
                </section>

                {/* Form */}
                <aside className="w-full lg:w-80 flex-shrink-0">
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sticky top-24">
                        <h2 className="text-base font-semibold text-gray-800 mb-4">Nueva publicación</h2>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div>
                                <label className="block text-xs font-medium text-gray-600 mb-1">Mensaje</label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Escribe tu mensaje..."
                                    rows={4}
                                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-600 mb-1">Autor <span className="text-gray-400">(opcional)</span></label>
                                <input
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                    placeholder="Tu nombre"
                                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading || !message.trim()}
                                className="w-full flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg px-4 py-2.5 transition-colors"
                            >
                                <Send className="w-4 h-4" />
                                {loading ? "Publicando..." : "Publicar"}
                            </button>
                        </form>
                    </div>
                </aside>

            </div>
        </main>
    );
};

export default WichoPage;
