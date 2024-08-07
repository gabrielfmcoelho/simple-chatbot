import {
  AlertCircle,
  Ban,
  Link,
  Mail,
  MouseIcon,
  Users2Icon,
} from "lucide-react";

export function MonthlyCampaignState() {
  return (
    <div className="space-y-5">
      <div className="flex items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
          <Mail className="h-6 w-6" />
        </div>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Emails</p>
        </div>
        <div className="ml-auto space-x-3">
          <span>12,346</span>
          <span className="text-green-600">0.3%</span>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
          <Link className="h-6 w-6" />
        </div>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Opened</p>
        </div>
        <div className="ml-auto space-x-3">
          <span>8,734</span>
          <span className="text-green-600">2.1%</span>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
          <MouseIcon className="h-6 w-6" />
        </div>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Clicked</p>
        </div>
        <div className="ml-auto space-x-3">
          <span>600</span>
          <span className="text-red-600">2.1%</span>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
          <Users2Icon className="h-6 w-6" />
        </div>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Subscribe</p>
        </div>
        <div className="ml-auto space-x-3">
          <span>490</span>
          <span className="text-red-600">8.5%</span>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
          <AlertCircle className="h-6 w-6" />
        </div>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Complaints</p>
        </div>
        <div className="ml-auto space-x-3">
          <span>490</span>
          <span className="text-green-600">4.5%</span>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
          <Ban className="h-6 w-6" />
        </div>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Unsubscribe</p>
        </div>
        <div className="ml-auto space-x-3">
          <span>1.200</span>
          <span className="text-green-600">0.5%</span>
        </div>
      </div>
    </div>
  );
}
