import { Card, CardContent } from "@/components/ui/card";

export default function DigitalWallets() {
  return (
    <>
      <a href="#" className="block">
        <Card className="hover:border-primary/30">
          <CardContent className="px-4 py-3">
            <div className="mb-2 flex items-center gap-2">
              <img
                className="h-6 w-6 object-contain"
                src={process.env.BASE_URL + "/cyripto-icons/bitcoin.svg"}
              />
              <span>Bitcoin Wallet</span>
            </div>
            <div>4.434953 BTC</div>
          </CardContent>
        </Card>
      </a>
      <a href="#" className="block">
        <Card className="hover:border-primary/30">
          <CardContent className="px-4 py-3">
            <div className="mb-2 flex items-center gap-2">
              <img
                className="h-6 w-6 object-contain"
                src="/cyripto-icons/ethereum.svg"
              />
              <span>Ethereum Wallet</span>
            </div>
            <div>4.434953 ETH</div>
          </CardContent>
        </Card>
      </a>
      <a href="#" className="block">
        <Card className="hover:border-primary/30">
          <CardContent className="px-4 py-3">
            <div className="mb-2 flex items-center gap-2">
              <img
                className="h-6 w-6 object-contain"
                src="/cyripto-icons/avalanche.svg"
              />
              <span>Avalanche Wallet</span>
            </div>
            <div>3.434953 ETH</div>
          </CardContent>
        </Card>
      </a>
    </>
  );
}
