import Flag from "react-world-flags";

export function SalesByCountries() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Flag code="US" className="h-10 w-10 rounded-full object-cover" />
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">United states</p>
          <p className="text-sm text-muted-foreground">
            +27.4% from last month
          </p>
        </div>
        <div className="ml-auto font-medium">+$1,999.00</div>
      </div>
      <div className="flex items-center">
        <Flag code="BR" className="h-10 w-10 rounded-full object-cover" />
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Brazil</p>
          <p className="text-sm text-muted-foreground">
            +20.1% from last month
          </p>
        </div>
        <div className="ml-auto font-medium">+$39.00</div>
      </div>
      <div className="flex items-center">
        <Flag code="IN" className="h-10 w-10 rounded-full object-cover" />
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">India</p>
          <p className="text-sm text-muted-foreground">+22% from last month</p>
        </div>
        <div className="ml-auto font-medium">+$299.00</div>
      </div>
      <div className="flex items-center">
        <Flag code="AU" className="h-10 w-10 rounded-full object-cover" />
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Australia</p>
          <p className="text-sm text-muted-foreground">
            +10.9% from last month
          </p>
        </div>
        <div className="ml-auto font-medium">+$99.00</div>
      </div>
      <div className="flex items-center">
        <Flag code="FR" className="h-10 w-10 rounded-full object-cover" />
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">France</p>
          <p className="text-sm text-muted-foreground">+2.1% from last month</p>
        </div>
        <div className="ml-auto font-medium">+$39.00</div>
      </div>
      <div className="flex items-center">
        <Flag code="CH" className="h-10 w-10 rounded-full object-cover" />
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">China</p>
          <p className="text-sm text-muted-foreground">+2.1% from last month</p>
        </div>
        <div className="ml-auto font-medium">+$33.50</div>
      </div>
    </div>
  );
}
