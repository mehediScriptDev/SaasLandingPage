import { Sparkles } from 'lucide-react';

const SectionBadge = ({text}) => {
    return (
        <div className="inline-flex items-center gap-2 text-white bg-linear-to-r from-black via-primary/5 to-black backdrop-blur-3xl rounded-full border border-primary/25 px-3 py-1 mb-1 lg:mb-0">
            {" "}
            <Sparkles className="w-3 h-3 text-white" />{" "}
            <span className="text-xs lg:text-sm font-medium"> {text}</span>{" "}
          </div>
    );
};

export default SectionBadge;