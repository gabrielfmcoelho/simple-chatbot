import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import CyriptoCurrencyPriceCards from "./cyripto-currency-price-cards";

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-6">
          <CyriptoCurrencyPriceCards />
        </div>
        <Card className="col-span-1 md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle>Cryptocurrency Prices</CardTitle>
            <CardDescription>
              Current prices and performance of the top cryptocurrencies.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cryptocurrency</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>24h Change</TableHead>
                  <TableHead>Market Cap</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <img
                        src="/placeholder.svg"
                        alt="Bitcoin"
                        className="h-6 w-6"
                        width="24"
                        height="24"
                        style={{ aspectRatio: "24/24", objectFit: "cover" }}
                      />
                      <span>Bitcoin (BTC)</span>
                    </div>
                  </TableCell>
                  <TableCell>$56,789.00</TableCell>
                  <TableCell className="text-green-500">+2.3%</TableCell>
                  <TableCell>$1.2T</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <img
                        src="/placeholder.svg"
                        alt="Ethereum"
                        className="h-6 w-6"
                        width="24"
                        height="24"
                        style={{ aspectRatio: "24/24", objectFit: "cover" }}
                      />
                      <span>Ethereum (ETH)</span>
                    </div>
                  </TableCell>
                  <TableCell>$1,789.00</TableCell>
                  <TableCell className="text-red-500">-1.5%</TableCell>
                  <TableCell>$210B</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <img
                        src="/placeholder.svg"
                        alt="Litecoin"
                        className="h-6 w-6"
                        width="24"
                        height="24"
                        style={{ aspectRatio: "24/24", objectFit: "cover" }}
                      />
                      <span>Litecoin (LTC)</span>
                    </div>
                  </TableCell>
                  <TableCell>$234.00</TableCell>
                  <TableCell className="text-green-500">+0.7%</TableCell>
                  <TableCell>$15.6B</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <img
                        src="/placeholder.svg"
                        alt="Ripple"
                        className="h-6 w-6"
                        width="24"
                        height="24"
                        style={{ aspectRatio: "24/24", objectFit: "cover" }}
                      />
                      <span>Ripple (XRP)</span>
                    </div>
                  </TableCell>
                  <TableCell>$0.56</TableCell>
                  <TableCell className="text-red-500">-3.2%</TableCell>
                  <TableCell>$25.3B</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
