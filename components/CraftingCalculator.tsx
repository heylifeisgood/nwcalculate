'use client'

import { useState } from 'react'

interface Material {
  name: string
  quantity: number
  price: number
}

export default function CraftingCalculator() {
  const [materials, setMaterials] = useState<Material[]>([
    { name: '', quantity: 0, price: 0 }
  ])
  const [craftingFee, setCraftingFee] = useState(0)
  const [sellingPrice, setSellingPrice] = useState(0)
  const [tradingTax, setTradingTax] = useState(5)

  const addMaterial = () => {
    setMaterials([...materials, { name: '', quantity: 0, price: 0 }])
  }

  const removeMaterial = (index: number) => {
    setMaterials(materials.filter((_, i) => i !== index))
  }

  const updateMaterial = (index: number, field: keyof Material, value: string | number) => {
    const newMaterials = [...materials]
    newMaterials[index] = { ...newMaterials[index], [field]: value }
    setMaterials(newMaterials)
  }

  const totalMaterialCost = materials.reduce(
    (sum, mat) => sum + (mat.quantity * mat.price),
    0
  )
  const totalCost = totalMaterialCost + craftingFee
  const tradingTaxAmount = (sellingPrice * tradingTax) / 100
  const netProfit = sellingPrice - totalCost - tradingTaxAmount
  const profitMargin = sellingPrice > 0 ? ((netProfit / sellingPrice) * 100) : 0

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-nw-accent mb-4">Crafting Cost Calculator</h2>

      {/* Materials Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-nw-text">Materials</h3>
          <button
            onClick={addMaterial}
            className="px-4 py-2 bg-nw-accent text-nw-primary rounded-lg hover:bg-nw-accent/90 transition-colors font-semibold"
          >
            + Add Material
          </button>
        </div>

        {materials.map((material, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-3 p-4 bg-nw-primary rounded-lg">
            <input
              type="text"
              placeholder="Material name"
              value={material.name}
              onChange={(e) => updateMaterial(index, 'name', e.target.value)}
              className="px-3 py-2 bg-nw-secondary border border-nw-accent/30 rounded text-nw-text focus:outline-none focus:border-nw-accent"
            />
            <input
              type="number"
              placeholder="Quantity"
              value={material.quantity || ''}
              onChange={(e) => updateMaterial(index, 'quantity', parseFloat(e.target.value) || 0)}
              className="px-3 py-2 bg-nw-secondary border border-nw-accent/30 rounded text-nw-text focus:outline-none focus:border-nw-accent"
            />
            <input
              type="number"
              placeholder="Price per unit"
              value={material.price || ''}
              onChange={(e) => updateMaterial(index, 'price', parseFloat(e.target.value) || 0)}
              className="px-3 py-2 bg-nw-secondary border border-nw-accent/30 rounded text-nw-text focus:outline-none focus:border-nw-accent"
            />
            <button
              onClick={() => removeMaterial(index)}
              className="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Additional Costs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-nw-text mb-2">
            Crafting Fee
          </label>
          <input
            type="number"
            value={craftingFee || ''}
            onChange={(e) => setCraftingFee(parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 bg-nw-primary border border-nw-accent/30 rounded text-nw-text focus:outline-none focus:border-nw-accent"
            placeholder="0.00"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-nw-text mb-2">
            Selling Price
          </label>
          <input
            type="number"
            value={sellingPrice || ''}
            onChange={(e) => setSellingPrice(parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 bg-nw-primary border border-nw-accent/30 rounded text-nw-text focus:outline-none focus:border-nw-accent"
            placeholder="0.00"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-nw-text mb-2">
            Trading Tax (%)
          </label>
          <input
            type="number"
            value={tradingTax || ''}
            onChange={(e) => setTradingTax(parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 bg-nw-primary border border-nw-accent/30 rounded text-nw-text focus:outline-none focus:border-nw-accent"
            placeholder="5"
          />
        </div>
      </div>

      {/* Results */}
      <div className="bg-nw-primary rounded-lg p-6 space-y-3">
        <h3 className="text-xl font-bold text-nw-accent mb-4">Results</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-nw-text/70">Material Cost</p>
            <p className="text-xl font-bold text-nw-text">{totalMaterialCost.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-nw-text/70">Total Cost</p>
            <p className="text-xl font-bold text-nw-text">{totalCost.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-nw-text/70">Trading Tax</p>
            <p className="text-xl font-bold text-nw-text">{tradingTaxAmount.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-nw-text/70">Net Profit</p>
            <p className={`text-xl font-bold ${netProfit >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {netProfit.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="pt-4 border-t border-nw-accent/30">
          <p className="text-sm text-nw-text/70">Profit Margin</p>
          <p className={`text-2xl font-bold ${profitMargin >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {profitMargin.toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  )
}
