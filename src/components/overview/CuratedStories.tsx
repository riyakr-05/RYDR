import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { STORIES_DATA } from '../../data/mockData';
import { Badge } from '../ui/Badge';

export const CuratedStories: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-serif text-2xl font-semibold text-plum tracking-tight">
            Curated Atelier Journal
          </h3>
          <p className="text-sm text-plum-light">
            Editorial highlights, engineering breakthroughs & Obsidian private client gatherings
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {STORIES_DATA.map((story) => (
          <div
            key={story.id}
            className="group bg-white rounded-3xl p-4 border border-lavender/70 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-4">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="plum" size="sm">
                    {story.category}
                  </Badge>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-plum-muted">
                  <span>RYDR Dispatch</span>
                  <span>{story.readTime}</span>
                </div>
                <h4 className="font-serif text-base font-semibold text-plum group-hover:text-lavender-deep transition-colors line-clamp-1">
                  {story.title}
                </h4>
                <p className="text-xs text-plum-light line-clamp-2 leading-relaxed">
                  {story.description}
                </p>
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-lavender/40 flex items-center justify-between text-xs font-semibold text-plum group-hover:text-lavender-deep">
              <span>Read Journal Note</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
