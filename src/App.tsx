import { useEffect, useState } from "react"
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import NotFound from "./pages/NotFound"
import Loader from "@/components/Loader"
import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const queryClient = new QueryClient()

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Show loader for 2.5s when user first visits website
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>

            {/* Sticky Bottom Buttons (Mobile Only) */}
<div className="fixed bottom-0 left-0 w-full md:hidden z-50 flex">
  {/* WhatsApp Button */}
  <a
    href="https://wa.me/918948890610"
    target="_blank"
    rel="noopener noreferrer"
    className="w-1/2"
  >
    <Button className="w-full rounded-none py-6 text-lg bg-green-600 hover:bg-green-700">
      <MessageCircle className="w-5 h-5 mr-2" />
      WhatsApp
    </Button>
  </a>

  {/* Call Button */}
  <a href="tel:+918948890610" className="w-1/2">
    <Button className="w-full rounded-none py-6 text-lg bg-blue-600 hover:bg-blue-700">
      <Phone className="w-5 h-5 mr-2" />
      Call Now
    </Button>
  </a>
</div>

          </TooltipProvider>
        </QueryClientProvider>
      )}
    </>
  )
}

export default App
