import { MessageSquare, User, Clock } from "lucide-react";

const WichoCard = ({ message, author, createdAt }: { message: string; author?: string; createdAt?: string }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-blue-700" />
                </div>
                <p className="text-gray-800 leading-relaxed text-sm pt-1">{message}</p>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-gray-50">
                <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                    <User className="w-3.5 h-3.5" />
                    <span>{author ?? "Anónimo"}</span>
                </div>
                {createdAt && (
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{new Date(createdAt).toLocaleString("es-MX", { dateStyle: "medium", timeStyle: "short" })}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WichoCard;
