<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class IndustryType extends Enum
{
    const InformationTechnology = 0;
    const Telecommunications = 1;
    const Agriculture = 2;
    const Construction = 3;
    const Education = 4;
    const Healthcare = 5;
    const NewsMedia = 6;
    const FoodService = 7;
    const DesignAndMultimedia = 8;
    const BankingAndFinance = 9;
    const Consultancy = 10;
    const NonProfitOrganization = 11;
    const Tourism = 12;
    const Others = 13;

    public static function getDescription($value): string
    {
        // do not write symbols like &,.,/ etc in return values
        if ($value === self::InformationTechnology) {
            return 'It and Software';
        }

        if ($value === self::NewsMedia) {
            return 'News and Media';
        }

        if ($value === self::FoodService) {
            return 'Food Service';
        }

        if ($value === self::DesignAndMultimedia) {
            return 'Design and Multimedia';
        }

        if ($value === self::BankingAndFinance) {
            return 'Banking and Finance';
        }

        if ($value === self::NonProfitOrganization) {
            return 'NGO and NPO';
        }

        return parent::getDescription($value);
    }
}
