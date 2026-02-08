import { Achievement } from "@/types/achievement";

const AchievementItem = ({ achievement }: { achievement: Achievement }) => {
  return (
    <div className="relative flex gap-4 group">
      <div className="relative flex flex-col items-center ">
        <span className="h-3 w-3 rounded-full bg-primary transition-all duration-300 group-hover:scale-[1.1] shadow-[0_0_10px_rgba(255,90,60,0.6)] group-hover:shadow-[0_0_20px_rgba(255,90,60,0.6)]" />
      </div>

      <div className="w-full border-[0.5px] border-secondary/60 bg-secondary/5 backdrop-blur-3xl rounded-xl border-dashed p-4 transition-all duration-300 hover:bg-secondary/15">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
          <h3 className="text-primary font-semibold text-sm md:text-base">
            {achievement.title}
          </h3>
          <span className="text-xs text-secondary">
            {achievement.date}
          </span>
        </div>

        <p className="text-secondary text-sm mt-1">
          {achievement.organization}
        </p>

        <ul className="mt-2 list-disc list-inside space-y-1 text-xs md:text-sm text-secondary">
          {achievement.description.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>

        {achievement.prize && (
          <div className="mt-3 inline-block text-xs px-2 py-1 rounded-full border border-green-500 border-dashed text-green-400">
            Prize: {achievement.prize}
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementItem;
