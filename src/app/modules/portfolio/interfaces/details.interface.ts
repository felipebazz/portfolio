import { EDetailType } from "../enums/EDetailType.enum";
import { Summary } from "./summary.interface";

export interface IDetails {
  type: EDetailType;
  summary: Summary;
  description: string;
  stacksIds: number[];
  url: string;
  certificateImage?: string;
}
