import { Inter, Lusitana, Noto_Kufi_Arabic } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const kufi = Noto_Kufi_Arabic({
  weight: ["400", "700"],
  subsets: ["arabic"],
});
