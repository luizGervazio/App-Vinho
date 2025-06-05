import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsInt,
  Min,
  Max,
  IsDecimal,
} from 'class-validator';

export class CreateWineDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  producer: string;

  // @IsString()
  // @IsOptional()
  // photoUrl?: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsInt()
  @Min(1900)
  @Max(new Date().getFullYear())
  year: number;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  price: number; // Usamos string pois o class-validator espera strings para `@IsDecimal`

  @IsString()
  @IsNotEmpty()
  grapeType: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  alcoholPercentage: number;

  @IsString()
  @IsNotEmpty()
  description: string;
}
