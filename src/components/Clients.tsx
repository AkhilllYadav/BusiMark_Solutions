import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const clients = [
  { name: "IB Industries", logo: "https://ibindustries.in/wp-content/uploads/2021/10/ib-logo-new-logo.png" },
  { name: "Stratagi", logo: "https://stratagi-ai-ek2j.vercel.app/logo.png" },
  { name: "SalonHub360", logo: "https://media.licdn.com/dms/image/v2/D563DAQGSB879jF2qXQ/image-scale_127_750/B56ZeBsnS_HEAM-/0/1750227646492/salonhub360_cover?e=1756620000&v=beta&t=izU3nf9vvKmFLY-PoZUsSsIv_Ml8vA9E6zXB50ny5PA" },
  { name: "FresherTalent.in", logo: "https://media.licdn.com/dms/image/v2/D563DAQEob25dLXRzGw/image-scale_127_750/B56ZV.X5ZqHoAQ-/0/1741581949071/freshertalent_cover?e=1756620000&v=beta&t=Bg_Br4LHcVpDm4mB4hkUUHG12cZnFKHhx9utxSStSPs" },
  { name: "Eco-Nest Creation", logo: "https://instagram.fdel5-3.fna.fbcdn.net/v/t51.2885-19/491492967_695852112901792_7260124240459929428_n.jpg?stp=dst-jpg_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDI0LmMyIn0&_nc_ht=instagram.fdel5-3.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QFMuzlDxWx22f__pjZUOU0Fkx4Jz_ve4y5xrhOEZC_WJVoR2mj9gODV83Ko-0bxDSE&_nc_ohc=n7C-bMyAppMQ7kNvwH59KCt&_nc_gid=ge4Bkwd0fS3Ec6Blv-bw1A&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfX87bgCKoYDHuiM9LHp7ltM9th0qzf3IsmLb9WS2kLZ3g&oe=68B0815A&_nc_sid=8b3546" }
  
]

export default function Clients() {
  return (
    <section className="w-full py-16 px-6 lg:px-20 bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Meet our clients
        </h2>
        <p className="text-muted-foreground mt-2">
          We are proud to work with industry-leading brands worldwide.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {clients.map((client, index) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-24 flex items-center justify-center hover:shadow-lg transition rounded-2xl">
              <CardContent className="flex items-center justify-center p-4">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 object-contain grayscale hover:grayscale-0 transition"
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
