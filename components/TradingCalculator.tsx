'use client'

import { useState } from 'react'

export default function TradingCalculator() {
  const [buyPrice, setBuyPrice] = useState(0)
  const [sellPrice, setSellPrice] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [buyTax, setBuyTax] = useState(2.5)
  const [sellTax, setSellTax] = useState(5)
  const [listingFee, setListingFee] = useState(0)

  const totalBuyCost = buyPrice * quantity
  const buyTaxAmount = (totalBuyCost * buyTax) / 100
  const totalBuyWithTax = totalBuyCost + buyTaxAmount

  const totalSellRevenue = sellPrice * quantity
  const sellTaxAmount = (totalSellRevenue * sellTax) / 100
  const totalListingFee = listingFee * quantity
  const netRevenue = totalSellRevenue - sellTaxAmount - totalListingFee

  const profit = netRevenue - totalBuyWithTax
  const profitPerItem = profit / quantity
  const roi = totalBuyWithTax > 0 ? ((profit / totalBuyWithTax) * 100) : 0

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-nw-accent mb-4">Trading Post Calculator</h2>

      {/* Input Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Buy Section */}
        <div className="space-y-4 p-4 bg-nw-primary rounded-lg">
          <h3 className="text-lg font-semibold text-nw-accent">Buying</h3>
          <div>
            <label className="block text-sm font-medium text-nw-text mb-2">
              Buy Price (per item)
            </label>
            <input
              type="number"
              value={buyPrice || ''}
              onChange={(e) => setBuyPrice(parseFloat(e.target.value) || 0)}
              className="w-full px-3 py-2 bg-nw-secondary border border-nw-accent/30 rounded text-nw-text focus:outline-none focus:border-nw-accent"
              placeholder="0.00"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-nw-text mb-2">
              Buy Tax (%)
            </label>
            <input
              type="number"
              value={buyTax || ''}
              onChange={(e) => setBuyTax(parseFloat(e.target.value) || 0)}
              className="w-full px-3 py-2 bg-nw-secondary border border-nw-accent/30 rounded text-nw-text focus:outline-none focus:border-nw-accent"
              placeholder="2.5"
            />
          </div>
        </div>

        {/* Sell Section */}
        <div className="space-y-4 p-4 bg-nw-primary rounded-lg">
          <h3 className="text-lg font-semibold text-nw-accent">Selling</h3>
          <div>
            <label className="block text-sm font-medium text-nw-text mb-2">
              Sell Price (per item)
            </label>
            <input
              type="number"
              value={sellPrice || ''}
              onChange={(e) => setSellPrice(parseFloat(e.target.value) || 0)}
              className="w-full px-3 py-2 bg-nw-secondary border border-nw-accent/30 rounded text-nw-text focus:outline-none focus:border-nw-accent"
              placeholder="0.00"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-nw-text mb-2">
              Sell Tax (%)
            </label>
            <input
              type="number"
              value={sellTax || ''}
              onChange={(e) => setSellTax(parseFloat(e.target.value) || 0)}
              className="w-full px-3 py-2 bg-nw-secondary border border-nw-accent/30 rounded text-nw-text focus:outline-none focus:border-nw-accent"
              placeholder="5"
            />
          </div>
        </div>
      </div>

      {/* Additional Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-nw-text mb-2">
            Quantity
          </label>
          <input
            type="number"
            value={quantity || ''}
            onChange={(e) => setQuantity(parseFloat(e.target.value) || 1)}
            className="w-full px-3 py-2 bg-nw-primary border border-nw-accent/30 rounded text-nw-text focus:outline-none focus:border-nw-accent"
            placeholder="1"
            min="1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-nw-text mb-2">
            Listing Fee (per item)
          </label>
          <input
            type="number"
            value={listingFee || ''}
            onChange={(e) => setListingFee(parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 bg-nw-primary border border-nw-accent/30 rounded text-nw-text focus:outline-none focus:border-nw-accent"
            placeholder="0.00"
          />
        </div>
      </div>

      {/* Results */}
      <div className="bg-nw-primary rounded-lg p-6 space-y-4">
        <h3 className="text-xl font-bold text-nw-accent mb-4">Results</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Buy Summary */}
          <div className="space-y-2">
            <h4 className="font-semibold text-nw-accent/80">Buy Summary</h4>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-sm text-nw-text/70">Item Cost:</span>
                <span className="text-nw-text">{totalBuyCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-nw-text/70">Buy Tax:</span>
                <span className="text-nw-text">{buyTaxAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold border-t border-nw-accent/30 pt-1">
                <span className="text-nw-text">Total Cost:</span>
                <span className="text-nw-text">{totalBuyWithTax.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Sell Summary */}
          <div className="space-y-2">
            <h4 className="font-semibold text-nw-accent/80">Sell Summary</h4>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-sm text-nw-text/70">Revenue:</span>
                <span className="text-nw-text">{totalSellRevenue.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-nw-text/70">Sell Tax:</span>
                <span className="text-nw-text">{sellTaxAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-nw-text/70">Listing Fee:</span>
                <span className="text-nw-text">{totalListingFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold border-t border-nw-accent/30 pt-1">
                <span className="text-nw-text">Net Revenue:</span>
                <span className="text-nw-text">{netRevenue.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Profit Summary */}
        <div className="pt-4 border-t border-nw-accent/30 space-y-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-nw-text/70">Total Profit</p>
              <p className={`text-2xl font-bold ${profit >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {profit.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-sm text-nw-text/70">Profit per Item</p>
              <p className={`text-2xl font-bold ${profitPerItem >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {profitPerItem.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-sm text-nw-text/70">ROI</p>
              <p className={`text-2xl font-bold ${roi >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {roi.toFixed(2)}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
