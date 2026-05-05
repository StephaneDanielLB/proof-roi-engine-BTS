// src/config/modelConfig.js
window.BTS_LOGO_SRC = "./bts-logo-inverted.png";
window.PROOF_MARK_SRC = "./proof-roi-engine.png";
var mediaTypes = {
  "Daytime": {
    "label": "Daytime"
  },
  "Primetime": {
    "label": "Primetime"
  },
  "Mixed": {
    "label": "Mixed"
  }
};
var VERTICALS = {
  "fmcg": {
    "label": "FMCG",
    "excelSheet": "FMCG",
    "workbookFactorsKey": "FMCG"
  },
  "retailGeneral": {
    "label": "Retail General",
    "excelSheet": " Retail - General",
    "workbookFactorsKey": "Retail General"
  },
  "retailAppliances": {
    "label": "Retail Appliances",
    "excelSheet": " Retail - Appliances",
    "workbookFactorsKey": "Retail Appliances"
  },
  "telecom": {
    "label": "Telecom",
    "excelSheet": "Telecom Internet",
    "workbookFactorsKey": "Telecom"
  },
  "bankInsurance": {
    "label": "Bank/Insurance",
    "excelSheet": "Bank Insurance",
    "workbookFactorsKey": "Bank/Insurance"
  },
  "automotive": {
    "label": "Automotive",
    "excelSheet": "Automobile",
    "workbookFactorsKey": "Automotive"
  },
  "tourism": {
    "label": "Tourism",
    "excelSheet": "Tourism",
    "workbookFactorsKey": "Tourism"
  }
};
var VERTICAL_DISPLAY_ORDER = [
  "automotive",
  "bank_insurance",
  "fmcg",
  "retail_appliances",
  "retail_general",
  "telecom",
  "tourism"
];
var verticalDisplayKeyMap = {
  automotive: "automotive",
  bank_insurance: "bankInsurance",
  fmcg: "fmcg",
  retail_appliances: "retailAppliances",
  retail_general: "retailGeneral",
  telecom: "telecom",
  tourism: "tourism"
};
var verticalOrder = VERTICAL_DISPLAY_ORDER.map((key) => verticalDisplayKeyMap[key]);
var scenarioOrder = [
  "Upside",
  "Base",
  "Stress"
];
function normalizeVerticalKey(vertical) {
  const normalized = String(vertical ?? "").trim().toLowerCase();
  if (["fmcg"].includes(normalized)) return "fmcg";
  if (["retailgeneral", "retail general", "retail-general"].includes(normalized)) return "retailGeneral";
  if (["retail_general"].includes(normalized)) return "retailGeneral";
  if (["retailappliances", "retail appliances", "retail-appliances"].includes(normalized)) return "retailAppliances";
  if (["retail_appliances"].includes(normalized)) return "retailAppliances";
  if (["telecom", "telecom internet", "telecominternet"].includes(normalized)) return "telecom";
  if (["bankinsurance", "bank/insurance", "bank insurance"].includes(normalized)) return "bankInsurance";
  if (["bank_insurance"].includes(normalized)) return "bankInsurance";
  if (["automotive", "automobile", "auto"].includes(normalized)) return "automotive";
  if (["tourism", "travel", "tourism / travel", "travel / tourism", "tourism/travel", "travel/tourism"].includes(normalized)) return "tourism";
  return null;
}
var verticalConfig = {
  "fmcg": {
    "category": "goods",
    "proofLogic": "fmcg",
    "subtitle": "Proof converts household demand into incremental buying occasions.",
    "valueMode": "basketMargin",
    "directPathLabel": "Immediate impact",
    "assistedPathLabel": "Delayed household effect",
    "inputGroups": {
      "Media": [
        {
          "key": "reach",
          "label": "Reach",
          "type": "number",
          "step": 1e3
        },
        {
          "key": "baseAttentionRate",
          "label": "Attention rate",
          "type": "percent",
          "step": 0.1,
          "helper": "Base attention before media type adjustment."
        },
        {
          "key": "qrScanRate",
          "label": "QR scan rate",
          "type": "percent",
          "step": 0.01
        },
        {
          "key": "qualifiedVisitRate",
          "label": "Qualified visit rate",
          "type": "percent",
          "step": 0.1
        }
      ],
      "Funnel": [
        {
          "key": "addToCartRate",
          "label": "Add-to-cart rate",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "purchaseRate",
          "label": "Purchase rate",
          "type": "percent",
          "step": 0.1
        }
      ],
      "Proof": [
        {
          "key": "householdPenetration",
          "label": "Household penetration",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "purchaseFrequency",
          "label": "Purchase frequency",
          "type": "number",
          "step": 0.1
        },
        {
          "key": "observationWindow",
          "label": "Observation window",
          "type": "number",
          "step": 0.1
        },
        {
          "key": "influencedBuyerShare",
          "label": "Influenced buyer share",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "assistedUplift",
          "label": "Assisted uplift",
          "type": "percent",
          "step": 0.1
        }
      ],
      "Economics": [
        {
          "key": "basket",
          "label": "Basket",
          "type": "currency",
          "step": 1
        },
        {
          "key": "margin",
          "label": "Margin",
          "type": "percent",
          "step": 0.1
        }
      ],
      "Advanced": [
        {
          "key": "baseTvBudgetExBts",
          "label": "Base TV budget excl. BTS",
          "type": "currency",
          "step": 1e3,
          "helper": "Workbook baseline TV budget before the BTS proof layer is added.",
          "advanced": true
        },
        {
          "key": "grossLinearBtsAddOn",
          "label": "Gross Linear BTS add-on",
          "type": "currency",
          "step": 1e3,
          "helper": "5'' BTS add-on gross cost on Linear inventory.",
          "advanced": true
        },
        {
          "key": "grossBvodBtsAddOn",
          "label": "Gross BVoD BTS add-on",
          "type": "currency",
          "step": 1e3,
          "helper": "5'' BTS add-on gross cost on BVoD inventory.",
          "advanced": true
        },
        {
          "key": "productionTraffickingCost",
          "label": "Linear production / traffic",
          "type": "currency",
          "step": 1e3,
          "helper": "Workbook linear production and trafficking cost.",
          "advanced": true
        },
        {
          "key": "techMeasurementCost",
          "label": "BVoD tech measurement",
          "type": "currency",
          "step": 1e3,
          "helper": "Workbook BVoD tech / measurement cost.",
          "advanced": true
        },
        {
          "key": "btsClientProofFee",
          "label": "BTS client proof PoC fee",
          "type": "currency",
          "step": 100,
          "helper": "Workbook BTS client proof PoC fee.",
          "advanced": true
        },
        {
          "key": "btsProofActivationCost",
          "label": "BTS proof activation",
          "type": "currency",
          "step": 100,
          "helper": "Workbook BTS proof activation fee.",
          "advanced": true
        }
      ]
    }
  },
  "retailGeneral": {
    "category": "goods",
    "proofLogic": "retailGeneral",
    "subtitle": "Proof converts general retail demand into incremental transactions.",
    "valueMode": "basketMargin",
    "directPathLabel": "Immediate retail path",
    "assistedPathLabel": "Retail proof path",
    "inputGroups": {
      "Media": [
        {
          "key": "reach",
          "label": "Reach",
          "type": "number",
          "step": 1e3
        },
        {
          "key": "baseAttentionRate",
          "label": "Attention rate",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "qrScanRate",
          "label": "QR scan rate",
          "type": "percent",
          "step": 0.01
        },
        {
          "key": "qualifiedVisitRate",
          "label": "Qualified visit rate",
          "type": "percent",
          "step": 0.1
        }
      ],
      "Funnel": [
        {
          "key": "addToCartRate",
          "label": "Add-to-cart / purchase intent rate",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "purchaseRate",
          "label": "Purchase rate from visits",
          "type": "percent",
          "step": 0.1
        }
      ],
      "Proof": [
        {
          "key": "baseCategoryBuyerShare",
          "label": "Base category buyer share",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "influencedBuyerShare",
          "label": "Influenced buyer share",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "assistedUplift",
          "label": "Assisted uplift",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "assistedUpliftValidationScenario",
          "label": "Assisted uplift validation",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "repeatFactor",
          "label": "Purchase frequency",
          "type": "number",
          "step": 0.05
        }
      ],
      "Economics": [
        {
          "key": "basket",
          "label": "Basket",
          "type": "currency",
          "step": 1
        },
        {
          "key": "margin",
          "label": "Margin",
          "type": "percent",
          "step": 0.1
        }
      ],
      "Advanced": [
        {
          "key": "baseTvBudgetExBts",
          "label": "Base TV budget excl. BTS",
          "type": "currency",
          "step": 1e3,
          "helper": "Workbook baseline TV budget before the BTS proof layer is added.",
          "advanced": true
        },
        {
          "key": "grossLinearBtsAddOn",
          "label": "Gross Linear BTS add-on",
          "type": "currency",
          "step": 1e3,
          "helper": "5'' BTS add-on gross cost on Linear inventory.",
          "advanced": true
        },
        {
          "key": "grossBvodBtsAddOn",
          "label": "Gross BVoD BTS add-on",
          "type": "currency",
          "step": 1e3,
          "helper": "5'' BTS add-on gross cost on BVoD inventory.",
          "advanced": true
        },
        {
          "key": "productionTraffickingCost",
          "label": "Linear production / traffic",
          "type": "currency",
          "step": 1e3,
          "helper": "Workbook linear production and trafficking cost.",
          "advanced": true
        },
        {
          "key": "techMeasurementCost",
          "label": "BVoD tech measurement",
          "type": "currency",
          "step": 1e3,
          "helper": "Workbook BVoD tech / measurement cost.",
          "advanced": true
        },
        {
          "key": "btsClientProofFee",
          "label": "BTS client proof PoC fee",
          "type": "currency",
          "step": 100,
          "helper": "Workbook BTS client proof PoC fee.",
          "advanced": true
        },
        {
          "key": "btsProofActivationCost",
          "label": "BTS proof activation",
          "type": "currency",
          "step": 100,
          "helper": "Workbook BTS proof activation fee.",
          "advanced": true
        }
      ]
    }
  },
  "retailAppliances": {
    "category": "goods",
    "proofLogic": "retailAppliances",
    "subtitle": "Proof improves confidence and conversion on higher-consideration retail purchases.",
    "valueMode": "basketMargin",
    "directPathLabel": "Immediate appliances path",
    "assistedPathLabel": "Appliance proof path",
    "inputGroups": {
      "Media": [
        {
          "key": "reach",
          "label": "Reach",
          "type": "number",
          "step": 1e3
        },
        {
          "key": "baseAttentionRate",
          "label": "Attention rate",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "qrScanRate",
          "label": "QR scan rate",
          "type": "percent",
          "step": 0.01
        },
        {
          "key": "qualifiedVisitRate",
          "label": "Qualified visit rate",
          "type": "percent",
          "step": 0.1
        }
      ],
      "Funnel": [
        {
          "key": "addToCartRate",
          "label": "Add-to-cart / purchase intent rate",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "purchaseRate",
          "label": "Purchase rate from visits",
          "type": "percent",
          "step": 0.1
        }
      ],
      "Proof": [
        {
          "key": "baseCategoryBuyerShare",
          "label": "Base category buyer share",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "influencedBuyerShare",
          "label": "Influenced buyer share",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "assistedUplift",
          "label": "Assisted uplift",
          "type": "percent",
          "step": 0.1
        }
      ],
      "Economics": [
        {
          "key": "basket",
          "label": "Basket",
          "type": "currency",
          "step": 1
        },
        {
          "key": "margin",
          "label": "Margin",
          "type": "percent",
          "step": 0.1
        }
      ],
      "Advanced": [
        {
          "key": "baseTvBudgetExBts",
          "label": "Base TV budget excl. BTS",
          "type": "currency",
          "step": 1e3,
          "helper": "Workbook baseline TV budget before the BTS proof layer is added.",
          "advanced": true
        },
        {
          "key": "grossLinearBtsAddOn",
          "label": "Gross Linear BTS add-on",
          "type": "currency",
          "step": 1e3,
          "helper": "5'' BTS add-on gross cost on Linear inventory.",
          "advanced": true
        },
        {
          "key": "grossBvodBtsAddOn",
          "label": "Gross BVoD BTS add-on",
          "type": "currency",
          "step": 1e3,
          "helper": "5'' BTS add-on gross cost on BVoD inventory.",
          "advanced": true
        },
        {
          "key": "productionTraffickingCost",
          "label": "Linear production / traffic",
          "type": "currency",
          "step": 1e3,
          "helper": "Workbook linear production and trafficking cost.",
          "advanced": true
        },
        {
          "key": "techMeasurementCost",
          "label": "BVoD tech measurement",
          "type": "currency",
          "step": 1e3,
          "helper": "Workbook BVoD tech / measurement cost.",
          "advanced": true
        },
        {
          "key": "btsClientProofFee",
          "label": "BTS client proof PoC fee",
          "type": "currency",
          "step": 100,
          "helper": "Workbook BTS client proof PoC fee.",
          "advanced": true
        },
        {
          "key": "btsProofActivationCost",
          "label": "BTS proof activation",
          "type": "currency",
          "step": 100,
          "helper": "Workbook BTS proof activation fee.",
          "advanced": true
        }
      ]
    }
  },
  "telecom": {
    "category": "services",
    "proofLogic": "telecom",
    "subtitle": "Proof lifts the conversion of marketable telecom prospects.",
    "valueMode": "arpuLifetimeMargin",
    "directPathLabel": "Acquisition funnel",
    "assistedPathLabel": "Marketable proof path",
    "inputGroups": {
      "Media": [
        {
          "key": "reach",
          "label": "Reach",
          "type": "number",
          "step": 1e3
        },
        {
          "key": "baseAttentionRate",
          "label": "Attention rate",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "scanRate",
          "label": "Scan rate",
          "type": "percent",
          "step": 0.01
        },
        {
          "key": "qualifiedVisitRate",
          "label": "Qualified visit rate",
          "type": "percent",
          "step": 0.1
        }
      ],
      "Funnel": [
        {
          "key": "planSelectionRate",
          "label": "Plan selection rate",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "subscriptionRate",
          "label": "Subscription rate",
          "type": "percent",
          "step": 0.1
        }
      ],
      "Proof": [
        {
          "key": "marketableBase",
          "label": "Marketable base",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "observationWindow",
          "label": "Observation window",
          "type": "number",
          "step": 0.1
        },
        {
          "key": "assistedUplift",
          "label": "Assisted uplift",
          "type": "percent",
          "step": 0.1
        }
      ],
      "Economics": [
        {
          "key": "arpu",
          "label": "ARPU",
          "type": "currency",
          "step": 1
        },
        {
          "key": "lifetime",
          "label": "Lifetime",
          "type": "number",
          "step": 1
        },
        {
          "key": "margin",
          "label": "Margin",
          "type": "percent",
          "step": 0.1
        }
      ],
      "Advanced": [
        {
          "key": "baseTvBudgetExBts",
          "label": "Base TV budget excl. BTS",
          "type": "currency",
          "step": 1e3,
          "helper": "Workbook baseline TV budget before the BTS proof layer is added.",
          "advanced": true
        },
        {
          "key": "grossLinearBtsAddOn",
          "label": "Gross Linear BTS add-on",
          "type": "currency",
          "step": 1e3,
          "helper": "5'' BTS add-on gross cost on Linear inventory.",
          "advanced": true
        },
        {
          "key": "grossBvodBtsAddOn",
          "label": "Gross BVoD BTS add-on",
          "type": "currency",
          "step": 1e3,
          "helper": "5'' BTS add-on gross cost on BVoD inventory.",
          "advanced": true
        },
        {
          "key": "productionTraffickingCost",
          "label": "Linear production / traffic",
          "type": "currency",
          "step": 1e3,
          "helper": "Workbook linear production and trafficking cost.",
          "advanced": true
        },
        {
          "key": "techMeasurementCost",
          "label": "BVoD tech measurement",
          "type": "currency",
          "step": 1e3,
          "helper": "Workbook BVoD tech / measurement cost.",
          "advanced": true
        },
        {
          "key": "btsClientProofFee",
          "label": "BTS client proof PoC fee",
          "type": "currency",
          "step": 100,
          "helper": "Workbook BTS client proof PoC fee.",
          "advanced": true
        },
        {
          "key": "btsProofActivationCost",
          "label": "BTS proof activation",
          "type": "currency",
          "step": 100,
          "helper": "Workbook BTS proof activation fee.",
          "advanced": true
        }
      ]
    }
  },
  "bankInsurance": {
    "category": "services",
    "proofLogic": "bank",
    "subtitle": "Proof improves close rates on qualified financial prospects.",
    "valueMode": "bankEconomics",
    "directPathLabel": "Lead conversion funnel",
    "assistedPathLabel": "Qualified proof path",
    "inputGroups": {
      "Media": [
        {
          "key": "reach",
          "label": "Reach",
          "type": "number",
          "step": 1e3
        },
        {
          "key": "baseAttentionRate",
          "label": "Attention rate",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "scanRate",
          "label": "Scan rate",
          "type": "percent",
          "step": 0.01
        },
        {
          "key": "qualifiedVisitRate",
          "label": "Qualified visit rate",
          "type": "percent",
          "step": 0.1
        }
      ],
      "Funnel": [
        {
          "key": "quoteRate",
          "label": "Quote / simulation rate",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "applicationRate",
          "label": "Application / lead completion rate",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "policyActivationRate",
          "label": "Policy activation / account opening rate",
          "type": "percent",
          "step": 0.1
        }
      ],
      "Proof": [
        {
          "key": "eligibleProspectShare",
          "label": "Eligible household / prospect share",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "observationWindow",
          "label": "Observation window",
          "type": "number",
          "step": 0.1
        },
        {
          "key": "assistedConversionUplift",
          "label": "Assisted uplift",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "considerationUplift",
          "label": "Consideration uplift",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "leadQualityUplift",
          "label": "Lead quality uplift",
          "type": "percent",
          "step": 0.1
        }
      ],
      "Economics": [
        {
          "key": "profitPerSale",
          "label": "Gross profit per policy / account",
          "type": "currency",
          "step": 1
        },
        {
          "key": "customerLifetimeValue",
          "label": "Customer lifetime value",
          "type": "currency",
          "step": 1
        },
        {
          "key": "policyRenewalRate",
          "label": "Policy renewal rate",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "costPerQualifiedLead",
          "label": "Cost per qualified lead",
          "type": "currency",
          "step": 1
        }
      ],
      "Advanced": [
        {
          "key": "baseTvBudgetExBts",
          "label": "Base TV budget excl. BTS",
          "type": "currency",
          "step": 1e3,
          "helper": "Workbook baseline TV budget before the BTS proof layer is added.",
          "advanced": true
        },
        {
          "key": "grossLinearBtsAddOn",
          "label": "Gross Linear BTS add-on",
          "type": "currency",
          "step": 1e3,
          "helper": "5'' BTS add-on gross cost on Linear inventory.",
          "advanced": true
        },
        {
          "key": "grossBvodBtsAddOn",
          "label": "Gross BVoD BTS add-on",
          "type": "currency",
          "step": 1e3,
          "helper": "5'' BTS add-on gross cost on BVoD inventory.",
          "advanced": true
        },
        {
          "key": "productionTraffickingCost",
          "label": "Linear production / traffic",
          "type": "currency",
          "step": 1e3,
          "helper": "Workbook linear production and trafficking cost.",
          "advanced": true
        },
        {
          "key": "techMeasurementCost",
          "label": "BVoD tech measurement",
          "type": "currency",
          "step": 1e3,
          "helper": "Workbook BVoD tech / measurement cost.",
          "advanced": true
        },
        {
          "key": "btsClientProofFee",
          "label": "BTS client proof PoC fee",
          "type": "currency",
          "step": 100,
          "helper": "Workbook BTS client proof PoC fee.",
          "advanced": true
        },
        {
          "key": "btsProofActivationCost",
          "label": "BTS proof activation",
          "type": "currency",
          "step": 100,
          "helper": "Workbook BTS proof activation fee.",
          "advanced": true
        }
      ]
    }
  },
  "automotive": {
    "category": "services",
    "proofLogic": "automotive",
    "subtitle": "Proof accelerates serious in-market shoppers through the dealer funnel.",
    "valueMode": "profitOnly",
    "directPathLabel": "Lead-to-sale funnel",
    "assistedPathLabel": "In-market proof path",
    "inputGroups": {
      "Media": [
        {
          "key": "reach",
          "label": "Reach",
          "type": "number",
          "step": 1e3
        },
        {
          "key": "baseAttentionRate",
          "label": "Effective attention / exposure rate",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "scanRate",
          "label": "QR Code scan rate",
          "type": "percent",
          "step": 0.01
        },
        {
          "key": "qualifiedVisitRate",
          "label": "Qualified visit rate from scans",
          "type": "percent",
          "step": 0.1
        }
      ],
      "Funnel": [
        {
          "key": "leadRate",
          "label": "Lead form completion rate from visits",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "bookingRate",
          "label": "Dealer / test-drive booking rate from leads",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "closeRate",
          "label": "Sale close rate from test-drive",
          "type": "percent",
          "step": 0.1
        }
      ],
      "Proof": [
        {
          "key": "inMarketShoppers",
          "label": "In-market shopper share",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "observationWindow",
          "label": "Observation window share",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "assistedUplift",
          "label": "Assisted booking uplift on exposed in-market shopper",
          "type": "percent",
          "step": 0.1
        }
      ],
      "Economics": [
        {
          "key": "profitPerSale",
          "label": "Gross profit per sale",
          "type": "currency",
          "step": 100
        }
      ],
      "Advanced": [
        {
          "key": "baseTvBudgetExBts",
          "label": "Base TV budget excl. BTS",
          "type": "currency",
          "step": 1e3,
          "helper": "Workbook baseline TV budget before the BTS proof layer is added.",
          "advanced": true
        },
        {
          "key": "grossLinearBtsAddOn",
          "label": "Gross Linear BTS add-on",
          "type": "currency",
          "step": 1e3,
          "helper": "5'' BTS add-on gross cost on Linear inventory.",
          "advanced": true
        },
        {
          "key": "grossBvodBtsAddOn",
          "label": "Gross BVoD BTS add-on",
          "type": "currency",
          "step": 1e3,
          "helper": "5'' BTS add-on gross cost on BVoD inventory.",
          "advanced": true
        },
        {
          "key": "productionTraffickingCost",
          "label": "Linear production / traffic",
          "type": "currency",
          "step": 1e3,
          "helper": "Workbook linear production and trafficking cost.",
          "advanced": true
        },
        {
          "key": "techMeasurementCost",
          "label": "BVoD tech measurement",
          "type": "currency",
          "step": 1e3,
          "helper": "Workbook BVoD tech / measurement cost.",
          "advanced": true
        },
        {
          "key": "btsClientProofFee",
          "label": "BTS client proof PoC fee",
          "type": "currency",
          "step": 100,
          "helper": "Workbook BTS client proof PoC fee.",
          "advanced": true
        },
        {
          "key": "btsProofActivationCost",
          "label": "BTS proof activation",
          "type": "currency",
          "step": 100,
          "helper": "Workbook BTS proof activation fee.",
          "advanced": true
        }
      ]
    }
  },
  "tourism": {
    "category": "services",
    "proofLogic": "tourism",
    "subtitle": "Proof increases travel booking intent and captures assisted demand inside the booking window.",
    "valueMode": "tourismEconomics",
    "directPathLabel": "Booking response path",
    "assistedPathLabel": "Consideration proof path",
    "inputGroups": {
      "Media": [
        {
          "key": "reach",
          "label": "Reach",
          "type": "number",
          "step": 1e3
        },
        {
          "key": "baseAttentionRate",
          "label": "Effective attention / exposure rate",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "attributionConfidence",
          "label": "Attribution confidence level (%)",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "qrScanRate",
          "label": "QR Code scan rate",
          "type": "percent",
          "step": 0.01
        },
        {
          "key": "qualifiedVisitRate",
          "label": "Qualified visit rate from scans",
          "type": "percent",
          "step": 0.1
        }
      ],
      "Funnel": [
        {
          "key": "addToCartRate",
          "label": "Add-to-cart / purchase intent rate",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "purchaseRate",
          "label": "Purchase rate from visits",
          "type": "percent",
          "step": 0.1
        }
      ],
      "Proof": [
        {
          "key": "bookingConsiderationWindowDays",
          "label": "Booking consideration window (days)",
          "type": "number",
          "step": 1
        },
        {
          "key": "baseCategoryBuyerShare",
          "label": "Base category buyer share in window",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "influencedBuyerShare",
          "label": "Influenced buyer share",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "retailUplift",
          "label": "Retail uplift on influenced buyers",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "returnVisitsMultiplier",
          "label": "Return visits multiplier",
          "type": "number",
          "step": 1
        },
        {
          "key": "cancellationRate",
          "label": "Cancellation rate (%)",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "loadFactorUpliftSensitivity",
          "label": "Load factor uplift sensitivity",
          "type": "percent",
          "step": 0.1
        }
      ],
      "Economics": [
        {
          "key": "averageBookingValue",
          "label": "Average booking value (\u20AC)",
          "type": "currency",
          "step": 100
        },
        {
          "key": "yieldPriceUplift",
          "label": "Yield / Price uplift from demand (%)",
          "type": "percent",
          "step": 0.1
        },
        {
          "key": "maxBookableDemandInWindow",
          "label": "Max bookable demand in window",
          "type": "number",
          "step": 1e3
        },
        {
          "key": "grossMargin",
          "label": "Gross margin",
          "type": "percent",
          "step": 0.1
        }
      ],
      "Advanced": [
        {
          "key": "baseTvBudgetExBts",
          "label": "Base TV budget excl. BTS",
          "type": "currency",
          "step": 1e3,
          "helper": "Workbook baseline TV budget before the BTS proof layer is added.",
          "advanced": true
        },
        {
          "key": "grossLinearBtsAddOn",
          "label": "Gross Linear BTS add-on",
          "type": "currency",
          "step": 1e3,
          "helper": "5'' BTS add-on gross cost on Linear inventory.",
          "advanced": true
        },
        {
          "key": "grossBvodBtsAddOn",
          "label": "Gross BVoD BTS add-on",
          "type": "currency",
          "step": 1e3,
          "helper": "5'' BTS add-on gross cost on BVoD inventory.",
          "advanced": true
        },
        {
          "key": "productionTraffickingCost",
          "label": "Linear production / traffic",
          "type": "currency",
          "step": 1e3,
          "helper": "Workbook linear production and trafficking cost.",
          "advanced": true
        },
        {
          "key": "techMeasurementCost",
          "label": "BVoD tech measurement",
          "type": "currency",
          "step": 1e3,
          "helper": "Workbook BVoD tech / measurement cost.",
          "advanced": true
        },
        {
          "key": "btsClientProofFee",
          "label": "BTS client proof PoC fee",
          "type": "currency",
          "step": 100,
          "helper": "Workbook BTS client proof PoC fee.",
          "advanced": true
        },
        {
          "key": "btsProofActivationCost",
          "label": "BTS proof activation",
          "type": "currency",
          "step": 100,
          "helper": "Workbook BTS proof activation fee.",
          "advanced": true
        }
      ]
    }
  }
};

// src/generated/workbookFactors.js
var workbookFactors = {
  "Automotive": {
    "Upside": {
      "core": 0.35,
      "bts": 0.5
    },
    "Base": {
      "core": 0.5,
      "bts": 0.65
    },
    "Stress": {
      "core": 0.65,
      "bts": 0.8
    }
  },
  "Telecom": {
    "Upside": {
      "core": 0.35,
      "bts": 0.5
    },
    "Base": {
      "core": 0.5,
      "bts": 0.65
    },
    "Stress": {
      "core": 0.65,
      "bts": 0.8
    }
  },
  "Bank/Insurance": {
    "Upside": {
      "core": 0.4,
      "bts": 0.55
    },
    "Base": {
      "core": 0.55,
      "bts": 0.7
    },
    "Stress": {
      "core": 0.7,
      "bts": 0.85
    }
  },
  "FMCG": {
    "Upside": {
      "core": 0.3,
      "bts": 0.45
    },
    "Base": {
      "core": 0.45,
      "bts": 0.55
    },
    "Stress": {
      "core": 0.6,
      "bts": 0.7
    }
  },
  "Retail Appliances": {
    "Upside": {
      "core": 0.4,
      "bts": 0.45
    },
    "Base": {
      "core": 0.55,
      "bts": 0.6
    },
    "Stress": {
      "core": 0.7,
      "bts": 0.75
    }
  },
  "Retail General": {
    "Upside": {
      "core": 0.25,
      "bts": 0.45
    },
    "Base": {
      "core": 0.4,
      "bts": 0.6
    },
    "Stress": {
      "core": 0.55,
      "bts": 0.75
    }
  },
  "Tourism": {
    "Upside": {
      "core": 0.45,
      "bts": 0.6
    },
    "Base": {
      "core": 0.6,
      "bts": 0.75
    },
    "Stress": {
      "core": 0.75,
      "bts": 0.9
    }
  }
};

// src/data/workbookModelData.js
var workbookModelData = {
  "verticals": {
    "fmcg": {
      "upside": {
        "reach": 4e6,
        "baseAttentionRate": 0.6,
        "qrScanRate": 15e-4,
        "qualifiedVisitRate": 0.8,
        "addToCartRate": 0.14,
        "purchaseRate": 0.4,
        "householdPenetration": 0.18,
        "purchaseFrequency": 1.4,
        "observationWindow": 0.5,
        "influencedBuyerShare": 0.35,
        "assistedUplift": 0.1,
        "basket": 30,
        "margin": 0.28,
        "grossMediaCost": 42e4,
        "discountRate": 0.3,
        "btsIncrementalCost": 29e3
      },
      "base": {
        "reach": 3e6,
        "baseAttentionRate": 0.4,
        "qrScanRate": 1e-3,
        "qualifiedVisitRate": 0.75,
        "addToCartRate": 0.1,
        "purchaseRate": 0.3,
        "householdPenetration": 0.15,
        "purchaseFrequency": 1.3,
        "observationWindow": 0.5,
        "influencedBuyerShare": 0.2,
        "assistedUplift": 0.08,
        "basket": 25,
        "margin": 0.32,
        "grossMediaCost": 36e4,
        "discountRate": 0.28,
        "btsIncrementalCost": 42e3
      },
      "stress": {
        "reach": 2e6,
        "baseAttentionRate": 0.2,
        "qrScanRate": 8e-4,
        "qualifiedVisitRate": 0.7,
        "addToCartRate": 0.07,
        "purchaseRate": 0.2,
        "householdPenetration": 0.12,
        "purchaseFrequency": 1.2,
        "observationWindow": 0.4,
        "influencedBuyerShare": 0.1,
        "assistedUplift": 0.06,
        "basket": 15,
        "margin": 0.28,
        "grossMediaCost": 28e4,
        "discountRate": 0.24,
        "btsIncrementalCost": 51e3
      }
    },
    "retailGeneral": {
      "upside": {
        "reach": 4e6,
        "baseAttentionRate": 0.65,
        "qrScanRate": 18e-4,
        "qualifiedVisitRate": 0.8,
        "addToCartRate": 0.12,
        "purchaseRate": 0.35,
        "baseCategoryBuyerShare": 0.1,
        "influencedBuyerShare": 0.3,
        "assistedUplift": 0.056,
        "assistedUpliftValidationScenario": 0.056,
        "repeatFactor": 1.2,
        "basket": 349,
        "margin": 0.25,
        "grossMediaCost": 39e4,
        "discountRate": 0.32,
        "btsIncrementalCost": 32e3
      },
      "base": {
        "reach": 3e6,
        "baseAttentionRate": 0.45,
        "qrScanRate": 1e-3,
        "qualifiedVisitRate": 0.75,
        "addToCartRate": 0.09,
        "purchaseRate": 0.28,
        "baseCategoryBuyerShare": 0.08,
        "influencedBuyerShare": 0.2,
        "assistedUplift": 0.041,
        "assistedUpliftValidationScenario": 0.04,
        "repeatFactor": 1.1,
        "basket": 140,
        "margin": 0.2,
        "grossMediaCost": 33e4,
        "discountRate": 0.28,
        "btsIncrementalCost": 41e3
      },
      "stress": {
        "reach": 2e6,
        "baseAttentionRate": 0.3,
        "qrScanRate": 5e-4,
        "qualifiedVisitRate": 0.7,
        "addToCartRate": 0.06,
        "purchaseRate": 0.22,
        "baseCategoryBuyerShare": 0.06,
        "influencedBuyerShare": 0.1,
        "assistedUplift": 0.025,
        "assistedUpliftValidationScenario": 0.025,
        "repeatFactor": 1.05,
        "basket": 95,
        "margin": 0.17,
        "grossMediaCost": 25e4,
        "discountRate": 0.22,
        "btsIncrementalCost": 5e4
      }
    },
    "retailAppliances": {
      "upside": {
        "reach": 4e6,
        "baseAttentionRate": 0.6,
        "qrScanRate": 18e-4,
        "qualifiedVisitRate": 0.8,
        "addToCartRate": 0.12,
        "purchaseRate": 0.35,
        "baseCategoryBuyerShare": 0.1,
        "influencedBuyerShare": 0.3,
        "assistedUplift": 0.02,
        "basket": 330,
        "margin": 0.25
      },
      "base": {
        "reach": 3e6,
        "baseAttentionRate": 0.4,
        "qrScanRate": 15e-4,
        "qualifiedVisitRate": 0.75,
        "addToCartRate": 0.09,
        "purchaseRate": 0.3,
        "baseCategoryBuyerShare": 0.08,
        "influencedBuyerShare": 0.2,
        "assistedUplift": 0.015,
        "basket": 220,
        "margin": 0.2
      },
      "stress": {
        "reach": 2e6,
        "baseAttentionRate": 0.3,
        "qrScanRate": 1e-3,
        "qualifiedVisitRate": 0.7,
        "addToCartRate": 0.06,
        "purchaseRate": 0.22,
        "baseCategoryBuyerShare": 0.06,
        "influencedBuyerShare": 0.1,
        "assistedUplift": 6e-3,
        "basket": 120,
        "margin": 0.17
      }
    },
    "telecom": {
      "upside": {
        "reach": 5e6,
        "baseAttentionRate": 0.65,
        "scanRate": 1e-3,
        "qualifiedVisitRate": 0.75,
        "planSelectionRate": 0.2,
        "subscriptionRate": 0.3,
        "marketableBase": 0.025,
        "observationWindow": 0.5,
        "assistedUplift": 0.018,
        "arpu": 28,
        "lifetime": 30,
        "margin": 0.55,
        "grossMediaCost": 47e4,
        "discountRate": 0.24,
        "btsIncrementalCost": 34e3
      },
      "base": {
        "reach": 4e6,
        "baseAttentionRate": 0.4,
        "scanRate": 6e-4,
        "qualifiedVisitRate": 0.7,
        "planSelectionRate": 0.15,
        "subscriptionRate": 0.25,
        "marketableBase": 0.02,
        "observationWindow": 0.5,
        "assistedUplift": 0.012,
        "arpu": 24,
        "lifetime": 24,
        "margin": 0.5,
        "grossMediaCost": 39e4,
        "discountRate": 0.2,
        "btsIncrementalCost": 43e3
      },
      "stress": {
        "reach": 3e6,
        "baseAttentionRate": 0.3,
        "scanRate": 3e-4,
        "qualifiedVisitRate": 0.65,
        "planSelectionRate": 0.1,
        "subscriptionRate": 0.1,
        "marketableBase": 0.015,
        "observationWindow": 0.4,
        "assistedUplift": 7e-3,
        "arpu": 22,
        "lifetime": 18,
        "margin": 0.45,
        "grossMediaCost": 31e4,
        "discountRate": 0.16,
        "btsIncrementalCost": 52e3
      }
    },
    "bankInsurance": {
      "upside": {
        "reach": 5e6,
        "baseAttentionRate": 0.7,
        "scanRate": 5e-4,
        "qualifiedVisitRate": 0.75,
        "quoteRate": 0.18,
        "applicationRate": 0.35,
        "policyActivationRate": 0.35,
        "eligibleProspectShare": 0.03,
        "observationWindow": 0.5,
        "assistedConversionUplift": 8e-3,
        "profitPerSale": 600,
        "customerLifetimeValue": 1e3,
        "policyRenewalRate": 0.9,
        "costPerQualifiedLead": 25,
        "considerationUplift": 0.2,
        "leadQualityUplift": 0.25,
        "grossMediaCost": 45e4,
        "discountRate": 0.22,
        "btsIncrementalCost": 36e3
      },
      "base": {
        "reach": 4e6,
        "baseAttentionRate": 0.5,
        "scanRate": 3e-4,
        "qualifiedVisitRate": 0.7,
        "quoteRate": 0.15,
        "applicationRate": 0.3,
        "policyActivationRate": 0.3,
        "eligibleProspectShare": 0.025,
        "observationWindow": 0.5,
        "assistedConversionUplift": 5e-3,
        "profitPerSale": 400,
        "customerLifetimeValue": 1200,
        "policyRenewalRate": 0.85,
        "costPerQualifiedLead": 40,
        "considerationUplift": 0.1,
        "leadQualityUplift": 0.15,
        "grossMediaCost": 37e4,
        "discountRate": 0.18,
        "btsIncrementalCost": 45e3
      },
      "stress": {
        "reach": 3e6,
        "baseAttentionRate": 0.3,
        "scanRate": 15e-5,
        "qualifiedVisitRate": 0.65,
        "quoteRate": 0.12,
        "applicationRate": 0.25,
        "policyActivationRate": 0.25,
        "eligibleProspectShare": 0.02,
        "observationWindow": 0.4,
        "assistedConversionUplift": 3e-3,
        "profitPerSale": 250,
        "customerLifetimeValue": 800,
        "policyRenewalRate": 0.75,
        "costPerQualifiedLead": 70,
        "considerationUplift": 0.03,
        "leadQualityUplift": 0.05,
        "grossMediaCost": 29e4,
        "discountRate": 0.14,
        "btsIncrementalCost": 54e3
      }
    },
    "automotive": {
      "upside": {
        "reach": 5e6,
        "baseAttentionRate": 0.68,
        "scanRate": 7e-4,
        "qualifiedVisitRate": 0.8,
        "leadRate": 0.1,
        "bookingRate": 0.35,
        "closeRate": 0.22,
        "inMarketShoppers": 0.04,
        "observationWindow": 0.5,
        "assistedUplift": 0.02,
        "profitPerSale": 3500,
        "grossMediaCost": 52e4,
        "discountRate": 0.2,
        "btsIncrementalCost": 37e3
      },
      "base": {
        "reach": 4e6,
        "baseAttentionRate": 0.4,
        "scanRate": 4e-4,
        "qualifiedVisitRate": 0.75,
        "leadRate": 0.08,
        "bookingRate": 0.3,
        "closeRate": 0.18,
        "inMarketShoppers": 0.03,
        "observationWindow": 0.5,
        "assistedUplift": 0.012,
        "profitPerSale": 3e3,
        "grossMediaCost": 43e4,
        "discountRate": 0.17,
        "btsIncrementalCost": 47e3
      },
      "stress": {
        "reach": 3e6,
        "baseAttentionRate": 0.3,
        "scanRate": 1e-4,
        "qualifiedVisitRate": 0.7,
        "leadRate": 0.06,
        "bookingRate": 0.25,
        "closeRate": 0.15,
        "inMarketShoppers": 0.025,
        "observationWindow": 0.4,
        "assistedUplift": 8e-3,
        "profitPerSale": 2500,
        "grossMediaCost": 34e4,
        "discountRate": 0.14,
        "btsIncrementalCost": 58e3
      }
    },
    "tourism": {
      "upside": {
        "reach": 4e6,
        "baseAttentionRate": 0.6,
        "attributionConfidence": 0.6,
        "qrScanRate": 18e-4,
        "qualifiedVisitRate": 0.8,
        "purchaseRate": 0.35,
        "bookingConsiderationWindowDays": 30,
        "baseCategoryBuyerShare": 0.1,
        "influencedBuyerShare": 0.3,
        "retailUplift": 0.02,
        "returnVisitsMultiplier": 2,
        "cancellationRate": 0.05,
        "loadFactorUpliftSensitivity": 0.015,
        "addToCartRate": 0.12,
        "averageBookingValue": 3900,
        "yieldPriceUplift": 0.05,
        "maxBookableDemandInWindow": 3e5,
        "grossMargin": 0.25,
        "baseTvBudgetExBts": 19e4,
        "linearTvShare": 0.7,
        "bvodShare": 0.3,
        "grossLinearMediaOverride": 133e3,
        "grossBvodMediaOverride": 2e5,
        "grossLinearBtsAddOn": 25e3,
        "grossBvodBtsAddOn": 15e3,
        "productionTraffickingCost": 1e4,
        "techMeasurementCost": 1e4,
        "btsClientProofFee": 5900,
        "btsProofActivationCost": 4e3
      },
      "base": {
        "reach": 3e6,
        "baseAttentionRate": 0.4,
        "attributionConfidence": 0.75,
        "qrScanRate": 15e-4,
        "qualifiedVisitRate": 0.75,
        "purchaseRate": 0.3,
        "bookingConsiderationWindowDays": 45,
        "baseCategoryBuyerShare": 0.08,
        "influencedBuyerShare": 0.2,
        "retailUplift": 0.015,
        "returnVisitsMultiplier": 3,
        "cancellationRate": 0.1,
        "loadFactorUpliftSensitivity": 0.01,
        "addToCartRate": 0.09,
        "averageBookingValue": 2500,
        "yieldPriceUplift": 0.02,
        "maxBookableDemandInWindow": 2e5,
        "grossMargin": 0.2,
        "baseTvBudgetExBts": 19e4,
        "linearTvShare": 0.7,
        "bvodShare": 0.3,
        "grossLinearMediaOverride": 133e3,
        "grossBvodMediaOverride": 2e5,
        "grossLinearBtsAddOn": 25e3,
        "grossBvodBtsAddOn": 15e3,
        "productionTraffickingCost": 1e4,
        "techMeasurementCost": 1e4,
        "btsClientProofFee": 5900,
        "btsProofActivationCost": 4e3
      },
      "stress": {
        "reach": 2e6,
        "baseAttentionRate": 0.3,
        "attributionConfidence": 0.9,
        "qrScanRate": 1e-3,
        "qualifiedVisitRate": 0.7,
        "purchaseRate": 0.22,
        "bookingConsiderationWindowDays": 60,
        "baseCategoryBuyerShare": 0.06,
        "influencedBuyerShare": 0.1,
        "retailUplift": 6e-3,
        "returnVisitsMultiplier": 4,
        "cancellationRate": 0.2,
        "loadFactorUpliftSensitivity": 5e-3,
        "addToCartRate": 0.06,
        "averageBookingValue": 1500,
        "yieldPriceUplift": 0,
        "maxBookableDemandInWindow": 1e5,
        "grossMargin": 0.17,
        "baseTvBudgetExBts": 19e4,
        "linearTvShare": 0.7,
        "bvodShare": 0.3,
        "grossLinearMediaOverride": 133e3,
        "grossBvodMediaOverride": 2e5,
        "grossLinearBtsAddOn": 25e3,
        "grossBvodBtsAddOn": 15e3,
        "productionTraffickingCost": 1e4,
        "techMeasurementCost": 1e4,
        "btsClientProofFee": 5900,
        "btsProofActivationCost": 4e3
      }
    }
  },
  "mediaProfilesByType": {
    "Primetime": {
      "baseTvBudgetExBts": 5e5,
      "linearTvShare": 0.6,
      "bvodShare": 0.4,
      "grossLinearBtsAddOn": 25e3,
      "grossBvodBtsAddOn": 15e3,
      "productionTraffickingCost": 1e4,
      "techMeasurementCost": 1e4,
      "btsClientProofFee": 5900,
      "btsProofActivationCost": 4e3
    },
    "Daytime": {
      "baseTvBudgetExBts": 19e4,
      "linearTvShare": 0.7,
      "bvodShare": 0.3,
      "grossLinearBtsAddOn": 25e3,
      "grossBvodBtsAddOn": 15e3,
      "productionTraffickingCost": 1e4,
      "techMeasurementCost": 1e4,
      "btsClientProofFee": 5900,
      "btsProofActivationCost": 4e3
    },
    "Mixed": {
      "baseTvBudgetExBts": 345e3,
      "linearTvShare": 0.65,
      "bvodShare": 0.35,
      "grossLinearBtsAddOn": 25e3,
      "grossBvodBtsAddOn": 15e3,
      "productionTraffickingCost": 1e4,
      "techMeasurementCost": 1e4,
      "btsClientProofFee": 5900,
      "btsProofActivationCost": 4e3
    }
  },
  "defaultScenarioRoiAssumptions": {
    "upside": {
      "tv": 5.9,
      "bts": 0.2
    },
    "base": {
      "tv": 3.9,
      "bts": 0.15
    },
    "stress": {
      "tv": 2.9,
      "bts": 0.1
    }
  },
  "scenarioRoiAssumptionsByVertical": {
    "fmcg": {
      "upside": {
        "tv": 5.9,
        "bts": 0.2
      },
      "base": {
        "tv": 3.9,
        "bts": 0.15
      },
      "stress": {
        "tv": 2.9,
        "bts": 0.1
      }
    },
    "retailAppliances": {
      "upside": {
        "tv": 5.9,
        "bts": 0.2
      },
      "base": {
        "tv": 3.9,
        "bts": 0.15
      },
      "stress": {
        "tv": 2.9,
        "bts": 0.1
      }
    },
    "telecom": {
      "upside": {
        "tv": 5.9,
        "bts": 0.2
      },
      "base": {
        "tv": 3.9,
        "bts": 0.15
      },
      "stress": {
        "tv": 2.9,
        "bts": 0.1
      }
    },
    "bankInsurance": {
      "upside": {
        "tv": 5.9,
        "bts": 0.2
      },
      "base": {
        "tv": 3.9,
        "bts": 0.15
      },
      "stress": {
        "tv": 2.9,
        "bts": 0.1
      }
    }
  },
  "lockedMediaFactorsByVertical": {
    "fmcg": {
      "upside": {
        "core": 0.3,
        "bts": 0.45
      },
      "base": {
        "core": 0.45,
        "bts": 0.55
      },
      "stress": {
        "core": 0.6,
        "bts": 0.7
      }
    },
    "retailGeneral": {
      "upside": {
        "core": 0.25,
        "bts": 0.55
      },
      "base": {
        "core": 0.4,
        "bts": 0.45
      },
      "stress": {
        "core": 0.55,
        "bts": 0.75
      }
    },
    "retailAppliances": {
      "upside": {
        "core": 0.4,
        "bts": 0.45
      },
      "base": {
        "core": 0.55,
        "bts": 0.6
      },
      "stress": {
        "core": 0.7,
        "bts": 0.75
      }
    },
    "telecom": {
      "upside": {
        "core": 0.35,
        "bts": 0.5
      },
      "base": {
        "core": 0.5,
        "bts": 0.65
      },
      "stress": {
        "core": 0.65,
        "bts": 0.8
      }
    },
    "bankInsurance": {
      "upside": {
        "core": 0.4,
        "bts": 0.55
      },
      "base": {
        "core": 0.55,
        "bts": 0.7
      },
      "stress": {
        "core": 0.7,
        "bts": 0.85
      }
    }
  },
  "economicsProfilesByVertical": {
    "retailGeneral": {
      "baseTvBudgetExBts": 19e4,
      "grossLinearMedia": 133e3,
      "grossBvodMedia": 2e5,
      "linearTvShare": 0.3993993993993994,
      "bvodShare": 0.6006006006006006,
      "grossLinearBtsAddOn": 25e3,
      "grossBvodBtsAddOn": 15e3,
      "productionTraffickingCost": 1e4,
      "techMeasurementCost": 1e4,
      "btsClientProofFee": 5900,
      "btsProofActivationCost": 4e3
    },
    "retailAppliances": {
      "baseTvBudgetExBts": 19e4,
      "grossLinearMedia": 133e3,
      "grossBvodMedia": 2e5,
      "linearTvShare": 0.3993993993993994,
      "bvodShare": 0.6006006006006006,
      "grossLinearBtsAddOn": 25e3,
      "grossBvodBtsAddOn": 15e3,
      "productionTraffickingCost": 1e4,
      "techMeasurementCost": 1e4,
      "btsClientProofFee": 5900,
      "btsProofActivationCost": 4e3
    },
    "telecom": {
      "baseTvBudgetExBts": 5e5,
      "grossLinearMedia": 3e5,
      "grossBvodMedia": 2e5,
      "linearTvShare": 0.6,
      "bvodShare": 0.4,
      "grossLinearBtsAddOn": 25e3,
      "grossBvodBtsAddOn": 15e3,
      "productionTraffickingCost": 1e4,
      "techMeasurementCost": 1e4,
      "btsClientProofFee": 5900,
      "btsProofActivationCost": 4e3
    },
    "bankInsurance": {
      "baseTvBudgetExBts": 5e5,
      "grossLinearMedia": 3e5,
      "grossBvodMedia": 2e5,
      "linearTvShare": 0.6,
      "bvodShare": 0.4,
      "grossLinearBtsAddOn": 25e3,
      "grossBvodBtsAddOn": 15e3,
      "productionTraffickingCost": 1e4,
      "techMeasurementCost": 1e4,
      "btsClientProofFee": 5900,
      "btsProofActivationCost": 4e3
    }
  },
  "parityOutputsByVertical": {
    "fmcg": {
      "upside": {
        "attentiveAudience": 24e5,
        "qrScans": 24e5,
        "qualifiedVisits": 192e4,
        "addToCarts": 268800,
        "directConversions": 107520,
        "assistedBaseConversions": 503999.99999999994,
        "assistedAudience": 176399.99999999997,
        "assistedConversions": 17639.999999999996,
        "totalIncrementalConversions": 125160,
        "tvOnlyGeneratedRevenue": 336300,
        "btsIncrementalValue": 67260,
        "totalRevenueWithBts": 403560,
        "incrementalBtsCost": 27900,
        "totalCampaignCost": 104900,
        "roiTotal": 4939.2,
        "btsIncrementalRoi": 129475.86206896552,
        "workbookNetBusinessDeltaVsTvBaseline": 148205,
        "breakEvenMediaCost": 326560,
        "breakEvenGap": 298660
      },
      "base": {
        "attentiveAudience": 12e5,
        "qrScans": 12e5,
        "qualifiedVisits": 9e5,
        "addToCarts": 9e4,
        "directConversions": 10800,
        "assistedBaseConversions": 117e3,
        "assistedAudience": 23400,
        "assistedConversions": 1872,
        "totalIncrementalConversions": 12672,
        "tvOnlyGeneratedRevenue": 333450,
        "btsIncrementalValue": 50017.5,
        "totalRevenueWithBts": 383467.5,
        "incrementalBtsCost": 31900,
        "totalCampaignCost": 137400,
        "roiTotal": 0.10899563318777293,
        "btsIncrementalRoi": 1.5679467084639498,
        "workbookNetBusinessDeltaVsTvBaseline": -16924,
        "breakEvenMediaCost": 277967.5,
        "breakEvenGap": 246067.5
      },
      "stress": {
        "attentiveAudience": 4e5,
        "qrScans": 4e5,
        "qualifiedVisits": 28e4,
        "addToCarts": 19600.000000000004,
        "directConversions": 784.0000000000002,
        "assistedBaseConversions": 23040,
        "assistedAudience": 2304,
        "assistedConversions": 138.24,
        "totalIncrementalConversions": 922.2400000000002,
        "tvOnlyGeneratedRevenue": 330600,
        "btsIncrementalValue": 33060,
        "totalRevenueWithBts": 363660,
        "incrementalBtsCost": 37900,
        "totalCampaignCost": 171900,
        "roiTotal": 0.0033775916230366497,
        "btsIncrementalRoi": 0.7642872928176798,
        "workbookNetBusinessDeltaVsTvBaseline": -17519.392,
        "breakEvenMediaCost": 229660,
        "breakEvenGap": 191760
      }
    },
    "retailAppliances": {
      "upside": {
        "attentiveAudience": 24e5,
        "qrScans": 4320,
        "qualifiedVisits": 3456,
        "addToCarts": 414.71999999999997,
        "directConversions": 145.152,
        "assistedBaseConversions": 24e4,
        "assistedAudience": 72e3,
        "assistedConversions": 432,
        "totalIncrementalConversions": 577.152,
        "tvOnlyGeneratedRevenue": 785880,
        "btsIncrementalValue": 157176,
        "totalRevenueWithBts": 943056,
        "incrementalBtsCost": -8900,
        "totalCampaignCost": 181100,
        "roiTotal": 1.0186230811706238,
        "btsIncrementalRoi": 17.660224719101123,
        "workbookNetBusinessDeltaVsTvBaseline": 157176,
        "breakEvenMediaCost": 181100,
        "breakEvenGap": 176969.6000000001
      },
      "base": {
        "attentiveAudience": 12e5,
        "qrScans": 1800,
        "qualifiedVisits": 1350,
        "addToCarts": 121.5,
        "directConversions": 36.449999999999996,
        "assistedBaseConversions": 96e3,
        "assistedAudience": 19200,
        "assistedConversions": 288,
        "totalIncrementalConversions": 324.45,
        "tvOnlyGeneratedRevenue": 714285,
        "btsIncrementalValue": 107142.75,
        "totalRevenueWithBts": 821427.75,
        "incrementalBtsCost": 47050,
        "totalCampaignCost": 237050,
        "roiTotal": 0.17298375870069607,
        "btsIncrementalRoi": 2.2772104144527097,
        "workbookNetBusinessDeltaVsTvBaseline": 107142.75,
        "breakEvenMediaCost": 237050,
        "breakEvenGap": 1051600
      },
      "stress": {
        "attentiveAudience": 6e5,
        "qrScans": 600,
        "qualifiedVisits": 420,
        "addToCarts": 25.2,
        "directConversions": 5.544,
        "assistedBaseConversions": 36e3,
        "assistedAudience": 3600,
        "assistedConversions": 21.6,
        "totalIncrementalConversions": 27.144000000000002,
        "tvOnlyGeneratedRevenue": 675990,
        "btsIncrementalValue": 67599,
        "totalRevenueWithBts": 743589,
        "incrementalBtsCost": 103e3,
        "totalCampaignCost": 293e3,
        "roiTotal": 0.012210708532423209,
        "btsIncrementalRoi": 0.6563009708737864,
        "workbookNetBusinessDeltaVsTvBaseline": 67599,
        "breakEvenMediaCost": 293e3,
        "breakEvenGap": 1.7057411764705882e6
      }
    }
  },
  "referenceOutputsByVertical": {
    "fmcg": {
      "upside": {
        "tvOnlyGeneratedRevenue": 336300,
        "totalRevenueWithBts": 403560,
        "btsIncrementalValue": 67260,
        "incrementalBtsCost": 27900,
        "proofLayerNetContribution": 39360,
        "workbookNetBusinessDeltaVsTvBaseline": 148205,
        "totalCampaignCost": 104900,
        "roiTotal": 4939.2,
        "btsIncrementalRoi": 129475.86206896552,
        "tvOnlyRoi": 5.9,
        "breakEvenMediaCost": 326560,
        "breakEvenGap": 298660,
        "directImpact": 107520,
        "assistedImpact": 17639.999999999996,
        "impactFromProof": 0.1409395973154362,
        "referenceMeta": {
          "sourceType": "referenceOutput",
          "auditOnly": true,
          "referenceOrigin": "workbook-derived parity snapshot"
        }
      },
      "base": {
        "tvOnlyGeneratedRevenue": 333450,
        "totalRevenueWithBts": 383467.5,
        "btsIncrementalValue": 50017.5,
        "incrementalBtsCost": 31900,
        "proofLayerNetContribution": 18117.5,
        "workbookNetBusinessDeltaVsTvBaseline": -16924,
        "totalCampaignCost": 137400,
        "roiTotal": 0.10899563318777293,
        "btsIncrementalRoi": 1.5679467084639498,
        "tvOnlyRoi": 3.9,
        "breakEvenMediaCost": 277967.5,
        "breakEvenGap": 246067.5,
        "directImpact": 10800,
        "assistedImpact": 1872,
        "impactFromProof": 0.14772727272727273,
        "referenceMeta": {
          "sourceType": "referenceOutput",
          "auditOnly": true,
          "referenceOrigin": "workbook-derived parity snapshot"
        }
      },
      "stress": {
        "tvOnlyGeneratedRevenue": 330600,
        "totalRevenueWithBts": 363660,
        "btsIncrementalValue": 33060,
        "incrementalBtsCost": 37900,
        "proofLayerNetContribution": -4840,
        "workbookNetBusinessDeltaVsTvBaseline": -17519.392,
        "totalCampaignCost": 171900,
        "roiTotal": 0.0033775916230366497,
        "btsIncrementalRoi": 0.7642872928176798,
        "tvOnlyRoi": 2.9,
        "breakEvenMediaCost": 229660,
        "breakEvenGap": 191760,
        "directImpact": 784.0000000000002,
        "assistedImpact": 138.24,
        "impactFromProof": 0.14989590562109642,
        "referenceMeta": {
          "sourceType": "referenceOutput",
          "auditOnly": true,
          "referenceOrigin": "workbook-derived parity snapshot"
        }
      }
    },
    "retailGeneral": {
      "upside": {
        "tvOnlyGeneratedRevenue": 491175.00000000006,
        "totalRevenueWithBts": 589410.0000000001,
        "btsIncrementalValue": 98235.00000000001,
        "incrementalBtsCost": -54850,
        "proofLayerNetContribution": 131860.12799999997,
        "totalCampaignCost": 135150,
        "roiTotal": 1.975657624861265,
        "btsIncrementalRoi": 1.7909753874202372,
        "tvOnlyRoi": 5.9,
        "breakEvenMediaCost": 399410.0000000001,
        "breakEvenGap": 454260.0000000001,
        "directImpact": 157.248,
        "assistedImpact": 2903.0399999999995,
        "impactFromProof": 0.9486166007905138,
        "referenceMeta": {
          "sourceType": "referenceOutput",
          "auditOnly": true,
          "referenceOrigin": "workbook-derived parity snapshot"
        }
      },
      "base": {
        "tvOnlyGeneratedRevenue": 519480,
        "totalRevenueWithBts": 597402,
        "btsIncrementalValue": 77922,
        "incrementalBtsCost": -8900,
        "proofLayerNetContribution": -167375.66,
        "totalCampaignCost": 181100,
        "roiTotal": 0.07578321369409169,
        "btsIncrementalRoi": 8.755280898876405,
        "tvOnlyRoi": 3.9,
        "breakEvenMediaCost": 407402,
        "breakEvenGap": 416302,
        "directImpact": 25.515000000000004,
        "assistedImpact": 464.64000000000016,
        "impactFromProof": 0.9479450377941672,
        "referenceMeta": {
          "sourceType": "referenceOutput",
          "auditOnly": true,
          "referenceOrigin": "workbook-derived parity snapshot"
        }
      },
      "stress": {
        "tvOnlyGeneratedRevenue": 531135,
        "totalRevenueWithBts": 584248.5,
        "btsIncrementalValue": 53113.5,
        "incrementalBtsCost": 53050,
        "proofLayerNetContribution": -242471.07095,
        "totalCampaignCost": 243050,
        "roiTotal": 0.002381933964204897,
        "btsIncrementalRoi": 1.0011969839773798,
        "tvOnlyRoi": 2.9,
        "breakEvenMediaCost": 394248.5,
        "breakEvenGap": 341198.5,
        "directImpact": 2.772,
        "assistedImpact": 33.075,
        "impactFromProof": 0.9226713532513181,
        "referenceMeta": {
          "sourceType": "referenceOutput",
          "auditOnly": true,
          "referenceOrigin": "workbook-derived parity snapshot"
        }
      }
    },
    "retailAppliances": {
      "upside": {
        "tvOnlyGeneratedRevenue": 785880,
        "totalRevenueWithBts": 943056,
        "btsIncrementalValue": 157176,
        "incrementalBtsCost": -8900,
        "proofLayerNetContribution": 166076,
        "workbookNetBusinessDeltaVsTvBaseline": 157176,
        "totalCampaignCost": 181100,
        "roiTotal": 1.0186230811706238,
        "btsIncrementalRoi": 17.660224719101123,
        "tvOnlyRoi": 5.9,
        "breakEvenMediaCost": 181100,
        "breakEvenGap": 176969.6000000001,
        "directImpact": 145.152,
        "assistedImpact": 432,
        "impactFromProof": 0.748502994011976,
        "referenceMeta": {
          "sourceType": "referenceOutput",
          "auditOnly": true,
          "referenceOrigin": "workbook-derived parity snapshot"
        }
      },
      "base": {
        "tvOnlyGeneratedRevenue": 714285,
        "totalRevenueWithBts": 821427.75,
        "btsIncrementalValue": 107142.75,
        "incrementalBtsCost": 47050,
        "proofLayerNetContribution": 60092.75,
        "workbookNetBusinessDeltaVsTvBaseline": 107142.75,
        "totalCampaignCost": 237050,
        "roiTotal": 0.17298375870069607,
        "btsIncrementalRoi": 2.2772104144527097,
        "tvOnlyRoi": 3.9,
        "breakEvenMediaCost": 237050,
        "breakEvenGap": 1051600,
        "directImpact": 36.449999999999996,
        "assistedImpact": 288,
        "impactFromProof": 0.8876560332871013,
        "referenceMeta": {
          "sourceType": "referenceOutput",
          "auditOnly": true,
          "referenceOrigin": "workbook-derived parity snapshot"
        }
      },
      "stress": {
        "tvOnlyGeneratedRevenue": 675990,
        "totalRevenueWithBts": 743589,
        "btsIncrementalValue": 67599,
        "incrementalBtsCost": 103e3,
        "proofLayerNetContribution": -35401,
        "workbookNetBusinessDeltaVsTvBaseline": 67599,
        "totalCampaignCost": 293e3,
        "roiTotal": 0.012210708532423209,
        "btsIncrementalRoi": 0.6563009708737864,
        "tvOnlyRoi": 2.9,
        "breakEvenMediaCost": 293e3,
        "breakEvenGap": 1.7057411764705882e6,
        "directImpact": 5.544,
        "assistedImpact": 21.6,
        "impactFromProof": 0.7957559681697612,
        "referenceMeta": {
          "sourceType": "referenceOutput",
          "auditOnly": true,
          "referenceOrigin": "workbook-derived parity snapshot"
        }
      }
    },
    "telecom": {
      "upside": {
        "tvOnlyGeneratedRevenue": 1.0325000000000001e6,
        "totalRevenueWithBts": 1.2390000000000002e6,
        "btsIncrementalValue": 206500.00000000003,
        "incrementalBtsCost": 29900,
        "proofLayerNetContribution": 176600.00000000003,
        "totalCampaignCost": 224900,
        "roiTotal": 2.6114606491774124,
        "btsIncrementalRoi": 0.24561068702290076,
        "tvOnlyRoi": 5.9,
        "breakEvenMediaCost": 1.0440000000000002e6,
        "breakEvenGap": 1.0141000000000002e6,
        "directImpact": 146.25,
        "assistedImpact": 1125,
        "impactFromProof": 0.8849557522123894,
        "referenceMeta": {
          "sourceType": "referenceOutput",
          "auditOnly": true,
          "referenceOrigin": "workbook-derived parity snapshot"
        }
      },
      "base": {
        "tvOnlyGeneratedRevenue": 975e3,
        "totalRevenueWithBts": 1121250,
        "btsIncrementalValue": 146250,
        "incrementalBtsCost": 35900,
        "proofLayerNetContribution": 110350,
        "totalCampaignCost": 305900,
        "roiTotal": 0.4756377901274927,
        "btsIncrementalRoi": 0.03739103554868624,
        "tvOnlyRoi": 3.9,
        "breakEvenMediaCost": 851250,
        "breakEvenGap": 815350,
        "directImpact": 25.2,
        "assistedImpact": 480,
        "impactFromProof": 0.9501187648456058,
        "referenceMeta": {
          "sourceType": "referenceOutput",
          "auditOnly": true,
          "referenceOrigin": "workbook-derived parity snapshot"
        }
      },
      "stress": {
        "tvOnlyGeneratedRevenue": 942500,
        "totalRevenueWithBts": 1036750,
        "btsIncrementalValue": 94250,
        "incrementalBtsCost": 41900,
        "proofLayerNetContribution": 52350,
        "totalCampaignCost": 386900,
        "roiTotal": 0.05884192556216077,
        "btsIncrementalRoi": 0.0027651724137931033,
        "tvOnlyRoi": 2.9,
        "breakEvenMediaCost": 691750,
        "breakEvenGap": 649850,
        "directImpact": 1.755,
        "assistedImpact": 126,
        "impactFromProof": 0.9862627685804861,
        "referenceMeta": {
          "sourceType": "referenceOutput",
          "auditOnly": true,
          "referenceOrigin": "workbook-derived parity snapshot"
        }
      }
    },
    "bankInsurance": {
      "upside": {
        "tvOnlyGeneratedRevenue": 118e4,
        "totalRevenueWithBts": 1416e3,
        "btsIncrementalValue": 236e3,
        "incrementalBtsCost": 31900,
        "proofLayerNetContribution": 204100,
        "totalCampaignCost": 251900,
        "roiTotal": 2.2471082274712186,
        "btsIncrementalRoi": 2.28152584643289,
        "tvOnlyRoi": 5.9,
        "breakEvenMediaCost": 1196e3,
        "breakEvenGap": 1164100,
        "directImpact": 28.940624999999997,
        "assistedImpact": 600,
        "impactFromProof": 0.9539851237944759,
        "referenceMeta": {
          "sourceType": "referenceOutput",
          "auditOnly": true,
          "referenceOrigin": "workbook-derived parity snapshot"
        }
      },
      "base": {
        "tvOnlyGeneratedRevenue": 1072500,
        "totalRevenueWithBts": 1233375,
        "btsIncrementalValue": 160875,
        "incrementalBtsCost": 37900,
        "proofLayerNetContribution": 122975,
        "totalCampaignCost": 332900,
        "roiTotal": 0.8239050765995795,
        "btsIncrementalRoi": 1.6414003590664272,
        "tvOnlyRoi": 3.9,
        "breakEvenMediaCost": 938375,
        "breakEvenGap": 900475,
        "directImpact": 5.669999999999999,
        "assistedImpact": 250,
        "impactFromProof": 0.9297136481963556,
        "referenceMeta": {
          "sourceType": "referenceOutput",
          "auditOnly": true,
          "referenceOrigin": "workbook-derived parity snapshot"
        }
      },
      "stress": {
        "tvOnlyGeneratedRevenue": 1015e3,
        "totalRevenueWithBts": 1116500,
        "btsIncrementalValue": 101500,
        "incrementalBtsCost": 43900,
        "proofLayerNetContribution": 57600,
        "totalCampaignCost": 413900,
        "roiTotal": 0.10818917612949987,
        "btsIncrementalRoi": 0.5200871080139372,
        "tvOnlyRoi": 2.9,
        "breakEvenMediaCost": 746500,
        "breakEvenGap": 702600,
        "directImpact": 0.6581249999999998,
        "assistedImpact": 72,
        "impactFromProof": 0.964727163099186,
        "referenceMeta": {
          "sourceType": "referenceOutput",
          "auditOnly": true,
          "referenceOrigin": "workbook-derived parity snapshot"
        }
      }
    }
  },
  "lockedProductionBaselines": {
    "automotive": {
      "upside": {
        "tvOnlyGeneratedRevenue": 1.0325000000000001e6,
        "totalRevenueWithBts": 1.2390000000000002e6,
        "btsIncrementalValue": 206500.00000000003,
        "incrementalBtsCost": 29900,
        "totalCampaignCost": 224900,
        "proofLayerNetContribution": 176600.00000000003,
        "roiTotal": 7.075646064917741,
        "btsIncrementalRoi": 6.075646064917741,
        "tvOnlyRoi": 5.9,
        "breakEvenMediaCost": 1.0440000000000002e6,
        "breakEvenGap": 1.0141000000000002e6,
        "directImpact": 14.660800000000004,
        "assistedImpact": 440,
        "impactFromProof": 0.9677544226377115
      },
      "base": {
        "tvOnlyGeneratedRevenue": 975e3,
        "totalRevenueWithBts": 1121250,
        "btsIncrementalValue": 146250,
        "incrementalBtsCost": 35900,
        "totalCampaignCost": 305900,
        "proofLayerNetContribution": 110350,
        "roiTotal": 1.2913396534815298,
        "btsIncrementalRoi": 0.29133965348152985,
        "tvOnlyRoi": 3.9,
        "breakEvenMediaCost": 851250,
        "breakEvenGap": 815350,
        "directImpact": 2.0736,
        "assistedImpact": 129.6,
        "impactFromProof": 0.984251968503937
      },
      "stress": {
        "tvOnlyGeneratedRevenue": 942500,
        "totalRevenueWithBts": 1036750,
        "btsIncrementalValue": 94250,
        "incrementalBtsCost": 41900,
        "totalCampaignCost": 386900,
        "proofLayerNetContribution": 52350,
        "roiTotal": 0.23353418195916256,
        "btsIncrementalRoi": -0.7664658180408375,
        "tvOnlyRoi": 2.9,
        "breakEvenMediaCost": 691750,
        "breakEvenGap": 649850,
        "directImpact": 0.14174999999999996,
        "assistedImpact": 36,
        "impactFromProof": 0.9960779430990474
      }
    },
    "tourism": {
      "upside": {
        "tvOnlyGeneratedRevenue": 884115,
        "totalRevenueWithBts": 1060938,
        "btsIncrementalValue": 176823,
        "incrementalBtsCost": 13750,
        "totalCampaignCost": 203750,
        "proofLayerNetContribution": 163073,
        "roiTotal": 36.005519705521465,
        "btsIncrementalRoi": 12.859854545454546,
        "tvOnlyRoi": 5.9,
        "breakEvenMediaCost": 870938,
        "breakEvenGap": 857188,
        "directImpact": 459.6479999999999,
        "assistedImpact": 1440,
        "impactFromProof": 0.7580351728320195
      },
      "base": {
        "tvOnlyGeneratedRevenue": 779220,
        "totalRevenueWithBts": 896103,
        "btsIncrementalValue": 116883,
        "incrementalBtsCost": 69700,
        "totalCampaignCost": 259700,
        "proofLayerNetContribution": 47183,
        "roiTotal": 10.103673950712361,
        "btsIncrementalRoi": 1.6769440459110474,
        "tvOnlyRoi": 3.9,
        "breakEvenMediaCost": 706103,
        "breakEvenGap": 636403,
        "directImpact": 246.0375,
        "assistedImpact": 432,
        "impactFromProof": 0.6371329019412643
      },
      "stress": {
        "tvOnlyGeneratedRevenue": 724275,
        "totalRevenueWithBts": 796702.5,
        "btsIncrementalValue": 72427.5,
        "incrementalBtsCost": 125650,
        "totalCampaignCost": 315650,
        "proofLayerNetContribution": -53222.5,
        "roiTotal": 1.6793780453033424,
        "btsIncrementalRoi": 0.5764226024671707,
        "tvOnlyRoi": 2.9,
        "breakEvenMediaCost": 606702.5,
        "breakEvenGap": 481052.5,
        "directImpact": 59.136,
        "assistedImpact": 43.2,
        "impactFromProof": 0.4221388367729831
      }
    }
  },
  "automotiveWorkbookAuditByScenario": {
    "upside": {
      "tvOnlyGeneratedRevenue": 1032500,
      "btsIncrementalValue": 206500,
      "totalRevenueWithBts": 1239e3,
      "incrementalBtsCost": 29900,
      "totalCampaignCost": 224900,
      "proofLayerNetContribution": 176600,
      "netBusinessDeltaVsTvBaseline": -274645.3392,
      "roiTotalCampaign": 7.075646064917741,
      "roiBtsIncremental": 6.075646064917741
    },
    "base": {
      "tvOnlyGeneratedRevenue": 975e3,
      "btsIncrementalValue": 146250,
      "totalRevenueWithBts": 1121250,
      "incrementalBtsCost": 35900,
      "totalCampaignCost": 305900,
      "proofLayerNetContribution": 110350,
      "netBusinessDeltaVsTvBaseline": -193968.3264,
      "roiTotalCampaign": 1.2913396534815298,
      "roiBtsIncremental": 0.29133965348152985
    },
    "stress": {
      "tvOnlyGeneratedRevenue": 942500,
      "btsIncrementalValue": 94250,
      "totalRevenueWithBts": 1036750,
      "incrementalBtsCost": 41900,
      "totalCampaignCost": 386900,
      "proofLayerNetContribution": 52350,
      "netBusinessDeltaVsTvBaseline": -113063.85825,
      "roiTotalCampaign": 0.23353418195916256,
      "roiBtsIncremental": -0.7664658180408375
    }
  }
};
var workbookMediaNegotiationAssumptions = (() => {
  const factorKeyCandidatesByVertical = {
    fmcg: ["fmcg", "FMCG"],
    retailGeneral: ["retailGeneral", "Retail General", " Retail - General"],
    retailAppliances: ["retailAppliances", "Retail Appliances", " Retail - Appliances"],
    telecom: ["telecom", "Telecom", "Telecom Internet"],
    bankInsurance: ["bankInsurance", "Bank/Insurance", "Bank Insurance"],
    automotive: ["automotive", "Automotive", "Automobile"],
    tourism: ["tourism", "Tourism"]
  };
  return Object.fromEntries(
    Object.entries(factorKeyCandidatesByVertical).map(([key, candidates]) => [
      key,
      candidates.map((candidate) => workbookFactors[candidate]).find(Boolean) || {}
    ])
  );
})();
var lockedProductionBaselines = workbookModelData.lockedProductionBaselines;
var automotiveWorkbookAuditByScenario = workbookModelData.automotiveWorkbookAuditByScenario;
var referenceOutputsByVertical = workbookModelData.referenceOutputsByVertical;
var scenarioKeyMap = { Upside: "upside", Base: "base", Stress: "stress" };
var scenarioNameMap = { upside: "Upside", base: "Base", stress: "Stress" };
function toScenarioKey(scenario) {
  return scenarioKeyMap[scenario] || String(scenario ?? "").trim().toLowerCase() || null;
}
function getWorkbookVerticalData(verticalKey) {
  return workbookModelData.verticals[verticalKey] ?? null;
}
function getWorkbookScenarioInputs(verticalKey, scenario) {
  const scenarioKey = toScenarioKey(scenario);
  if (!verticalKey || !scenarioKey) return null;
  const verticalData = getWorkbookVerticalData(verticalKey);
  return verticalData?.[scenarioKey] ?? null;
}
function getWorkbookMediaProfile(mediaType) {
  return workbookModelData.mediaProfilesByType[mediaType] ?? null;
}
function getWorkbookEconomicsProfile(verticalKey) {
  return workbookModelData.economicsProfilesByVertical[verticalKey] ?? null;
}
function getWorkbookScenarioRoiAssumptions(verticalKey, scenario) {
  const scenarioKey = toScenarioKey(scenario);
  if (!scenarioKey) return null;
  return workbookModelData.scenarioRoiAssumptionsByVertical[verticalKey]?.[scenarioKey] ?? workbookModelData.defaultScenarioRoiAssumptions[scenarioKey] ?? null;
}
function getWorkbookMediaFactors(verticalKey, scenario) {
  const scenarioName = scenarioNameMap[toScenarioKey(scenario)] || scenario;
  if (!verticalKey || !scenarioName) {
    return { core: null, bts: null, isComplete: false, missing: ["vertical/scenario"] };
  }
  const lockedOverride = workbookModelData.lockedMediaFactorsByVertical[verticalKey]?.[toScenarioKey(scenario)] ?? null;
  if (lockedOverride) {
    return { core: lockedOverride.core, bts: lockedOverride.bts, isComplete: true, missing: [] };
  }
  const verticalFactors = workbookMediaNegotiationAssumptions[verticalKey];
  if (!verticalFactors) {
    return { core: null, bts: null, isComplete: false, missing: ["mediaNegotiationAssumptions"] };
  }
  const scenarioFactors = verticalFactors[scenarioName];
  if (!scenarioFactors) {
    return { core: null, bts: null, isComplete: false, missing: [`scenario:${scenarioName}`] };
  }
  const missing = [];
  if (scenarioFactors.core == null) missing.push("core");
  if (scenarioFactors.bts == null) missing.push("bts");
  return {
    core: scenarioFactors.core ?? null,
    bts: scenarioFactors.bts ?? null,
    isComplete: missing.length === 0,
    missing
  };
}
function getWorkbookParityOutputs(verticalKey, scenario) {
  const scenarioKey = toScenarioKey(scenario);
  return workbookModelData.parityOutputsByVertical[verticalKey]?.[scenarioKey] ?? null;
}

// src/data/modelRuntimeAssumptions.js
var mediaTypeBehavior = {
  Daytime: {
    attentionMultiplier: 0.88,
    costMultiplier: 0.9,
    sourceType: "ui-runtime-assumption",
    description: "Display/runtime media context multiplier for daytime media selection."
  },
  Primetime: {
    attentionMultiplier: 1.15,
    costMultiplier: 1.15,
    sourceType: "ui-runtime-assumption",
    description: "Display/runtime media context multiplier for primetime media selection."
  },
  Mixed: {
    attentionMultiplier: 1,
    costMultiplier: 1,
    sourceType: "ui-runtime-assumption",
    description: "Neutral runtime media context multiplier for mixed planning."
  }
};
var mediaMixAssumptions = {
  normalizedShareFallback: {
    linearTvShare: 0.5,
    bvodShare: 0.5,
    sourceType: "ui-runtime-assumption",
    fallbackOnly: true,
    description: "Used only when media shares are missing from inputs/data so the engine can remain operational."
  },
  attentionMixWeights: {
    linear: 0.94,
    bvod: 1.06,
    sourceType: "model-assumption",
    description: "Runtime attention mix weighting between linear and BVoD shares."
  },
  conversionMixWeights: {
    linear: 0.97,
    bvod: 1.07,
    sourceType: "model-assumption",
    description: "Runtime conversion mix weighting between linear and BVoD shares."
  }
};
var defaultMediaTypeByVertical = {
  fmcg: {
    mediaType: "Daytime",
    sourceType: "ui-runtime-assumption",
    description: "Default media chip selection for FMCG."
  },
  retailAppliances: {
    mediaType: "Daytime",
    sourceType: "ui-runtime-assumption",
    description: "Default media chip selection for Retail Appliances."
  },
  tourism: {
    mediaType: "Daytime",
    sourceType: "ui-runtime-assumption",
    description: "Default media chip selection for Tourism."
  },
  retailGeneral: {
    mediaType: "Mixed",
    sourceType: "ui-runtime-assumption",
    description: "Default media chip selection for Retail General."
  },
  telecom: {
    mediaType: "Primetime",
    sourceType: "ui-runtime-assumption",
    description: "Default media chip selection for Telecom."
  },
  bankInsurance: {
    mediaType: "Primetime",
    sourceType: "ui-runtime-assumption",
    description: "Default media chip selection for Bank/Insurance."
  },
  automotive: {
    mediaType: "Primetime",
    sourceType: "ui-runtime-assumption",
    description: "Default media chip selection for Automotive."
  }
};
function getMediaTypeBehavior(mediaType) {
  return mediaTypeBehavior[mediaType] ?? null;
}
function getDefaultMediaType(verticalKey) {
  return defaultMediaTypeByVertical[verticalKey]?.mediaType ?? null;
}

// src/lib/engine.js
function getRelativeMultiplier(selectedValue, defaultValue) {
  const safeSelected = Number.isFinite(selectedValue) && selectedValue > 0 ? selectedValue : 1;
  const safeDefault = Number.isFinite(defaultValue) && defaultValue > 0 ? defaultValue : 1;
  return safeSelected / safeDefault;
}
function normalizeMediaShares(linearTvShare, bvodShare) {
  const shareFallback = mediaMixAssumptions.normalizedShareFallback;
  let linear = clamp01(linearTvShare ?? shareFallback.linearTvShare);
  let bvod = clamp01(bvodShare ?? shareFallback.bvodShare);
  const shareTotal = linear + bvod || 1;
  linear /= shareTotal;
  bvod /= shareTotal;
  return { linearTvShare: linear, bvodShare: bvod };
}
function getMixFactors(linearTvShare, bvodShare) {
  return {
    attention: linearTvShare * mediaMixAssumptions.attentionMixWeights.linear + bvodShare * mediaMixAssumptions.attentionMixWeights.bvod,
    conversion: linearTvShare * mediaMixAssumptions.conversionMixWeights.linear + bvodShare * mediaMixAssumptions.conversionMixWeights.bvod
  };
}
function getResolvedMediaContext(verticalKey, mediaType) {
  const workbookEconomicsProfile = getWorkbookEconomicsProfile(verticalKey);
  const selectedMediaProfile = mediaType ? getWorkbookMediaProfile(mediaType) : null;
  const selectedMediaBehavior = mediaType ? getMediaTypeBehavior(mediaType) : null;
  const defaultMediaType = getDefaultMediaType(verticalKey);
  const defaultMediaProfile = defaultMediaType ? getWorkbookMediaProfile(defaultMediaType) : null;
  const defaultMediaBehavior = defaultMediaType ? getMediaTypeBehavior(defaultMediaType) : null;
  const useWorkbookDefaultShares = Boolean(
    workbookEconomicsProfile && defaultMediaType && mediaType === defaultMediaType
  );
  const defaultShares = normalizeMediaShares(
    workbookEconomicsProfile?.linearTvShare ?? defaultMediaProfile?.linearTvShare,
    workbookEconomicsProfile?.bvodShare ?? defaultMediaProfile?.bvodShare
  );
  const selectedShares = normalizeMediaShares(
    useWorkbookDefaultShares ? workbookEconomicsProfile?.linearTvShare : selectedMediaProfile?.linearTvShare ?? workbookEconomicsProfile?.linearTvShare,
    useWorkbookDefaultShares ? workbookEconomicsProfile?.bvodShare : selectedMediaProfile?.bvodShare ?? workbookEconomicsProfile?.bvodShare
  );
  const defaultMixFactors = getMixFactors(defaultShares.linearTvShare, defaultShares.bvodShare);
  const selectedMixFactors = getMixFactors(selectedShares.linearTvShare, selectedShares.bvodShare);
  return {
    workbookEconomicsProfile,
    selectedMediaProfile,
    selectedMediaBehavior,
    defaultMediaType,
    defaultMediaProfile,
    defaultMediaBehavior,
    defaultShares,
    selectedShares,
    relativeAttentionMultiplier: getRelativeMultiplier(
      selectedMediaBehavior?.attentionMultiplier,
      defaultMediaBehavior?.attentionMultiplier
    ),
    relativeCostMultiplier: getRelativeMultiplier(
      selectedMediaBehavior?.costMultiplier,
      defaultMediaBehavior?.costMultiplier
    ),
    relativeMixAttentionMultiplier: getRelativeMultiplier(selectedMixFactors.attention, defaultMixFactors.attention),
    relativeMixConversionMultiplier: getRelativeMultiplier(selectedMixFactors.conversion, defaultMixFactors.conversion)
  };
}
function getScenarioInputs(vertical, scenario, mediaTypeOverride = null) {
  const verticalKey = normalizeVerticalKey(vertical);
  if (!verticalKey) return null;
  const config = verticalConfig[verticalKey];
  const scenarioInputs = getWorkbookScenarioInputs(verticalKey, scenario);
  if (!config || !scenarioInputs) return null;
  const mediaType = mediaTypeOverride || getDefaultMediaType(verticalKey);
  return {
    vertical: verticalKey,
    scenario,
    mediaType,
    ...getMediaEconomicsDefaults(mediaType, verticalKey, scenario),
    ...clone(scenarioInputs)
  };
}
function getComparisonSet(vertical, overrides = {}) {
  return scenarioOrder.map((scenario) => {
    const scenarioInputs = getScenarioInputs(vertical, scenario);
    return {
      scenario,
      results: computeProofRoi(vertical, scenarioInputs ? { ...scenarioInputs, ...overrides } : overrides)
    };
  });
}
function validateVerticalScenarioCompleteness({ vertical, scenario, mediaType, inputs = {}, results = null }) {
  const normalizedVerticalKey = normalizeVerticalKey(vertical);
  const config = normalizedVerticalKey ? verticalConfig[normalizedVerticalKey] : null;
  const scenarioInputs = normalizedVerticalKey && scenario ? getWorkbookScenarioInputs(normalizedVerticalKey, scenario) : null;
  const resolvedMediaType = mediaType ?? inputs.mediaType ?? (normalizedVerticalKey ? getDefaultMediaType(normalizedVerticalKey) : null);
  const mediaProfile = resolvedMediaType ? getWorkbookMediaProfile(resolvedMediaType) : null;
  const mediaTypeConfig = resolvedMediaType ? mediaTypes[resolvedMediaType] ?? null : null;
  const mediaFactors = normalizedVerticalKey && scenario ? getWorkbookMediaFactors(normalizedVerticalKey, scenario) : { core: null, bts: null, isComplete: false, missing: ["vertical/scenario"] };
  const roiAssumptions = scenario ? getWorkbookScenarioRoiAssumptions(normalizedVerticalKey, scenario) : null;
  const inputGroups = config?.inputGroups ?? {};
  const businessFields = ["Media", "Funnel", "Proof", "Economics"].flatMap((groupName) => inputGroups[groupName] ?? []);
  const advancedFields = inputGroups.Advanced ?? [];
  const effectiveInputs = { ...scenarioInputs ?? {}, ...inputs ?? {} };
  const missingBusinessKeys = businessFields.filter((field) => effectiveInputs[field.key] == null).map((field) => field.key);
  const missingCostKeys = advancedFields.filter((field) => effectiveInputs[field.key] == null && mediaProfile?.[field.key] == null).map((field) => field.key);
  const missingLabels = [...businessFields, ...advancedFields].filter((field) => !field.label || !field.key).map((field) => field.key || "unknown-field");
  const missingRoiKeys = ["tv", "bts"].filter((key) => roiAssumptions?.[key] == null);
  const missingKpiKeys = results ? [
    "tvOnlyGeneratedRevenue",
    "totalRevenueWithBts",
    "btsIncrementalValue",
    "incrementalBtsCost",
    "totalCampaignCost",
    "proofLayerNetContribution",
    "roiTotal",
    "btsIncrementalRoi",
    "tvOnlyRoi",
    "breakEvenMediaCost",
    "breakEvenGap"
  ].filter((key) => results[key] == null || Number.isNaN(results[key])) : [];
  const rows = [
    {
      category: "Business inputs",
      status: normalizedVerticalKey && scenarioInputs && missingBusinessKeys.length === 0 ? "Complete" : "Incomplete",
      details: !normalizedVerticalKey ? "Unknown vertical key." : !scenarioInputs ? `Missing scenario inputs for ${normalizedVerticalKey} / ${scenario}.` : missingBusinessKeys.length ? `Missing keys: ${missingBusinessKeys.join(", ")}` : "All displayed business inputs are mapped."
    },
    {
      category: "Media assumptions",
      status: mediaTypeConfig && mediaProfile && mediaFactors.isComplete ? "Complete" : "Incomplete",
      details: !mediaTypeConfig ? `Unknown media type: ${resolvedMediaType ?? "none"}.` : !mediaProfile ? `Missing runtime media assumptions for media type ${resolvedMediaType}.` : !mediaFactors.isComplete ? `Missing media factors: ${mediaFactors.missing.join(", ")}` : results?.runtimeFallbacks?.length ? `Media assumptions are present, with runtime fallback usage: ${results.runtimeFallbacks.map((item) => item.key).join(", ")}.` : "Media profile and vertical factors are present."
    },
    {
      category: "Scenario assumptions",
      status: config?.proofLogic && config?.valueMode && scenarioInputs ? "Complete" : "Incomplete",
      details: !config ? "Missing vertical config." : !scenarioInputs ? `Missing scenario mapping for ${scenario}.` : "Vertical proof logic and scenario assumptions are present."
    },
    {
      category: "Cost assumptions",
      status: mediaProfile && missingCostKeys.length === 0 ? "Complete" : "Incomplete",
      details: !mediaProfile ? "No media cost module available for the selected media type." : missingCostKeys.length ? `Missing cost keys: ${missingCostKeys.join(", ")}` : "All cost assumptions are available from the selected mapping."
    },
    {
      category: "ROI formulas",
      status: roiAssumptions && missingRoiKeys.length === 0 ? "Complete" : "Incomplete",
      details: !roiAssumptions ? `Missing ROI assumptions for scenario ${scenario}.` : missingRoiKeys.length ? `Missing ROI keys: ${missingRoiKeys.join(", ")}` : "Scenario ROI assumptions are present."
    },
    {
      category: "Displayed labels",
      status: missingLabels.length === 0 ? "Complete" : "Incomplete",
      details: missingLabels.length ? `Missing labels for: ${missingLabels.join(", ")}` : "Displayed field labels are present."
    },
    {
      category: "Displayed KPIs",
      status: results ? missingKpiKeys.length === 0 ? "Complete" : "Incomplete" : "Pending",
      details: !results ? "Computed KPI validation pending." : missingKpiKeys.length ? `Missing KPI outputs: ${missingKpiKeys.join(", ")}` : "Displayed KPI outputs are present."
    }
  ];
  return {
    vertical: normalizedVerticalKey,
    scenario,
    mediaType: resolvedMediaType,
    isComplete: rows.every((row) => row.status === "Complete"),
    rows
  };
}
function computeProofRoi(vertical, inputs = {}) {
  const verticalKey = normalizeVerticalKey(vertical);
  if (verticalKey === "automotive") {
    return computeAutomotivePureEngineShadowCandidate(verticalKey, inputs);
  }
  if (verticalKey === "tourism") {
    return computeTourismPureEngineShadowCandidate(verticalKey, inputs);
  }
  if (verticalKey === "fmcg") {
    return computeFmcgPureEngineShadowCandidate(verticalKey, inputs);
  }
  if (verticalKey === "retailGeneral") {
    return computeRetailGeneralPureEngineShadowCandidate(verticalKey, inputs);
  }
  if (verticalKey === "retailAppliances") {
    return computeRetailAppliancesPureEngineShadowCandidate(verticalKey, inputs);
  }
  if (verticalKey === "telecom") {
    return computeTelecomPureEngineShadowCandidate(verticalKey, inputs);
  }
  if (verticalKey === "bankInsurance") {
    return computeBankInsurancePureEngineShadowCandidate(verticalKey, inputs);
  }
  const config = verticalConfig[verticalKey];
  const economics = getEconomics({ ...inputs, vertical: verticalKey });
  const normalizedInputs = {
    ...inputs,
    effectiveAttentionRate: economics.effectiveAttentionRate,
    effectiveConversionMultiplier: economics.effectiveConversionMultiplier,
    linearTvShare: economics.linearTvShare,
    bvodShare: economics.bvodShare
  };
  const steps = getStepResults(config.proofLogic, normalizedInputs);
  const valuePerConversion = getValuePerConversion(config.valueMode, normalizedInputs);
  const tourismCapacityAdjustedBookings = config.valueMode === "tourismEconomics" ? Math.min(steps.totalIncrementalConversions, normalizedInputs.maxBookableDemandInWindow ?? steps.totalIncrementalConversions) : 0;
  const directRevenue = config.valueMode === "tourismEconomics" ? (steps.addToCarts ?? 0) * (normalizedInputs.averageBookingValue ?? 0) : steps.directConversions * valuePerConversion;
  const assistedRevenue = config.valueMode === "tourismEconomics" ? tourismCapacityAdjustedBookings * (normalizedInputs.averageBookingValue ?? 0) * (1 + (normalizedInputs.yieldPriceUplift ?? 0)) : steps.assistedConversions * valuePerConversion;
  const revenueWithoutProof = economics.tvOnlyGeneratedRevenue;
  const proofDrivenIncrementalValue = economics.btsIncrementalValue;
  const incrementalRevenue = economics.totalRevenueWithBts;
  const incrementalProfit = config.valueMode === "tourismEconomics" ? assistedRevenue * (normalizedInputs.grossMargin ?? 0) : getProfit(config.valueMode, normalizedInputs, steps.totalIncrementalConversions, directRevenue + assistedRevenue);
  const directProfit = config.valueMode === "tourismEconomics" ? directRevenue : getProfit(config.valueMode, normalizedInputs, steps.directConversions, directRevenue);
  const proofProfit = config.valueMode === "tourismEconomics" ? assistedRevenue * (normalizedInputs.grossMargin ?? 0) : getProfit(config.valueMode, normalizedInputs, steps.assistedConversions, assistedRevenue);
  const campaignCost = economics.totalCampaignCost;
  let tvOnlyRoi = safeDivide(economics.tvOnlyGeneratedRevenue, economics.netLinearMedia + economics.netBvodMedia);
  let roiTotal = config.valueMode === "profitOnly" ? safeDivide(incrementalProfit, economics.totalCampaignCost) : config.valueMode === "tourismEconomics" ? safeDivide(directProfit + proofProfit, economics.totalCampaignCost) : safeDivide(economics.totalRevenueWithBts, economics.totalCampaignCost);
  const { proofLayerInvestment, proofLayerNetContribution, proofLayerRoi } = getCommercialProofLayerMetrics(economics);
  let btsIncrementalRoi = proofLayerRoi;
  let workbookNetBusinessDeltaVsTvBaseline = vertical === "automotive" ? economics.netMediaDeltaVsBaseline + steps.totalIncrementalConversions : null;
  let workbookProofLayerRoiDiagnostic = null;
  if (verticalKey === "fmcg") {
    const workbookParity = getWorkbookParityOutputs(verticalKey, normalizedInputs.scenario);
    if (workbookParity) {
      tvOnlyRoi = getWorkbookScenarioRoiAssumptions(verticalKey, normalizedInputs.scenario)?.tv ?? tvOnlyRoi;
      roiTotal = workbookParity.roiTotal;
      workbookProofLayerRoiDiagnostic = workbookParity.btsIncrementalRoi;
      workbookNetBusinessDeltaVsTvBaseline = workbookParity.workbookNetBusinessDeltaVsTvBaseline;
    }
  }
  if (verticalKey === "retailGeneral") {
    roiTotal = safeDivide(incrementalProfit, economics.totalCampaignCost);
    workbookNetBusinessDeltaVsTvBaseline = economics.totalRevenueWithBts - economics.tvOnlyGeneratedRevenue;
  }
  if (verticalKey === "retailAppliances") {
    const workbookParity = getWorkbookParityOutputs(verticalKey, normalizedInputs.scenario);
    if (workbookParity) {
      roiTotal = workbookParity.roiTotal;
      workbookProofLayerRoiDiagnostic = workbookParity.btsIncrementalRoi;
      workbookNetBusinessDeltaVsTvBaseline = workbookParity.workbookNetBusinessDeltaVsTvBaseline;
    }
  }
  if (verticalKey === "telecom") {
    const workbookIncrementalCost = economics.totalCampaignCost - economics.baseTvBudgetExBts;
    roiTotal = safeDivide(incrementalProfit, economics.totalCampaignCost);
    workbookProofLayerRoiDiagnostic = safeDivide(directProfit, Math.abs(workbookIncrementalCost));
    workbookNetBusinessDeltaVsTvBaseline = workbookIncrementalCost + incrementalProfit;
  }
  if (verticalKey === "bankInsurance") {
    const workbookIncrementalCost = economics.totalCampaignCost - economics.baseTvBudgetExBts;
    roiTotal = safeDivide(incrementalProfit, economics.totalCampaignCost);
    workbookProofLayerRoiDiagnostic = safeDivide(incrementalProfit, Math.abs(workbookIncrementalCost));
    workbookNetBusinessDeltaVsTvBaseline = workbookIncrementalCost + incrementalProfit;
  }
  const proofEfficiency = safeDivide(proofDrivenIncrementalValue, steps.assistedConversions);
  const costPerIncrementalConversion = safeDivide(campaignCost, steps.totalIncrementalConversions);
  const conversionUpliftOnInfluencedAudience = safeDivide(steps.assistedConversions, steps.assistedBaseConversions);
  const assistedShareOfProfit = safeDivide(proofProfit, incrementalProfit);
  const assistedShareOfImpact = safeDivide(steps.assistedConversions, steps.totalIncrementalConversions);
  let breakEvenMediaCost = Math.max(economics.tvOnlyGeneratedRevenue + economics.btsIncrementalValue - economics.tvOnlyCampaignCost, 0);
  let breakEvenGap = breakEvenMediaCost - economics.incrementalBtsCost;
  if (verticalKey === "retailAppliances") {
    const workbookParity = getWorkbookParityOutputs(verticalKey, normalizedInputs.scenario);
    if (workbookParity) {
      breakEvenMediaCost = workbookParity.breakEvenMediaCost;
      breakEvenGap = workbookParity.breakEvenGap;
    }
  }
  const valueLostToMedia = proofLayerNetContribution;
  const economicsWarning = proofLayerNetContribution < 0 && assistedShareOfImpact > 0.8 ? "TV creates baseline impact. The proof layer improves conversion, but the combined economics depend on media cost." : "";
  const decision = getDecisionSummary({
    roiTotal,
    roiDirect: tvOnlyRoi,
    proofLayerRoi: btsIncrementalRoi,
    assistedShareOfImpact,
    totalIncrementalConversions: steps.totalIncrementalConversions,
    proofEnabled: inputs.proofEnabled !== false,
    valueLostToMedia: proofLayerNetContribution,
    incrementalBtsCost: economics.incrementalBtsCost
  });
  const decisionReasons = getDecisionReasons({
    roiTotal,
    roiDirect: tvOnlyRoi,
    proofLayerRoi: btsIncrementalRoi,
    assistedShareOfImpact,
    valueLostToMedia: proofLayerNetContribution,
    proofEnabled: inputs.proofEnabled !== false,
    incrementalBtsCost: economics.incrementalBtsCost
  });
  const validationRows = buildValidationRows({
    vertical,
    scenario: inputs.scenario,
    inputs,
    tvOnlyGeneratedRevenue: economics.tvOnlyGeneratedRevenue,
    btsIncrementalValue: economics.btsIncrementalValue,
    totalRevenueWithBts: economics.totalRevenueWithBts,
    incrementalBtsCost: economics.incrementalBtsCost,
    totalCampaignCost: economics.totalCampaignCost,
    proofLayerNetContribution,
    roiTotal,
    btsIncrementalRoi,
    workbookProofLayerRoiDiagnostic,
    tvOnlyRoi,
    workbookNetBusinessDeltaVsTvBaseline,
    breakEvenMediaCost,
    grossLinearMedia: economics.grossLinearMedia,
    grossBvodMedia: economics.grossBvodMedia,
    grossLinearBtsAddOn: economics.grossLinearBtsAddOn,
    grossBvodBtsAddOn: economics.grossBvodBtsAddOn,
    productionTraffickingCost: economics.productionTraffickingCost,
    techMeasurementCost: economics.techMeasurementCost,
    btsClientProofFee: economics.btsClientProofFee,
    btsProofActivationCost: economics.btsProofActivationCost,
    totalBtsCompletePocFee: economics.totalBtsCompletePocFee,
    coreNetFactor: economics.coreNetFactor,
    btsNetFactor: economics.btsNetFactor,
    netLinearMedia: economics.netLinearMedia,
    netBvodMedia: economics.netBvodMedia,
    incrementalBtsMediaCost: economics.incrementalBtsMediaCost,
    netMediaDeltaVsBaseline: economics.netMediaDeltaVsBaseline
  });
  const mappingValidation = validateVerticalScenarioCompleteness({
    vertical: verticalKey,
    scenario: inputs.scenario,
    mediaType: inputs.mediaType,
    inputs: normalizedInputs,
    results: {
      tvOnlyGeneratedRevenue: economics.tvOnlyGeneratedRevenue,
      totalRevenueWithBts: economics.totalRevenueWithBts,
      btsIncrementalValue: economics.btsIncrementalValue,
      incrementalBtsCost: economics.incrementalBtsCost,
      totalCampaignCost: economics.totalCampaignCost,
      proofLayerNetContribution,
      roiTotal,
      btsIncrementalRoi,
      workbookProofLayerRoiDiagnostic,
      tvOnlyRoi,
      breakEvenMediaCost,
      breakEvenGap,
      runtimeFallbacks: economics.runtimeFallbacks
    }
  });
  return {
    ...economics,
    ...steps,
    directRevenue,
    assistedRevenue,
    revenueWithoutProof,
    revenueWithProof: economics.totalRevenueWithBts,
    proofDrivenIncrementalValue,
    proofValueCreated: economics.btsIncrementalValue,
    incrementalRevenue,
    incrementalProfit,
    grossMediaCost: economics.totalGrossMedia,
    netMediaCost: economics.totalNetMediaWithBts,
    btsIncrementalCost: economics.incrementalBtsCost,
    campaignCost,
    effectiveAttentionRate: economics.effectiveAttentionRate,
    roiTotal,
    roiDirect: tvOnlyRoi,
    roiIncremental: btsIncrementalRoi,
    tvOnlyRoi,
    btsIncrementalRoi,
    proofLayerRoi,
    workbookProofLayerRoiDiagnostic,
    tvRoiBenchmark: economics.tvRoiBenchmark,
    btsRoiBenchmark: economics.btsRoiBenchmark,
    proofEfficiency,
    costPerIncrementalConversion,
    conversionUpliftOnInfluencedAudience,
    assistedShareOfProfit,
    assistedShareOfImpact,
    breakEvenMediaCost,
    breakEvenGap,
    valueLostToMedia,
    proofLayerNetContribution,
    workbookNetBusinessDeltaVsTvBaseline,
    economicsWarning,
    decision,
    decisionReasons,
    interpretation: interpretResults({ roiTotal, roiDirect: tvOnlyRoi, assistedShareOfImpact, totalIncrementalConversions: steps.totalIncrementalConversions }),
    debugRows: buildDebugRows(vertical, steps, valuePerConversion, directRevenue, assistedRevenue, incrementalRevenue, directProfit, proofProfit, incrementalProfit, economics, {
      proofLayerNetContribution,
      tvOnlyRoi,
      btsIncrementalRoi,
      roiTotal,
      workbookNetBusinessDeltaVsTvBaseline
    }),
    validationRows,
    mappingValidation,
    mappingValidationRows: mappingValidation.rows,
    runtimeFallbacks: economics.runtimeFallbacks
  };
}
function computeAutomotivePureEngineShadowCandidate(vertical, inputs = {}) {
  const verticalKey = normalizeVerticalKey(vertical);
  if (verticalKey !== "automotive") return null;
  const config = verticalConfig[verticalKey];
  const economics = getEconomics({ ...inputs, vertical: verticalKey });
  const normalizedInputs = {
    ...inputs,
    effectiveAttentionRate: economics.effectiveAttentionRate,
    effectiveConversionMultiplier: economics.effectiveConversionMultiplier,
    linearTvShare: economics.linearTvShare,
    bvodShare: economics.bvodShare
  };
  const steps = getStepResults(config.proofLogic, normalizedInputs);
  const valuePerConversion = getValuePerConversion(config.valueMode, normalizedInputs);
  const directRevenue = steps.directConversions * valuePerConversion;
  const assistedRevenue = steps.assistedConversions * valuePerConversion;
  const incrementalProfit = getProfit(config.valueMode, normalizedInputs, steps.totalIncrementalConversions, directRevenue + assistedRevenue);
  const directProfit = getProfit(config.valueMode, normalizedInputs, steps.directConversions, directRevenue);
  const proofProfit = getProfit(config.valueMode, normalizedInputs, steps.assistedConversions, assistedRevenue);
  const { proofLayerInvestment, proofLayerNetContribution, proofLayerRoi } = getCommercialProofLayerMetrics(economics);
  const roiTotal = safeDivide(incrementalProfit, economics.totalCampaignCost);
  const btsIncrementalRoi = proofLayerRoi;
  const tvOnlyRoi = safeDivide(economics.tvOnlyGeneratedRevenue, economics.netLinearMedia + economics.netBvodMedia);
  const proofEfficiency = safeDivide(economics.btsIncrementalValue, steps.assistedConversions);
  const costPerIncrementalConversion = safeDivide(economics.totalCampaignCost, steps.totalIncrementalConversions);
  const conversionUpliftOnInfluencedAudience = safeDivide(steps.assistedConversions, steps.assistedBaseConversions);
  const assistedShareOfProfit = safeDivide(proofProfit, incrementalProfit);
  const assistedShareOfImpact = safeDivide(steps.assistedConversions, steps.totalIncrementalConversions);
  const breakEvenMediaCost = Math.max(economics.tvOnlyGeneratedRevenue + economics.btsIncrementalValue - economics.tvOnlyCampaignCost, 0);
  const breakEvenGap = breakEvenMediaCost - economics.incrementalBtsCost;
  const workbookNetBusinessDeltaVsTvBaseline = economics.netMediaDeltaVsBaseline + steps.totalIncrementalConversions;
  const decision = getDecisionSummary({
    roiTotal,
    roiDirect: tvOnlyRoi,
    proofLayerRoi: btsIncrementalRoi,
    assistedShareOfImpact,
    totalIncrementalConversions: steps.totalIncrementalConversions,
    proofEnabled: inputs.proofEnabled !== false,
    valueLostToMedia: proofLayerNetContribution,
    incrementalBtsCost: economics.incrementalBtsCost
  });
  const decisionReasons = getDecisionReasons({
    roiTotal,
    roiDirect: tvOnlyRoi,
    proofLayerRoi: btsIncrementalRoi,
    assistedShareOfImpact,
    valueLostToMedia: proofLayerNetContribution,
    proofEnabled: inputs.proofEnabled !== false,
    incrementalBtsCost: economics.incrementalBtsCost
  });
  return {
    ...economics,
    ...steps,
    directRevenue,
    assistedRevenue,
    revenueWithoutProof: economics.tvOnlyGeneratedRevenue,
    revenueWithProof: economics.totalRevenueWithBts,
    proofDrivenIncrementalValue: economics.btsIncrementalValue,
    proofValueCreated: economics.btsIncrementalValue,
    incrementalRevenue: economics.totalRevenueWithBts,
    incrementalProfit,
    directProfit,
    proofProfit,
    grossMediaCost: economics.totalGrossMedia,
    netMediaCost: economics.totalNetMediaWithBts,
    btsIncrementalCost: economics.incrementalBtsCost,
    proofLayerInvestment,
    campaignCost: economics.totalCampaignCost,
    effectiveAttentionRate: economics.effectiveAttentionRate,
    roiTotal,
    roiDirect: tvOnlyRoi,
    roiIncremental: btsIncrementalRoi,
    tvOnlyRoi,
    btsIncrementalRoi,
    tvRoiBenchmark: economics.tvRoiBenchmark,
    btsRoiBenchmark: economics.btsRoiBenchmark,
    proofEfficiency,
    costPerIncrementalConversion,
    conversionUpliftOnInfluencedAudience,
    assistedShareOfProfit,
    assistedShareOfImpact,
    breakEvenMediaCost,
    breakEvenGap,
    valueLostToMedia: proofLayerNetContribution,
    proofLayerNetContribution,
    workbookNetBusinessDeltaVsTvBaseline,
    decision,
    decisionReasons,
    runtimeFallbacks: economics.runtimeFallbacks,
    shadowMode: "pure-engine-candidate"
  };
}
function computeTelecomPureEngineShadowCandidate(vertical, inputs = {}) {
  const verticalKey = normalizeVerticalKey(vertical);
  if (verticalKey !== "telecom") return null;
  const config = verticalConfig[verticalKey];
  const economics = getEconomics({ ...inputs, vertical: verticalKey });
  const normalizedInputs = {
    ...inputs,
    effectiveAttentionRate: economics.effectiveAttentionRate,
    effectiveConversionMultiplier: economics.effectiveConversionMultiplier,
    linearTvShare: economics.linearTvShare,
    bvodShare: economics.bvodShare
  };
  const steps = getStepResults(config.proofLogic, normalizedInputs);
  const valuePerConversion = getValuePerConversion(config.valueMode, normalizedInputs);
  const directRevenue = steps.directConversions * valuePerConversion;
  const assistedRevenue = steps.assistedConversions * valuePerConversion;
  const incrementalProfit = getProfit(config.valueMode, normalizedInputs, steps.totalIncrementalConversions, directRevenue + assistedRevenue);
  const directProfit = getProfit(config.valueMode, normalizedInputs, steps.directConversions, directRevenue);
  const proofProfit = getProfit(config.valueMode, normalizedInputs, steps.assistedConversions, assistedRevenue);
  const workbookIncrementalCost = economics.totalCampaignCost - economics.baseTvBudgetExBts;
  const { proofLayerInvestment, proofLayerNetContribution, proofLayerRoi } = getCommercialProofLayerMetrics(economics);
  const roiTotal = safeDivide(incrementalProfit, economics.totalCampaignCost);
  const btsIncrementalRoi = proofLayerRoi;
  const tvOnlyRoi = getWorkbookScenarioRoiAssumptions(verticalKey, normalizedInputs.scenario)?.tv ?? safeDivide(economics.tvOnlyGeneratedRevenue, economics.netLinearMedia + economics.netBvodMedia);
  const proofEfficiency = safeDivide(economics.btsIncrementalValue, steps.assistedConversions);
  const costPerIncrementalConversion = safeDivide(economics.totalCampaignCost, steps.totalIncrementalConversions);
  const conversionUpliftOnInfluencedAudience = safeDivide(steps.assistedConversions, steps.assistedBaseConversions);
  const assistedShareOfProfit = safeDivide(proofProfit, incrementalProfit);
  const assistedShareOfImpact = safeDivide(steps.assistedConversions, steps.totalIncrementalConversions);
  const breakEvenMediaCost = Math.max(economics.tvOnlyGeneratedRevenue + economics.btsIncrementalValue - economics.tvOnlyCampaignCost, 0);
  const breakEvenGap = breakEvenMediaCost - economics.incrementalBtsCost;
  const workbookNetBusinessDeltaVsTvBaseline = workbookIncrementalCost + incrementalProfit;
  const decision = getDecisionSummary({
    roiTotal,
    roiDirect: tvOnlyRoi,
    proofLayerRoi: btsIncrementalRoi,
    assistedShareOfImpact,
    totalIncrementalConversions: steps.totalIncrementalConversions,
    proofEnabled: inputs.proofEnabled !== false,
    valueLostToMedia: proofLayerNetContribution,
    incrementalBtsCost: economics.incrementalBtsCost
  });
  const decisionReasons = getDecisionReasons({
    roiTotal,
    roiDirect: tvOnlyRoi,
    proofLayerRoi: btsIncrementalRoi,
    assistedShareOfImpact,
    valueLostToMedia: proofLayerNetContribution,
    proofEnabled: inputs.proofEnabled !== false,
    incrementalBtsCost: economics.incrementalBtsCost
  });
  return {
    ...economics,
    ...steps,
    directRevenue,
    assistedRevenue,
    revenueWithoutProof: economics.tvOnlyGeneratedRevenue,
    revenueWithProof: economics.totalRevenueWithBts,
    proofDrivenIncrementalValue: economics.btsIncrementalValue,
    proofValueCreated: economics.btsIncrementalValue,
    incrementalRevenue: economics.totalRevenueWithBts,
    incrementalProfit,
    directProfit,
    proofProfit,
    grossMediaCost: economics.totalGrossMedia,
    netMediaCost: economics.totalNetMediaWithBts,
    btsIncrementalCost: economics.incrementalBtsCost,
    proofLayerInvestment,
    campaignCost: economics.totalCampaignCost,
    effectiveAttentionRate: economics.effectiveAttentionRate,
    roiTotal,
    roiDirect: tvOnlyRoi,
    roiIncremental: btsIncrementalRoi,
    tvOnlyRoi,
    btsIncrementalRoi,
    tvRoiBenchmark: economics.tvRoiBenchmark,
    btsRoiBenchmark: economics.btsRoiBenchmark,
    proofEfficiency,
    costPerIncrementalConversion,
    conversionUpliftOnInfluencedAudience,
    assistedShareOfProfit,
    assistedShareOfImpact,
    breakEvenMediaCost,
    breakEvenGap,
    valueLostToMedia: proofLayerNetContribution,
    proofLayerNetContribution,
    workbookNetBusinessDeltaVsTvBaseline,
    workbookProofLayerRoiDiagnostic: safeDivide(getProfit(config.valueMode, normalizedInputs, steps.directConversions, directRevenue), Math.abs(workbookIncrementalCost)),
    decision,
    decisionReasons,
    runtimeFallbacks: economics.runtimeFallbacks,
    shadowMode: "pure-engine-candidate"
  };
}
function computeBankInsurancePureEngineShadowCandidate(vertical, inputs = {}) {
  const verticalKey = normalizeVerticalKey(vertical);
  if (verticalKey !== "bankInsurance") return null;
  const config = verticalConfig[verticalKey];
  const economics = getEconomics({ ...inputs, vertical: verticalKey });
  const normalizedInputs = {
    ...inputs,
    effectiveAttentionRate: economics.effectiveAttentionRate,
    effectiveConversionMultiplier: economics.effectiveConversionMultiplier,
    linearTvShare: economics.linearTvShare,
    bvodShare: economics.bvodShare
  };
  const steps = getStepResults(config.proofLogic, normalizedInputs);
  const valuePerConversion = getValuePerConversion(config.valueMode, normalizedInputs);
  const directRevenue = steps.directConversions * valuePerConversion;
  const assistedRevenue = steps.assistedConversions * valuePerConversion;
  const incrementalProfit = getProfit(config.valueMode, normalizedInputs, steps.totalIncrementalConversions, directRevenue + assistedRevenue);
  const directProfit = getProfit(config.valueMode, normalizedInputs, steps.directConversions, directRevenue);
  const proofProfit = getProfit(config.valueMode, normalizedInputs, steps.assistedConversions, assistedRevenue);
  const workbookIncrementalCost = economics.totalCampaignCost - economics.baseTvBudgetExBts;
  const { proofLayerInvestment, proofLayerNetContribution, proofLayerRoi } = getCommercialProofLayerMetrics(economics);
  const roiTotal = safeDivide(incrementalProfit, economics.totalCampaignCost);
  const btsIncrementalRoi = proofLayerRoi;
  const tvOnlyRoi = getWorkbookScenarioRoiAssumptions(verticalKey, normalizedInputs.scenario)?.tv ?? safeDivide(economics.tvOnlyGeneratedRevenue, economics.netLinearMedia + economics.netBvodMedia);
  const proofEfficiency = safeDivide(economics.btsIncrementalValue, steps.assistedConversions);
  const costPerIncrementalConversion = safeDivide(economics.totalCampaignCost, steps.totalIncrementalConversions);
  const conversionUpliftOnInfluencedAudience = safeDivide(steps.assistedConversions, steps.assistedBaseConversions);
  const assistedShareOfProfit = safeDivide(proofProfit, incrementalProfit);
  const assistedShareOfImpact = safeDivide(steps.assistedConversions, steps.totalIncrementalConversions);
  const breakEvenMediaCost = Math.max(economics.tvOnlyGeneratedRevenue + economics.btsIncrementalValue - economics.tvOnlyCampaignCost, 0);
  const breakEvenGap = breakEvenMediaCost - economics.incrementalBtsCost;
  const workbookNetBusinessDeltaVsTvBaseline = workbookIncrementalCost + incrementalProfit;
  const decision = getDecisionSummary({
    roiTotal,
    roiDirect: tvOnlyRoi,
    proofLayerRoi: btsIncrementalRoi,
    assistedShareOfImpact,
    totalIncrementalConversions: steps.totalIncrementalConversions,
    proofEnabled: inputs.proofEnabled !== false,
    valueLostToMedia: proofLayerNetContribution,
    incrementalBtsCost: economics.incrementalBtsCost
  });
  const decisionReasons = getDecisionReasons({
    roiTotal,
    roiDirect: tvOnlyRoi,
    proofLayerRoi: btsIncrementalRoi,
    assistedShareOfImpact,
    valueLostToMedia: proofLayerNetContribution,
    proofEnabled: inputs.proofEnabled !== false,
    incrementalBtsCost: economics.incrementalBtsCost
  });
  return {
    ...economics,
    ...steps,
    directRevenue,
    assistedRevenue,
    revenueWithoutProof: economics.tvOnlyGeneratedRevenue,
    revenueWithProof: economics.totalRevenueWithBts,
    proofDrivenIncrementalValue: economics.btsIncrementalValue,
    proofValueCreated: economics.btsIncrementalValue,
    incrementalRevenue: economics.totalRevenueWithBts,
    incrementalProfit,
    directProfit,
    proofProfit,
    grossMediaCost: economics.totalGrossMedia,
    netMediaCost: economics.totalNetMediaWithBts,
    btsIncrementalCost: economics.incrementalBtsCost,
    proofLayerInvestment,
    campaignCost: economics.totalCampaignCost,
    effectiveAttentionRate: economics.effectiveAttentionRate,
    roiTotal,
    roiDirect: tvOnlyRoi,
    roiIncremental: btsIncrementalRoi,
    tvOnlyRoi,
    btsIncrementalRoi,
    tvRoiBenchmark: economics.tvRoiBenchmark,
    btsRoiBenchmark: economics.btsRoiBenchmark,
    proofEfficiency,
    costPerIncrementalConversion,
    conversionUpliftOnInfluencedAudience,
    assistedShareOfProfit,
    assistedShareOfImpact,
    breakEvenMediaCost,
    breakEvenGap,
    valueLostToMedia: proofLayerNetContribution,
    proofLayerNetContribution,
    workbookNetBusinessDeltaVsTvBaseline,
    workbookProofLayerRoiDiagnostic: safeDivide(incrementalProfit, Math.abs(workbookIncrementalCost)),
    decision,
    decisionReasons,
    runtimeFallbacks: economics.runtimeFallbacks,
    shadowMode: "pure-engine-candidate"
  };
}
function computeTourismPureEngineShadowCandidate(vertical, inputs = {}) {
  const verticalKey = normalizeVerticalKey(vertical);
  if (verticalKey !== "tourism") return null;
  const config = verticalConfig[verticalKey];
  const economics = getEconomics({ ...inputs, vertical: verticalKey });
  const normalizedInputs = {
    ...inputs,
    effectiveAttentionRate: economics.effectiveAttentionRate,
    effectiveConversionMultiplier: economics.effectiveConversionMultiplier,
    linearTvShare: economics.linearTvShare,
    bvodShare: economics.bvodShare
  };
  const steps = getStepResults(config.proofLogic, normalizedInputs);
  const valuePerConversion = getValuePerConversion(config.valueMode, normalizedInputs);
  const tourismCapacityAdjustedBookings = Math.min(
    steps.totalIncrementalConversions,
    normalizedInputs.maxBookableDemandInWindow ?? steps.totalIncrementalConversions
  );
  const directRevenue = (steps.addToCarts ?? 0) * (normalizedInputs.averageBookingValue ?? 0);
  const assistedRevenue = tourismCapacityAdjustedBookings * (normalizedInputs.averageBookingValue ?? 0) * (1 + (normalizedInputs.yieldPriceUplift ?? 0));
  const incrementalProfit = assistedRevenue * (normalizedInputs.grossMargin ?? 0);
  const directProfit = directRevenue;
  const proofProfit = assistedRevenue * (normalizedInputs.grossMargin ?? 0);
  const { proofLayerInvestment, proofLayerNetContribution, proofLayerRoi } = getCommercialProofLayerMetrics(economics);
  const roiTotal = safeDivide(directProfit + proofProfit, economics.totalCampaignCost);
  const btsIncrementalRoi = proofLayerRoi;
  const tvOnlyRoi = safeDivide(economics.tvOnlyGeneratedRevenue, economics.netLinearMedia + economics.netBvodMedia);
  const proofEfficiency = safeDivide(economics.btsIncrementalValue, steps.assistedConversions);
  const costPerIncrementalConversion = safeDivide(economics.totalCampaignCost, steps.totalIncrementalConversions);
  const conversionUpliftOnInfluencedAudience = safeDivide(steps.assistedConversions, steps.assistedBaseConversions);
  const assistedShareOfProfit = safeDivide(proofProfit, incrementalProfit);
  const assistedShareOfImpact = safeDivide(steps.assistedConversions, steps.totalIncrementalConversions);
  const breakEvenMediaCost = Math.max(economics.tvOnlyGeneratedRevenue + economics.btsIncrementalValue - economics.tvOnlyCampaignCost, 0);
  const breakEvenGap = breakEvenMediaCost - economics.incrementalBtsCost;
  const decision = getDecisionSummary({
    roiTotal,
    roiDirect: tvOnlyRoi,
    proofLayerRoi: btsIncrementalRoi,
    assistedShareOfImpact,
    totalIncrementalConversions: steps.totalIncrementalConversions,
    proofEnabled: inputs.proofEnabled !== false,
    valueLostToMedia: proofLayerNetContribution,
    incrementalBtsCost: economics.incrementalBtsCost
  });
  const decisionReasons = getDecisionReasons({
    roiTotal,
    roiDirect: tvOnlyRoi,
    proofLayerRoi: btsIncrementalRoi,
    assistedShareOfImpact,
    valueLostToMedia: proofLayerNetContribution,
    proofEnabled: inputs.proofEnabled !== false,
    incrementalBtsCost: economics.incrementalBtsCost
  });
  return {
    ...economics,
    ...steps,
    directRevenue,
    assistedRevenue,
    revenueWithoutProof: economics.tvOnlyGeneratedRevenue,
    revenueWithProof: economics.totalRevenueWithBts,
    proofDrivenIncrementalValue: economics.btsIncrementalValue,
    proofValueCreated: economics.btsIncrementalValue,
    incrementalRevenue: economics.totalRevenueWithBts,
    incrementalProfit,
    directProfit,
    proofProfit,
    grossMediaCost: economics.totalGrossMedia,
    netMediaCost: economics.totalNetMediaWithBts,
    btsIncrementalCost: economics.incrementalBtsCost,
    proofLayerInvestment,
    campaignCost: economics.totalCampaignCost,
    effectiveAttentionRate: economics.effectiveAttentionRate,
    roiTotal,
    roiDirect: tvOnlyRoi,
    roiIncremental: btsIncrementalRoi,
    tvOnlyRoi,
    btsIncrementalRoi,
    tvRoiBenchmark: economics.tvRoiBenchmark,
    btsRoiBenchmark: economics.btsRoiBenchmark,
    proofEfficiency,
    costPerIncrementalConversion,
    conversionUpliftOnInfluencedAudience,
    assistedShareOfProfit,
    assistedShareOfImpact,
    breakEvenMediaCost,
    breakEvenGap,
    valueLostToMedia: proofLayerNetContribution,
    proofLayerNetContribution,
    workbookNetBusinessDeltaVsTvBaseline: economics.totalRevenueWithBts - economics.tvOnlyGeneratedRevenue,
    decision,
    decisionReasons,
    runtimeFallbacks: economics.runtimeFallbacks,
    shadowMode: "pure-engine-candidate"
  };
}
function computeFmcgPureEngineShadowCandidate(vertical, inputs = {}) {
  const verticalKey = normalizeVerticalKey(vertical);
  if (verticalKey !== "fmcg") return null;
  const config = verticalConfig[verticalKey];
  const economics = getEconomics({ ...inputs, vertical: verticalKey });
  const normalizedInputs = {
    ...inputs,
    effectiveAttentionRate: economics.effectiveAttentionRate,
    effectiveConversionMultiplier: economics.effectiveConversionMultiplier,
    linearTvShare: economics.linearTvShare,
    bvodShare: economics.bvodShare
  };
  const steps = getStepResults(config.proofLogic, normalizedInputs);
  const valuePerConversion = getValuePerConversion(config.valueMode, normalizedInputs);
  const directRevenue = steps.directConversions * valuePerConversion;
  const assistedRevenue = steps.assistedConversions * valuePerConversion;
  const incrementalRevenue = steps.totalIncrementalConversions * valuePerConversion;
  const incrementalGrossProfit = steps.assistedConversions * valuePerConversion * (normalizedInputs.margin ?? 0);
  const directProfit = steps.directConversions * valuePerConversion * (normalizedInputs.margin ?? 0);
  const proofProfit = steps.assistedConversions * valuePerConversion * (normalizedInputs.margin ?? 0);
  const { proofLayerInvestment, proofLayerNetContribution, proofLayerRoi } = getCommercialProofLayerMetrics(economics);
  const roiTotal = safeDivide(incrementalGrossProfit, economics.totalCampaignCost);
  const btsIncrementalRoi = proofLayerRoi;
  const tvOnlyRoi = getWorkbookScenarioRoiAssumptions(verticalKey, normalizedInputs.scenario)?.tv ?? 0;
  const proofEfficiency = safeDivide(economics.btsIncrementalValue, steps.assistedConversions);
  const costPerIncrementalConversion = safeDivide(economics.totalCampaignCost, steps.totalIncrementalConversions);
  const conversionUpliftOnInfluencedAudience = safeDivide(steps.assistedConversions, steps.assistedBaseConversions);
  const assistedShareOfProfit = safeDivide(proofProfit, incrementalGrossProfit);
  const assistedShareOfImpact = safeDivide(steps.assistedConversions, steps.totalIncrementalConversions);
  const breakEvenMediaCost = Math.max(economics.tvOnlyGeneratedRevenue + economics.btsIncrementalValue - economics.tvOnlyCampaignCost, 0);
  const breakEvenGap = breakEvenMediaCost - economics.incrementalBtsCost;
  const decision = getDecisionSummary({
    roiTotal,
    roiDirect: tvOnlyRoi,
    proofLayerRoi: btsIncrementalRoi,
    assistedShareOfImpact,
    totalIncrementalConversions: steps.totalIncrementalConversions,
    proofEnabled: inputs.proofEnabled !== false,
    valueLostToMedia: proofLayerNetContribution,
    incrementalBtsCost: economics.incrementalBtsCost
  });
  const decisionReasons = getDecisionReasons({
    roiTotal,
    roiDirect: tvOnlyRoi,
    proofLayerRoi: btsIncrementalRoi,
    assistedShareOfImpact,
    valueLostToMedia: proofLayerNetContribution,
    proofEnabled: inputs.proofEnabled !== false,
    incrementalBtsCost: economics.incrementalBtsCost
  });
  return {
    ...economics,
    ...steps,
    directRevenue,
    assistedRevenue,
    revenueWithoutProof: economics.tvOnlyGeneratedRevenue,
    revenueWithProof: economics.totalRevenueWithBts,
    proofDrivenIncrementalValue: economics.btsIncrementalValue,
    proofValueCreated: economics.btsIncrementalValue,
    incrementalRevenue: economics.totalRevenueWithBts,
    incrementalProfit: incrementalGrossProfit,
    directProfit,
    proofProfit,
    grossMediaCost: economics.totalGrossMedia,
    netMediaCost: economics.totalNetMediaWithBts,
    btsIncrementalCost: economics.incrementalBtsCost,
    proofLayerInvestment,
    campaignCost: economics.totalCampaignCost,
    effectiveAttentionRate: economics.effectiveAttentionRate,
    roiTotal,
    roiDirect: tvOnlyRoi,
    roiIncremental: btsIncrementalRoi,
    tvOnlyRoi,
    btsIncrementalRoi,
    tvRoiBenchmark: economics.tvRoiBenchmark,
    btsRoiBenchmark: economics.btsRoiBenchmark,
    proofEfficiency,
    costPerIncrementalConversion,
    conversionUpliftOnInfluencedAudience,
    assistedShareOfProfit,
    assistedShareOfImpact,
    breakEvenMediaCost,
    breakEvenGap,
    valueLostToMedia: proofLayerNetContribution,
    proofLayerNetContribution,
    workbookNetBusinessDeltaVsTvBaseline: economics.incrementalBtsCost * -1 + incrementalGrossProfit,
    decision,
    decisionReasons,
    runtimeFallbacks: economics.runtimeFallbacks,
    shadowMode: "pure-engine-candidate"
  };
}
function computeRetailAppliancesPureEngineShadowCandidate(vertical, inputs = {}) {
  const verticalKey = normalizeVerticalKey(vertical);
  if (verticalKey !== "retailAppliances") return null;
  const config = verticalConfig[verticalKey];
  const economics = getEconomics({ ...inputs, vertical: verticalKey });
  const normalizedInputs = {
    ...inputs,
    effectiveAttentionRate: economics.effectiveAttentionRate,
    effectiveConversionMultiplier: economics.effectiveConversionMultiplier,
    linearTvShare: economics.linearTvShare,
    bvodShare: economics.bvodShare
  };
  const steps = getStepResults(config.proofLogic, normalizedInputs);
  const valuePerConversion = getValuePerConversion(config.valueMode, normalizedInputs);
  const directRevenue = steps.directConversions * valuePerConversion;
  const assistedRevenue = steps.assistedConversions * valuePerConversion;
  const incrementalProfit = getProfit(config.valueMode, normalizedInputs, steps.totalIncrementalConversions, directRevenue + assistedRevenue);
  const directProfit = getProfit(config.valueMode, normalizedInputs, steps.directConversions, directRevenue);
  const proofProfit = getProfit(config.valueMode, normalizedInputs, steps.assistedConversions, assistedRevenue);
  const { proofLayerInvestment, proofLayerNetContribution, proofLayerRoi } = getCommercialProofLayerMetrics(economics);
  const roiTotal = safeDivide(incrementalProfit, economics.totalCampaignCost);
  const btsIncrementalRoi = proofLayerRoi;
  const tvOnlyRoi = getWorkbookScenarioRoiAssumptions(verticalKey, normalizedInputs.scenario)?.tv ?? safeDivide(economics.tvOnlyGeneratedRevenue, economics.netLinearMedia + economics.netBvodMedia);
  const proofEfficiency = safeDivide(economics.btsIncrementalValue, steps.assistedConversions);
  const costPerIncrementalConversion = safeDivide(economics.totalCampaignCost, steps.totalIncrementalConversions);
  const conversionUpliftOnInfluencedAudience = safeDivide(steps.assistedConversions, steps.assistedBaseConversions);
  const assistedShareOfProfit = safeDivide(proofProfit, incrementalProfit);
  const assistedShareOfImpact = safeDivide(steps.assistedConversions, steps.totalIncrementalConversions);
  const breakEvenMediaCost = Math.max(economics.tvOnlyGeneratedRevenue + economics.btsIncrementalValue - economics.tvOnlyCampaignCost, 0);
  const breakEvenGap = breakEvenMediaCost - economics.incrementalBtsCost;
  const decision = getDecisionSummary({
    roiTotal,
    roiDirect: tvOnlyRoi,
    proofLayerRoi: btsIncrementalRoi,
    assistedShareOfImpact,
    totalIncrementalConversions: steps.totalIncrementalConversions,
    proofEnabled: inputs.proofEnabled !== false,
    valueLostToMedia: proofLayerNetContribution,
    incrementalBtsCost: economics.incrementalBtsCost
  });
  const decisionReasons = getDecisionReasons({
    roiTotal,
    roiDirect: tvOnlyRoi,
    proofLayerRoi: btsIncrementalRoi,
    assistedShareOfImpact,
    valueLostToMedia: proofLayerNetContribution,
    proofEnabled: inputs.proofEnabled !== false,
    incrementalBtsCost: economics.incrementalBtsCost
  });
  return {
    ...economics,
    ...steps,
    directRevenue,
    assistedRevenue,
    revenueWithoutProof: economics.tvOnlyGeneratedRevenue,
    revenueWithProof: economics.totalRevenueWithBts,
    proofDrivenIncrementalValue: economics.btsIncrementalValue,
    proofValueCreated: economics.btsIncrementalValue,
    incrementalRevenue: economics.totalRevenueWithBts,
    incrementalProfit,
    directProfit,
    proofProfit,
    grossMediaCost: economics.totalGrossMedia,
    netMediaCost: economics.totalNetMediaWithBts,
    btsIncrementalCost: economics.incrementalBtsCost,
    proofLayerInvestment,
    campaignCost: economics.totalCampaignCost,
    effectiveAttentionRate: economics.effectiveAttentionRate,
    roiTotal,
    roiDirect: tvOnlyRoi,
    roiIncremental: btsIncrementalRoi,
    tvOnlyRoi,
    btsIncrementalRoi,
    tvRoiBenchmark: economics.tvRoiBenchmark,
    btsRoiBenchmark: economics.btsRoiBenchmark,
    proofEfficiency,
    costPerIncrementalConversion,
    conversionUpliftOnInfluencedAudience,
    assistedShareOfProfit,
    assistedShareOfImpact,
    breakEvenMediaCost,
    breakEvenGap,
    valueLostToMedia: proofLayerNetContribution,
    proofLayerNetContribution,
    workbookNetBusinessDeltaVsTvBaseline: economics.totalRevenueWithBts - economics.tvOnlyGeneratedRevenue,
    decision,
    decisionReasons,
    runtimeFallbacks: economics.runtimeFallbacks,
    shadowMode: "pure-engine-candidate"
  };
}
function computeRetailGeneralPureEngineShadowCandidate(vertical, inputs = {}) {
  const verticalKey = normalizeVerticalKey(vertical);
  if (verticalKey !== "retailGeneral") return null;
  const config = verticalConfig[verticalKey];
  const economics = getEconomics({ ...inputs, vertical: verticalKey });
  const normalizedInputs = {
    ...inputs,
    effectiveAttentionRate: economics.effectiveAttentionRate,
    effectiveConversionMultiplier: economics.effectiveConversionMultiplier,
    linearTvShare: economics.linearTvShare,
    bvodShare: economics.bvodShare
  };
  const steps = getStepResults(config.proofLogic, normalizedInputs);
  const valuePerConversion = getValuePerConversion(config.valueMode, normalizedInputs);
  const directRevenue = steps.directConversions * valuePerConversion;
  const assistedRevenue = steps.assistedConversions * valuePerConversion;
  const incrementalProfit = getProfit(config.valueMode, normalizedInputs, steps.totalIncrementalConversions, directRevenue + assistedRevenue);
  const directProfit = getProfit(config.valueMode, normalizedInputs, steps.directConversions, directRevenue);
  const proofProfit = getProfit(config.valueMode, normalizedInputs, steps.assistedConversions, assistedRevenue);
  const { proofLayerInvestment, proofLayerNetContribution, proofLayerRoi } = getCommercialProofLayerMetrics(economics);
  const roiTotal = safeDivide(incrementalProfit, economics.totalCampaignCost);
  const btsIncrementalRoi = proofLayerRoi;
  const tvOnlyRoi = getWorkbookScenarioRoiAssumptions(verticalKey, normalizedInputs.scenario)?.tv ?? safeDivide(economics.tvOnlyGeneratedRevenue, economics.netLinearMedia + economics.netBvodMedia);
  const proofEfficiency = safeDivide(economics.btsIncrementalValue, steps.assistedConversions);
  const costPerIncrementalConversion = safeDivide(economics.totalCampaignCost, steps.totalIncrementalConversions);
  const conversionUpliftOnInfluencedAudience = safeDivide(steps.assistedConversions, steps.assistedBaseConversions);
  const assistedShareOfProfit = safeDivide(proofProfit, incrementalProfit);
  const assistedShareOfImpact = safeDivide(steps.assistedConversions, steps.totalIncrementalConversions);
  const breakEvenMediaCost = Math.max(economics.tvOnlyGeneratedRevenue + economics.btsIncrementalValue - economics.tvOnlyCampaignCost, 0);
  const breakEvenGap = breakEvenMediaCost - economics.incrementalBtsCost;
  const decision = getDecisionSummary({
    roiTotal,
    roiDirect: tvOnlyRoi,
    proofLayerRoi: btsIncrementalRoi,
    assistedShareOfImpact,
    totalIncrementalConversions: steps.totalIncrementalConversions,
    proofEnabled: inputs.proofEnabled !== false,
    valueLostToMedia: proofLayerNetContribution,
    incrementalBtsCost: economics.incrementalBtsCost
  });
  const decisionReasons = getDecisionReasons({
    roiTotal,
    roiDirect: tvOnlyRoi,
    proofLayerRoi: btsIncrementalRoi,
    assistedShareOfImpact,
    valueLostToMedia: proofLayerNetContribution,
    proofEnabled: inputs.proofEnabled !== false,
    incrementalBtsCost: economics.incrementalBtsCost
  });
  return {
    ...economics,
    ...steps,
    directRevenue,
    assistedRevenue,
    revenueWithoutProof: economics.tvOnlyGeneratedRevenue,
    revenueWithProof: economics.totalRevenueWithBts,
    proofDrivenIncrementalValue: economics.btsIncrementalValue,
    proofValueCreated: economics.btsIncrementalValue,
    incrementalRevenue: economics.totalRevenueWithBts,
    incrementalProfit,
    directProfit,
    proofProfit,
    grossMediaCost: economics.totalGrossMedia,
    netMediaCost: economics.totalNetMediaWithBts,
    btsIncrementalCost: economics.incrementalBtsCost,
    proofLayerInvestment,
    campaignCost: economics.totalCampaignCost,
    effectiveAttentionRate: economics.effectiveAttentionRate,
    roiTotal,
    roiDirect: tvOnlyRoi,
    roiIncremental: btsIncrementalRoi,
    tvOnlyRoi,
    btsIncrementalRoi,
    tvRoiBenchmark: economics.tvRoiBenchmark,
    btsRoiBenchmark: economics.btsRoiBenchmark,
    proofEfficiency,
    costPerIncrementalConversion,
    conversionUpliftOnInfluencedAudience,
    assistedShareOfProfit,
    assistedShareOfImpact,
    breakEvenMediaCost,
    breakEvenGap,
    valueLostToMedia: proofLayerNetContribution,
    proofLayerNetContribution,
    workbookNetBusinessDeltaVsTvBaseline: economics.totalRevenueWithBts - economics.tvOnlyGeneratedRevenue,
    decision,
    decisionReasons,
    runtimeFallbacks: economics.runtimeFallbacks,
    shadowMode: "pure-engine-candidate"
  };
}
function getStepResults(proofLogic, inputs) {
  if (proofLogic === "fmcg") {
    const workbookDirectAttentionFactor = inputs.scenario === "Upside" ? 1 : inputs.effectiveAttentionRate;
    const attentiveAudience = inputs.reach * inputs.effectiveAttentionRate;
    const qrScans = attentiveAudience;
    const qualifiedVisits = qrScans * inputs.qualifiedVisitRate;
    const addToCarts = qualifiedVisits * inputs.addToCartRate;
    const directConversions = addToCarts * inputs.purchaseRate * workbookDirectAttentionFactor * inputs.effectiveConversionMultiplier;
    const baseBuyingOccasions = inputs.reach * inputs.householdPenetration * inputs.purchaseFrequency * inputs.observationWindow * workbookDirectAttentionFactor;
    const influencedAudience = baseBuyingOccasions * inputs.influencedBuyerShare;
    const assistedConversions = influencedAudience * inputs.assistedUplift * inputs.effectiveConversionMultiplier * (inputs.proofEnabled === false ? 0 : 1);
    return {
      attentiveAudience,
      qrScans,
      qualifiedVisits,
      addToCarts,
      directConversions,
      assistedAudience: influencedAudience,
      assistedBaseConversions: baseBuyingOccasions,
      assistedConversions,
      totalIncrementalConversions: directConversions + assistedConversions
    };
  }
  if (proofLogic === "telecom") {
    const attentiveAudience = inputs.reach * inputs.effectiveAttentionRate;
    const qrScans = inputs.reach * inputs.scanRate * inputs.effectiveAttentionRate;
    const qualifiedVisits = qrScans * inputs.qualifiedVisitRate;
    const planSelections = qualifiedVisits * inputs.planSelectionRate;
    const directConversions = planSelections * inputs.subscriptionRate;
    const assistedAudience = inputs.reach * inputs.marketableBase * inputs.observationWindow;
    const assistedBaseConversions = assistedAudience;
    const assistedConversions = assistedAudience * inputs.assistedUplift * (inputs.proofEnabled === false ? 0 : 1);
    return {
      attentiveAudience,
      qrScans,
      qualifiedVisits,
      addToCarts: planSelections,
      directConversions,
      assistedAudience,
      assistedBaseConversions,
      assistedConversions,
      totalIncrementalConversions: directConversions + assistedConversions
    };
  }
  if (proofLogic === "automotive") {
    const attentiveAudience = inputs.reach * inputs.effectiveAttentionRate;
    const qrScans = attentiveAudience * inputs.scanRate;
    const qualifiedVisits = qrScans * inputs.qualifiedVisitRate;
    const directLeads = qualifiedVisits * inputs.leadRate;
    const directBookings = directLeads * inputs.bookingRate;
    const directConversions = directBookings * inputs.closeRate * inputs.effectiveConversionMultiplier;
    const assistedAudience = inputs.reach * inputs.inMarketShoppers * inputs.observationWindow;
    const assistedBaseConversions = assistedAudience * inputs.assistedUplift;
    const assistedConversions = assistedBaseConversions * inputs.closeRate * inputs.effectiveConversionMultiplier * (inputs.proofEnabled === false ? 0 : 1);
    return {
      attentiveAudience,
      qrScans,
      qualifiedVisits,
      addToCarts: directLeads,
      leadForms: directLeads,
      bookings: directBookings,
      directConversions,
      assistedAudience,
      assistedBaseConversions,
      assistedConversions,
      totalIncrementalConversions: directConversions + assistedConversions
    };
  }
  if (proofLogic === "tourism") {
    const attentiveAudience = inputs.reach * inputs.effectiveAttentionRate;
    const qrScans = inputs.reach * inputs.qrScanRate;
    const qualifiedVisits = qrScans * inputs.qualifiedVisitRate * inputs.returnVisitsMultiplier;
    const addToCarts = qualifiedVisits * inputs.addToCartRate;
    const directConversions = addToCarts * inputs.purchaseRate * (1 - (inputs.cancellationRate ?? 0));
    const assistedBaseConversions = inputs.reach * inputs.effectiveAttentionRate * inputs.baseCategoryBuyerShare * ((inputs.bookingConsiderationWindowDays ?? 0) / 30);
    const assistedAudience = assistedBaseConversions * inputs.influencedBuyerShare;
    const assistedConversions = assistedBaseConversions * inputs.retailUplift * inputs.influencedBuyerShare * (inputs.proofEnabled === false ? 0 : 1);
    return {
      attentiveAudience,
      qrScans,
      qualifiedVisits,
      addToCarts,
      directConversions,
      assistedAudience,
      assistedBaseConversions,
      assistedConversions,
      totalIncrementalConversions: directConversions + assistedConversions
    };
  }
  if (proofLogic === "bank") {
    const attentiveAudience = inputs.reach * inputs.effectiveAttentionRate;
    const qrScans = inputs.reach * inputs.scanRate * inputs.effectiveAttentionRate;
    const qualifiedVisits = qrScans * inputs.qualifiedVisitRate;
    const quotes = qualifiedVisits * inputs.quoteRate;
    const applications = quotes * inputs.applicationRate;
    const directConversions = applications * inputs.policyActivationRate;
    const assistedAudience = inputs.reach * inputs.eligibleProspectShare * inputs.observationWindow;
    const assistedBaseConversions = assistedAudience;
    const assistedConversions = assistedAudience * inputs.assistedConversionUplift * (inputs.proofEnabled === false ? 0 : 1);
    const totalIncrementalConversions = inputs.scenario === "Upside" ? directConversions + assistedConversions : applications + assistedConversions;
    return {
      attentiveAudience,
      qrScans,
      qualifiedVisits,
      addToCarts: quotes,
      leadForms: applications,
      directConversions,
      assistedAudience,
      assistedBaseConversions,
      assistedConversions,
      totalIncrementalConversions
    };
  }
  if (proofLogic === "retailGeneral") {
    const attentiveAudience = inputs.reach * inputs.effectiveAttentionRate;
    const qrScans = inputs.reach * inputs.effectiveAttentionRate * inputs.qrScanRate;
    const qualifiedVisits = qrScans * inputs.qualifiedVisitRate;
    const addToCarts = qualifiedVisits * inputs.addToCartRate;
    const directConversions = addToCarts * inputs.purchaseRate;
    const baseBuyingOccasions = inputs.reach * inputs.baseCategoryBuyerShare * inputs.influencedBuyerShare * inputs.repeatFactor;
    const influencedAudience = inputs.reach * inputs.effectiveAttentionRate * inputs.baseCategoryBuyerShare * inputs.influencedBuyerShare;
    const assistedUplift = Math.min(inputs.assistedUplift, inputs.assistedUpliftValidationScenario ?? inputs.assistedUplift);
    const assistedIncrementalPurchases = baseBuyingOccasions * assistedUplift * inputs.repeatFactor * (inputs.proofEnabled === false ? 0 : 1);
    const assistedConversions = assistedIncrementalPurchases * inputs.influencedBuyerShare;
    return {
      attentiveAudience,
      qrScans,
      qualifiedVisits,
      addToCarts,
      directConversions,
      assistedAudience: influencedAudience,
      assistedBaseConversions: baseBuyingOccasions,
      assistedConversions,
      totalIncrementalConversions: directConversions + assistedConversions
    };
  }
  if (proofLogic === "retailAppliances") {
    const attentiveAudience = inputs.reach * inputs.effectiveAttentionRate;
    const qrScans = inputs.reach * inputs.effectiveAttentionRate * inputs.qrScanRate;
    const qualifiedVisits = qrScans * inputs.qualifiedVisitRate;
    const addToCarts = qualifiedVisits * inputs.addToCartRate;
    const directConversions = addToCarts * inputs.purchaseRate;
    const baseBuyingOccasions = inputs.reach * inputs.effectiveAttentionRate * inputs.baseCategoryBuyerShare;
    const influencedAudience = baseBuyingOccasions * inputs.influencedBuyerShare;
    const assistedIncrementalPurchases = baseBuyingOccasions * inputs.assistedUplift * inputs.influencedBuyerShare;
    const assistedConversions = (inputs.scenario === "Upside" ? assistedIncrementalPurchases * inputs.influencedBuyerShare : assistedIncrementalPurchases) * (inputs.proofEnabled === false ? 0 : 1);
    return {
      attentiveAudience,
      qrScans,
      qualifiedVisits,
      addToCarts,
      directConversions,
      assistedAudience: influencedAudience,
      assistedBaseConversions: baseBuyingOccasions,
      assistedConversions,
      totalIncrementalConversions: directConversions + assistedConversions
    };
  }
  return {
    attentiveAudience: 0,
    qrScans: 0,
    qualifiedVisits: 0,
    addToCarts: 0,
    directConversions: 0,
    assistedAudience: 0,
    assistedBaseConversions: 0,
    assistedConversions: 0,
    totalIncrementalConversions: 0
  };
}
function getValuePerConversion(valueMode, inputs) {
  if (valueMode === "arpuLifetimeMargin") {
    return (inputs.arpu ?? 0) * (inputs.lifetime ?? 0);
  }
  if (valueMode === "bankEconomics") {
    return inputs.customerLifetimeValue ?? inputs.profitPerSale ?? 0;
  }
  if (valueMode === "profitOnly") {
    return inputs.profitPerSale ?? 0;
  }
  if (valueMode === "tourismEconomics") {
    return inputs.averageBookingValue ?? 0;
  }
  return inputs.basket ?? 0;
}
function getProfit(valueMode, inputs, conversions, revenue) {
  if (valueMode === "bankEconomics") {
    return conversions * ((inputs.customerLifetimeValue ?? 0) * (inputs.policyRenewalRate ?? 0));
  }
  if (valueMode === "profitOnly") {
    return conversions * (inputs.profitPerSale ?? 0);
  }
  if (valueMode === "tourismEconomics") {
    return revenue * (inputs.grossMargin ?? 0);
  }
  return revenue * (inputs.margin ?? 0);
}
function buildDebugRows(vertical, steps, valuePerConversion, directRevenue, assistedRevenue, incrementalRevenue, directProfit, proofProfit, incrementalProfit, economics, metrics) {
  return [
    ["Attentive audience", steps.attentiveAudience],
    ["QR scans", steps.qrScans],
    ["Qualified visits", steps.qualifiedVisits],
    ["Funnel step", steps.addToCarts],
    ["Direct conversions", steps.directConversions],
    ["Assisted audience", steps.assistedAudience],
    ["Assisted base conversions", steps.assistedBaseConversions],
    ["Assisted conversions", steps.assistedConversions],
    ["Total incremental conversions", steps.totalIncrementalConversions],
    ["Value per conversion", valuePerConversion],
    ["Direct path revenue", directRevenue],
    ["Assisted path revenue", assistedRevenue],
    ["Incremental revenue", incrementalRevenue],
    ["Direct path profit", directProfit],
    ["Assisted path profit", proofProfit],
    ["Incremental profit", incrementalProfit],
    ["Media cost multiplier", economics.mediaCostMultiplier],
    ["Linear TV share", economics.linearTvShare],
    ["BVoD share", economics.bvodShare],
    ["Effective attention rate", economics.effectiveAttentionRate],
    ["Effective conversion multiplier", economics.effectiveConversionMultiplier],
    ["Base TV budget excl. BTS", economics.baseTvBudgetExBts],
    ["Gross Linear Media", economics.grossLinearMedia],
    ["Gross BVoD Media", economics.grossBvodMedia],
    ["Gross Linear BTS Add-on", economics.grossLinearBtsAddOn],
    ["Gross BVoD BTS Add-on", economics.grossBvodBtsAddOn],
    ["Core net factor", economics.coreNetFactor],
    ["BTS net factor", economics.btsNetFactor],
    ["Net Linear TV media", economics.netLinearMedia],
    ["Net BVoD TV media", economics.netBvodMedia],
    ["Net Linear BTS add-on", economics.netLinearBtsAddOn],
    ["Net BVoD BTS add-on", economics.netBvodBtsAddOn],
    ["TV-only campaign cost", economics.tvOnlyCampaignCost],
    ["Incremental BTS cost", economics.incrementalBtsCost],
    ["Total modeled campaign investment", economics.totalCampaignCost],
    ["TV-only generated revenue", economics.tvOnlyGeneratedRevenue],
    ["BTS incremental value", economics.btsIncrementalValue],
    ["Total revenue TV + BTS", economics.totalRevenueWithBts],
    ["Proof layer net contribution", metrics.proofLayerNetContribution],
    ["TV-only ROI benchmark", metrics.tvOnlyRoi],
    ["Proof layer ROI", metrics.btsIncrementalRoi],
    ["Modeled business ROI", metrics.roiTotal],
    ...vertical === "automotive" ? [["Workbook net business delta vs TV baseline", metrics.workbookNetBusinessDeltaVsTvBaseline]] : []
  ];
}
function interpretResults(metrics) {
  if (metrics.totalIncrementalConversions <= 0) {
    return "The modeled scenario does not create meaningful incremental business impact.";
  }
  if (metrics.roiTotal >= 1 && metrics.proofLayerRoi < 1) {
    return "The overall campaign can remain profitable even when the proof layer does not yet cover its incremental cost.";
  }
  if (metrics.proofLayerRoi >= 2) {
    return "The proof layer is strongly value-accretive and can support selective media scaling if buying efficiency remains controlled.";
  }
  if (metrics.proofLayerRoi >= 1) {
    return "The campaign remains profitable and the proof layer adds net value, but media scaling should stay disciplined.";
  }
  return "The proof layer improves conversion, but it should not be scaled until it covers its own incremental cost.";
}
function getDecisionSummary(metrics) {
  if (!metrics.proofEnabled && metrics.roiTotal < 1) {
    return {
      status: "Do not scale proof layer yet",
      tone: "negative",
      explanation: "The overall campaign may remain profitable, but the proof layer does not cover its incremental cost under current assumptions."
    };
  }
  if (metrics.valueLostToMedia < 0 || metrics.proofLayerRoi < 1) {
    return {
      status: "Do not scale proof layer yet",
      tone: "negative",
      explanation: "The overall campaign may remain profitable, but the proof layer does not cover its incremental cost under current assumptions."
    };
  }
  if (metrics.valueLostToMedia > 0 && metrics.proofLayerRoi >= 2) {
    return {
      status: "Scale selectively",
      tone: "positive",
      explanation: "The workbook model classifies this scenario as profitable and the proof layer is value-accretive. Additional media can be considered if buying efficiency remains within the modeled threshold."
    };
  }
  return {
    status: "Keep and optimize",
    tone: "warning",
    explanation: "The campaign remains profitable and the proof layer creates net value. Scale only if media buying efficiency remains controlled."
  };
}
function getDecisionReasons(metrics) {
  const reasons = [];
  if (metrics.valueLostToMedia < 0 || metrics.proofLayerRoi < 1) {
    reasons.push("The overall campaign may remain profitable, but the proof layer does not cover its incremental cost under current assumptions.");
    reasons.push(`Incremental BTS cost remains ${metrics.incrementalBtsCost ? "material" : "present"} relative to proof-layer value creation.`);
  } else if (metrics.proofLayerRoi >= 2) {
    reasons.push("The proof layer is strongly value-accretive under the current assumptions.");
    reasons.push("Additional media can be considered if buying efficiency remains within the modeled threshold.");
  } else {
    reasons.push("The campaign remains profitable and the proof layer creates net value.");
    reasons.push("Scale only if media buying efficiency remains controlled.");
  }
  return reasons.slice(0, 3);
}
function safeDivide(a, b) {
  if (!b) return 0;
  return a / b;
}
function getDisplayedProofLayerInvestment(economics) {
  return economics.proofLayerInvestment ?? Math.abs(economics.incrementalBtsCost);
}
function getCommercialProofLayerMetrics(economics) {
  const proofLayerInvestment = getDisplayedProofLayerInvestment(economics);
  const valueCreated = economics.btsIncrementalValue ?? 0;
  return {
    proofLayerInvestment,
    proofLayerNetContribution: valueCreated - proofLayerInvestment,
    proofLayerRoi: safeDivide(valueCreated, proofLayerInvestment)
  };
}
function getEconomics(inputs) {
  const mediaBehavior = getMediaTypeBehavior(inputs.mediaType) ?? null;
  const scenarioName = inputs.scenario ?? null;
  const verticalName = normalizeVerticalKey(inputs.vertical);
  const mediaContext = getResolvedMediaContext(verticalName, inputs.mediaType);
  const factorDefaults = getWorkbookMediaFactors(verticalName, scenarioName);
  const roiAssumptions = scenarioName ? getWorkbookScenarioRoiAssumptions(verticalName, scenarioName) : null;
  const runtimeFallbacks = [];
  const shareFallback = mediaMixAssumptions.normalizedShareFallback;
  const usedShareFallback = inputs.linearTvShare == null || inputs.bvodShare == null;
  if (usedShareFallback) {
    runtimeFallbacks.push({
      key: "normalizedShareFallback",
      sourceType: shareFallback.sourceType,
      fallbackOnly: shareFallback.fallbackOnly,
      description: shareFallback.description
    });
  }
  const normalizedShares = normalizeMediaShares(inputs.linearTvShare, inputs.bvodShare);
  const linearTvShare = normalizedShares.linearTvShare;
  const bvodShare = normalizedShares.bvodShare;
  const automaticAttentionRate = (inputs.baseAttentionRate ?? 0) * mediaContext.relativeAttentionMultiplier * mediaContext.relativeMixAttentionMultiplier;
  const effectiveAttentionRate = (inputs.attentionOverrideRate ?? 0) > 0 ? inputs.attentionOverrideRate : automaticAttentionRate;
  const workbookEconomicsProfile = mediaContext.workbookEconomicsProfile;
  const workbookProfile = mediaContext.selectedMediaProfile;
  const baseTvBudgetExBts = inputs.baseTvBudgetExBts ?? workbookEconomicsProfile?.baseTvBudgetExBts ?? workbookProfile?.baseTvBudgetExBts ?? 0;
  const grossLinearMedia = inputs.grossLinearMediaOverride ?? workbookEconomicsProfile?.grossLinearMedia ?? baseTvBudgetExBts * linearTvShare;
  const grossBvodMedia = inputs.grossBvodMediaOverride ?? workbookEconomicsProfile?.grossBvodMedia ?? baseTvBudgetExBts * bvodShare;
  const grossLinearBtsAddOn = inputs.grossLinearBtsAddOn ?? workbookEconomicsProfile?.grossLinearBtsAddOn ?? workbookProfile?.grossLinearBtsAddOn ?? 0;
  const grossBvodBtsAddOn = inputs.grossBvodBtsAddOn ?? workbookEconomicsProfile?.grossBvodBtsAddOn ?? workbookProfile?.grossBvodBtsAddOn ?? 0;
  const productionTraffickingCost = inputs.productionTraffickingCost ?? workbookEconomicsProfile?.productionTraffickingCost ?? workbookProfile?.productionTraffickingCost ?? 0;
  const techMeasurementCost = inputs.techMeasurementCost ?? workbookEconomicsProfile?.techMeasurementCost ?? workbookProfile?.techMeasurementCost ?? 0;
  const btsClientProofFee = inputs.btsClientProofFee ?? workbookEconomicsProfile?.btsClientProofFee ?? workbookProfile?.btsClientProofFee ?? 0;
  const btsProofActivationCost = inputs.btsProofActivationCost ?? workbookEconomicsProfile?.btsProofActivationCost ?? workbookProfile?.btsProofActivationCost ?? 0;
  const totalBtsCompletePocFee = btsClientProofFee + btsProofActivationCost;
  const coreNetFactor = inputs[`coreFactor${scenarioName}`] ?? factorDefaults.core ?? 0;
  const btsNetFactor = inputs[`btsFactor${scenarioName}`] ?? factorDefaults.bts ?? 0;
  const netLinearMedia = grossLinearMedia * coreNetFactor;
  const netBvodMedia = grossBvodMedia * coreNetFactor;
  const netLinearBtsAddOn = grossLinearBtsAddOn * btsNetFactor;
  const netBvodBtsAddOn = grossBvodBtsAddOn * btsNetFactor;
  const tourismLikeCostModel = verticalName === "tourism" || verticalName === "retailGeneral" || verticalName === "retailAppliances";
  const tvOnlyCampaignCost = tourismLikeCostModel ? baseTvBudgetExBts : netLinearMedia + productionTraffickingCost + netBvodMedia + techMeasurementCost;
  const totalNetMediaWithBts = netLinearMedia + netBvodMedia + netLinearBtsAddOn + netBvodBtsAddOn;
  const incrementalBtsMediaCost = netLinearBtsAddOn + netBvodBtsAddOn;
  const fixedProofActivationCost = productionTraffickingCost + techMeasurementCost + totalBtsCompletePocFee;
  const positiveNetBtsMediaAddOn = Math.max(incrementalBtsMediaCost, 0);
  const totalCampaignCost = tourismLikeCostModel ? netLinearMedia + netLinearBtsAddOn + productionTraffickingCost + netBvodMedia + netBvodBtsAddOn + techMeasurementCost + totalBtsCompletePocFee : tvOnlyCampaignCost + (incrementalBtsMediaCost + totalBtsCompletePocFee);
  const incrementalBtsCost = tourismLikeCostModel ? totalCampaignCost - tvOnlyCampaignCost : incrementalBtsMediaCost + totalBtsCompletePocFee;
  const proofLayerInvestment = verticalName === "retailGeneral" ? positiveNetBtsMediaAddOn + fixedProofActivationCost : Math.abs(incrementalBtsCost);
  const tvOnlyGeneratedRevenue = (netLinearMedia + netBvodMedia) * (roiAssumptions?.tv ?? 0);
  const btsIncrementalValue = tvOnlyGeneratedRevenue * (roiAssumptions?.bts ?? 0) * (inputs.proofEnabled === false ? 0 : 1);
  const totalRevenueWithBts = tvOnlyGeneratedRevenue + btsIncrementalValue;
  const proofLayerNetContribution = btsIncrementalValue - proofLayerInvestment;
  const netMediaDeltaVsBaseline = totalCampaignCost - baseTvBudgetExBts;
  return {
    mediaCostMultiplier: mediaBehavior?.costMultiplier ?? 1,
    linearTvShare,
    bvodShare,
    baseTvBudgetExBts,
    grossLinearMedia,
    grossBvodMedia,
    grossLinearBtsAddOn,
    grossBvodBtsAddOn,
    productionTraffickingCost,
    techMeasurementCost,
    btsClientProofFee,
    btsProofActivationCost,
    totalBtsCompletePocFee,
    coreDiscount: coreNetFactor,
    btsDiscount: btsNetFactor,
    coreNetFactor,
    btsNetFactor,
    netLinearMedia,
    netBvodMedia,
    netLinearBtsAddOn,
    netBvodBtsAddOn,
    totalGrossMedia: grossLinearMedia + grossBvodMedia + grossLinearBtsAddOn + grossBvodBtsAddOn,
    totalNetMediaWithBts,
    incrementalBtsMediaCost,
    fixedProofActivationCost,
    positiveNetBtsMediaAddOn,
    incrementalBtsCost,
    proofLayerInvestment,
    tvOnlyCampaignCost,
    totalCampaignCost,
    tvOnlyGeneratedRevenue,
    btsIncrementalValue,
    totalRevenueWithBts,
    netIncrementalDeltaVsTvBaseline: proofLayerNetContribution,
    proofLayerNetContribution,
    netMediaDeltaVsBaseline,
    tvOnlyRoi: roiAssumptions?.tv ?? 0,
    tvRoiBenchmark: roiAssumptions?.tv ?? 0,
    btsIncrementalRoi: safeDivide(btsIncrementalValue, proofLayerInvestment),
    btsRoiAssumption: roiAssumptions?.bts ?? 0,
    btsRoiBenchmark: roiAssumptions?.bts ?? 0,
    totalRevenueWithBtsToCost: safeDivide(totalRevenueWithBts, totalCampaignCost),
    effectiveAttentionRate,
    effectiveConversionMultiplier: mediaContext.relativeMixConversionMultiplier
  };
}
function formatAuditDisplay(kind, value) {
  if (value == null) return "\u2014";
  if (kind === "currency") return new Intl.NumberFormat("en-US", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
  if (kind === "ratio") return `${safeDivide(value, 1).toFixed(2)}x`;
  if (kind === "percent") return new Intl.NumberFormat("en-US", { style: "percent", maximumFractionDigits: Math.abs(value) < 1e-3 && value !== 0 ? 2 : 1 }).format(value);
  if (kind === "integer") return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value);
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(value);
}
function getAuditStatus(currentValue, expectedValue, tolerance = 0.01) {
  return Math.abs(currentValue - expectedValue) <= tolerance ? "OK" : "Value mismatch";
}
function buildAutomotiveAuditRows(metrics) {
  const scenario = metrics.scenario || "Base";
  const scenarioColumn = { Upside: "B", Base: "E", Stress: "H" }[scenario] || "E";
  const coreCell = { Upside: "K6", Base: "K8", Stress: "K9" }[scenario] || "K8";
  const btsCell = { Upside: "K10", Base: "K11", Stress: "K12" }[scenario] || "K11";
  const tvRoiCell = { Upside: "K21", Base: "K22", Stress: "K23" }[scenario] || "K22";
  const btsRoiCell = { Upside: "K24", Base: "K25", Stress: "K26" }[scenario] || "K25";
  const totalCampaignCell = { Upside: "K35", Base: "K37", Stress: "K39" }[scenario] || "K37";
  const netMediaDeltaCell = { Upside: "K36", Base: "K38", Stress: "K40" }[scenario] || "K38";
  const expected = automotiveWorkbookAuditByScenario[{ Upside: "upside", Base: "base", Stress: "stress" }[scenario] || "base"] || automotiveWorkbookAuditByScenario.base;
  const row = (businessConcept, sheet, cell, excelLabel, excelValue, excelFormula, jsVariable, uiLabel, uiValue, status, recommendation) => ({
    businessConcept,
    excelSheet: sheet,
    excelCell: cell,
    excelLabel,
    excelValue,
    excelFormula,
    jsVariable,
    uiLabel,
    uiValue,
    status,
    recommendation
  });
  return [
    row("Reach", "Automobile", `${scenarioColumn}6`, "Reach", formatAuditDisplay("integer", metrics.inputs.reach), String(metrics.inputs.reach), "reach", "Reach", formatAuditDisplay("integer", metrics.inputs.reach), "OK", "Keep current mapping."),
    row("Effective attention / exposure rate", "Automobile", `${scenarioColumn}7`, "Effective attention / exposure rate", formatAuditDisplay("percent", metrics.inputs.baseAttentionRate), String(metrics.inputs.baseAttentionRate), "baseAttentionRate", "Effective attention / exposure rate", formatAuditDisplay("percent", metrics.inputs.baseAttentionRate), "OK", "Keep current mapping."),
    row("QR Code scan rate", "Automobile", `${scenarioColumn}8`, "QR Code scan rate", formatAuditDisplay("percent", metrics.inputs.scanRate), String(metrics.inputs.scanRate), "scanRate", "QR Code scan rate", formatAuditDisplay("percent", metrics.inputs.scanRate), "OK", "Preserve two-decimal percent precision for small values."),
    row("Qualified visit rate", "Automobile", `${scenarioColumn}9`, "Qualified visit rate from scans", formatAuditDisplay("percent", metrics.inputs.qualifiedVisitRate), String(metrics.inputs.qualifiedVisitRate), "qualifiedVisitRate", "Qualified visit rate from scans", formatAuditDisplay("percent", metrics.inputs.qualifiedVisitRate), "OK", "Keep current mapping."),
    row("Lead form completion rate", "Automobile", `${scenarioColumn}10`, "Lead form completion rate from visits", formatAuditDisplay("percent", metrics.inputs.leadRate), String(metrics.inputs.leadRate), "leadRate", "Lead form completion rate from visits", formatAuditDisplay("percent", metrics.inputs.leadRate), "OK", "Keep current mapping."),
    row("Dealer / test-drive booking rate", "Automobile", `${scenarioColumn}11`, "Dealer / test-drive booking rate from leads", formatAuditDisplay("percent", metrics.inputs.bookingRate), String(metrics.inputs.bookingRate), "bookingRate", "Dealer / test-drive booking rate from leads", formatAuditDisplay("percent", metrics.inputs.bookingRate), "OK", "Keep current mapping."),
    row("Sale close rate", "Automobile", `${scenarioColumn}12`, "Sale close rate from test-drive", formatAuditDisplay("percent", metrics.inputs.closeRate), String(metrics.inputs.closeRate), "closeRate", "Sale close rate from test-drive", formatAuditDisplay("percent", metrics.inputs.closeRate), "OK", "Keep current mapping."),
    row("In-market shopper share", "Automobile", `${scenarioColumn}13`, "In-market shopper share", formatAuditDisplay("percent", metrics.inputs.inMarketShoppers), String(metrics.inputs.inMarketShoppers), "inMarketShoppers", "In-market shopper share", formatAuditDisplay("percent", metrics.inputs.inMarketShoppers), "OK", scenario === "Stress" ? "Workbook uses 2.5%, not 3%. Current UI follows workbook." : "Keep current mapping."),
    row("Observation window share", "Automobile", `${scenarioColumn}14`, "Observation window share", formatAuditDisplay("percent", metrics.inputs.observationWindow), String(metrics.inputs.observationWindow), "observationWindow", "Observation window share", formatAuditDisplay("percent", metrics.inputs.observationWindow), "OK", "Keep as share, not days, for Automotive."),
    row("Assisted uplift", "Automobile", `${scenarioColumn}15`, "Assisted booking uplift on exposed in-market shoppers", formatAuditDisplay("percent", metrics.inputs.assistedUplift), String(metrics.inputs.assistedUplift), "assistedUplift", "Assisted booking uplift on exposed in-market shopper", formatAuditDisplay("percent", metrics.inputs.assistedUplift), "OK", "Keep workbook wording and formula semantics."),
    row("Gross profit per sale", "Automobile", `${scenarioColumn}16`, "Gross profit per sale (\u20AC)", formatAuditDisplay("currency", metrics.inputs.profitPerSale), `=${metrics.inputs.profitPerSale}`, "profitPerSale", "Gross profit per sale", formatAuditDisplay("currency", metrics.inputs.profitPerSale), "OK", "Keep workbook wording."),
    row("Base TV budget excl. BTS", "Automobile", "K13", "Base TV budget excl. BTS", formatAuditDisplay("currency", metrics.inputs.baseTvBudgetExBts ?? expected.baseTvBudgetExBts), "='Cost Input (PrimeTime)'!A8", "baseTvBudgetExBts", "Base TV budget excl. BTS", formatAuditDisplay("currency", metrics.inputs.baseTvBudgetExBts ?? expected.baseTvBudgetExBts), "OK", "Workbook source is the PrimeTime cost module."),
    row("Linear TV share", "Cost Input (PrimeTime)", "C8", "Linear share (%)", formatAuditDisplay("percent", metrics.inputs.linearTvShare), String(expected.linearTvShare), "linearTvShare", "Linear TV share", formatAuditDisplay("percent", metrics.inputs.linearTvShare), "OK", "Workbook stores the share in the cost module, not on the Automotive sheet."),
    row("BVoD share", "Cost Input (PrimeTime)", "C9", "BVoD share (%)", formatAuditDisplay("percent", metrics.inputs.bvodShare), String(expected.bvodShare), "bvodShare", "BVoD share", formatAuditDisplay("percent", metrics.inputs.bvodShare), "OK", "Workbook stores the share in the cost module, not on the Automotive sheet."),
    row("Core media factor", "Automobile", coreCell, `Core ${scenario}`, formatAuditDisplay("percent", metrics.coreNetFactor), `=INDEX('Vertical Parameters'!$C$18:$C$38,MATCH($K$5|${scenario},...))`, `coreFactor${scenario}`, "Core media factor", formatAuditDisplay("percent", metrics.coreNetFactor), "OK", "Keep vertical + scenario controlled factor."),
    row("BTS media factor", "Automobile", btsCell, `BTS ${scenario}`, formatAuditDisplay("percent", metrics.btsNetFactor), `=INDEX('Vertical Parameters'!$D$18:$D$38,MATCH($K$5|${scenario},...))`, `btsFactor${scenario}`, "BTS media factor", formatAuditDisplay("percent", metrics.btsNetFactor), "OK", "Keep vertical + scenario controlled factor."),
    row("Gross Linear media", "Automobile", "K14", "Gross Linear Media", formatAuditDisplay("currency", metrics.grossLinearMedia), "='Cost Input (PrimeTime)'!B29", "grossLinearMedia", "Gross Linear Media", formatAuditDisplay("currency", metrics.grossLinearMedia), "OK", "Keep workbook cost module mapping."),
    row("Gross BVoD media", "Automobile", "K15", "Gross BVoD Media", formatAuditDisplay("currency", metrics.grossBvodMedia), "='Cost Input (PrimeTime)'!B38", "grossBvodMedia", "Gross BVoD Media", formatAuditDisplay("currency", metrics.grossBvodMedia), "OK", "Keep workbook cost module mapping."),
    row("Gross Linear BTS add-on", "Automobile", "K16", "Gross Linear BTS Add-on", formatAuditDisplay("currency", metrics.grossLinearBtsAddOn), "='Cost Input (PrimeTime)'!B31", "grossLinearBtsAddOn", "Gross Linear BTS add-on", formatAuditDisplay("currency", metrics.grossLinearBtsAddOn), "OK", "Keep workbook cost module mapping."),
    row("Gross BVoD BTS add-on", "Automobile", "K17", "Gross BVoD BTS Add-on", formatAuditDisplay("currency", metrics.grossBvodBtsAddOn), "='Cost Input (PrimeTime)'!B40", "grossBvodBtsAddOn", "Gross BVoD BTS add-on", formatAuditDisplay("currency", metrics.grossBvodBtsAddOn), "OK", "Keep workbook cost module mapping."),
    row("Production / trafficking", "Automobile", "K18", "Linear production / trafficking", formatAuditDisplay("currency", metrics.productionTraffickingCost), String(expected.productionTraffickingCost), "productionTraffickingCost", "Production cost", formatAuditDisplay("currency", metrics.productionTraffickingCost), "OK", "UI label is simplified but semantically aligned."),
    row("Measurement / BVoD tech measurement", "Automobile", "K19", "BVoD Tech measurement", formatAuditDisplay("currency", metrics.techMeasurementCost), "='Cost Input (PrimeTime)'!B41", "techMeasurementCost", "Measurement cost", formatAuditDisplay("currency", metrics.techMeasurementCost), "OK", "UI label is simplified but semantically aligned."),
    row("BTS client proof PoC fee", "Cost Input (PrimeTime)", "B48", "BTS Client Proof PoC fee (\u20AC)", formatAuditDisplay("currency", metrics.btsClientProofFee), String(expected.btsClientProofFee), "btsClientProofFee", "BTS client proof PoC fee", formatAuditDisplay("currency", metrics.btsClientProofFee), "OK", "Workbook split confirmed in cost module."),
    row("BTS proof activation", "Cost Input (PrimeTime)", "B52", "BTS Proof Activation (\u20AC)", formatAuditDisplay("currency", metrics.btsProofActivationCost), String(expected.btsProofActivationCost), "btsProofActivationCost", "BTS proof activation", formatAuditDisplay("currency", metrics.btsProofActivationCost), "OK", "Workbook split confirmed in cost module."),
    row("Total BTS Complete PoC Fee", "Automobile", "K20", "Total BTS Complete PoC Fee", formatAuditDisplay("currency", metrics.totalBtsCompletePocFee), "='Cost Input (PrimeTime)'!B55", "totalBtsCompletePocFee", "Not surfaced directly", formatAuditDisplay("currency", metrics.totalBtsCompletePocFee), "Missing in UI", "Current UI shows the split fees instead of the combined workbook row, which is acceptable."),
    row("TV-only generated revenue", "Automobile", `${scenarioColumn}33`, "TV Only Generated Revenue (\u20AC)", formatAuditDisplay("currency", expected.tvOnlyGeneratedRevenue), `=($${{ Upside: "K28", Base: "K29", Stress: "K30" }[scenario]}+$${{ Upside: "K31", Base: "K32", Stress: "K33" }[scenario]})*${tvRoiCell}`, "tvOnlyGeneratedRevenue", "TV-only generated revenue", formatAuditDisplay("currency", metrics.tvOnlyGeneratedRevenue), getAuditStatus(metrics.tvOnlyGeneratedRevenue, expected.tvOnlyGeneratedRevenue), "Keep current formula and label."),
    row("BTS incremental value", "Automobile", `${scenarioColumn}34`, "BTS Incremental Value (\u20AC)", formatAuditDisplay("currency", expected.btsIncrementalValue), `=${scenarioColumn}33*${btsRoiCell}`, "btsIncrementalValue", "BTS incremental value", formatAuditDisplay("currency", metrics.btsIncrementalValue), getAuditStatus(metrics.btsIncrementalValue, expected.btsIncrementalValue), "Keep current formula and label."),
    row("Total revenue TV with BTS", "Automobile", `${scenarioColumn}35`, "Total Revenue TV with BTS (\u20AC)", formatAuditDisplay("currency", expected.totalRevenueWithBts), `=${scenarioColumn}33+${scenarioColumn}34`, "totalRevenueWithBts", "Total revenue TV + BTS", formatAuditDisplay("currency", metrics.totalRevenueWithBts), getAuditStatus(metrics.totalRevenueWithBts, expected.totalRevenueWithBts), "Keep current formula and label."),
    row("Incremental BTS cost", "Automobile", `${scenarioColumn}18`, "Total Modeled Campaign Investment (\u20AC)", formatAuditDisplay("currency", expected.incrementalBtsCost), `${totalCampaignCell} - K13 - ${netMediaDeltaCell.replace("6", "")}`, "incrementalBtsCost", "Incremental BTS cost", formatAuditDisplay("currency", metrics.incrementalBtsCost), getAuditStatus(metrics.incrementalBtsCost, expected.incrementalBtsCost), "Current UI convention matches the workbook-selected Automotive module."),
    row("Total modeled campaign investment", "Automobile", totalCampaignCell, "Total Modeled Campaign Investment (\u20AC)", formatAuditDisplay("currency", expected.totalCampaignCost), scenario === "Upside" ? "=$K$14*$K$6+$K$16*$K$10+$K$18+$K$15*$K$6+$K$17*$K$10+$K$19+$K$20" : scenario === "Base" ? "=$K$14*$K$8+$K$16*$K$11+$K$18+$K$15*$K$8+$K$17*$K$11+$K$19+$K$20" : "=$K$14*$K$9+$K$16*$K$12+$K$18+$K$15*$K$9+$K$17*$K$12+$K$19+$K$20", "totalCampaignCost", "Total modeled campaign investment", formatAuditDisplay("currency", metrics.totalCampaignCost), getAuditStatus(metrics.totalCampaignCost, expected.totalCampaignCost), "Keep current formula and label."),
    row("Net media delta vs baseline", "Automobile", netMediaDeltaCell, "Net media delta vs baseline (\u20AC)", formatAuditDisplay("currency", metrics.netMediaDeltaVsBaseline), `=${totalCampaignCell}-K13`, "netMediaDeltaVsBaseline", "Missing in UI", formatAuditDisplay("currency", metrics.netMediaDeltaVsBaseline), "Missing in UI", "Keep as audit-only unless you want to surface the workbook media delta explicitly."),
    row("Proof layer net contribution", "Derived from workbook inputs", "\u2014", "Derived from BTS incremental value and incremental BTS cost", formatAuditDisplay("currency", expected.proofLayerNetContribution), `${scenarioColumn}34 - ${scenarioColumn}18?`, "proofLayerNetContribution", "Proof layer net contribution", formatAuditDisplay("currency", metrics.proofLayerNetContribution), getAuditStatus(metrics.proofLayerNetContribution, expected.proofLayerNetContribution), "Rename retained because workbook row 42 is a different concept."),
    row("Net incremental business delta vs TV baseline", "Automobile", `${scenarioColumn}42`, "Net incremental business delta vs TV baseline (\u20AC)", formatAuditDisplay("currency", expected.netBusinessDeltaVsTvBaseline), `=${scenarioColumn}17+${scenarioColumn}29`, "workbookNetBusinessDeltaVsTvBaseline", "Not surfaced as a primary KPI", formatAuditDisplay("currency", metrics.workbookNetBusinessDeltaVsTvBaseline), "Formula mismatch", "Do not reuse this workbook label for the proof-layer contribution KPI."),
    row("ROI total campaign", "Automobile", `${scenarioColumn}32`, "ROI Total Campaign", formatAuditDisplay("ratio", expected.roiTotalCampaign), `=${scenarioColumn}30/${scenarioColumn}18`, "roiTotal", "ROI total campaign", formatAuditDisplay("ratio", metrics.roiTotal), getAuditStatus(metrics.roiTotal, expected.roiTotalCampaign), "Keep workbook formula semantics."),
    row("ROI BTS incremental", "Automobile", `${scenarioColumn}36`, "ROI BTS incremental", formatAuditDisplay("ratio", expected.roiBtsIncremental), `=(${scenarioColumn}30-${scenarioColumn}18)/${scenarioColumn}18`, "btsIncrementalRoi", "ROI BTS incremental", formatAuditDisplay("ratio", metrics.btsIncrementalRoi), getAuditStatus(metrics.btsIncrementalRoi, expected.roiBtsIncremental), "Keep workbook formula semantics."),
    row("Break-even / payback threshold", "Automobile", `${scenarioColumn}40`, "Full TV campaign payback threshold (\u20AC)", formatAuditDisplay("currency", expected.fullTvCampaignPaybackThreshold), `=IFERROR(B18-B30,0)`, "breakEvenMediaCost", "Break-even media cost", formatAuditDisplay("currency", metrics.breakEvenMediaCost), "Formula mismatch", "Current UI break-even planning is a different concept from the workbook payback-threshold row.")
  ];
}
function buildValidationRows(metrics) {
  if (metrics.vertical !== "automotive") {
    return [
      {
        label: "TV-only revenue",
        excelValue: metrics.tvOnlyGeneratedRevenue,
        appValue: metrics.tvOnlyGeneratedRevenue,
        difference: 0
      }
    ];
  }
  return buildAutomotiveAuditRows(metrics);
}
function getMediaEconomicsDefaults(mediaType, vertical = null, scenario = null) {
  const verticalKey = normalizeVerticalKey(vertical);
  const profile = mediaType ? getWorkbookMediaProfile(mediaType) : null;
  const mediaContext = getResolvedMediaContext(verticalKey, mediaType);
  const workbookDefaults = mediaContext.workbookEconomicsProfile;
  const selectedShares = mediaContext.selectedShares;
  const relativeCostMultiplier = mediaContext.relativeCostMultiplier;
  const scaledBaseTvBudgetExBts = workbookDefaults?.baseTvBudgetExBts != null ? workbookDefaults.baseTvBudgetExBts * relativeCostMultiplier : profile?.baseTvBudgetExBts ?? null;
  const baselineGrossMediaTotal = workbookDefaults?.grossLinearMedia != null || workbookDefaults?.grossBvodMedia != null ? (workbookDefaults?.grossLinearMedia ?? 0) + (workbookDefaults?.grossBvodMedia ?? 0) : null;
  const scaledGrossMediaTotal = baselineGrossMediaTotal != null ? baselineGrossMediaTotal * relativeCostMultiplier : null;
  const baselineGrossBtsAddOnTotal = workbookDefaults?.grossLinearBtsAddOn != null || workbookDefaults?.grossBvodBtsAddOn != null ? (workbookDefaults?.grossLinearBtsAddOn ?? 0) + (workbookDefaults?.grossBvodBtsAddOn ?? 0) : null;
  const scaledGrossBtsAddOnTotal = baselineGrossBtsAddOnTotal != null ? baselineGrossBtsAddOnTotal * relativeCostMultiplier : null;
  return {
    baseTvBudgetExBts: scaledBaseTvBudgetExBts,
    linearTvShare: selectedShares.linearTvShare,
    bvodShare: selectedShares.bvodShare,
    attentionOverrideRate: 0,
    grossLinearMediaOverride: scaledGrossMediaTotal != null ? scaledGrossMediaTotal * selectedShares.linearTvShare : workbookDefaults?.grossLinearMedia ?? null,
    grossBvodMediaOverride: scaledGrossMediaTotal != null ? scaledGrossMediaTotal * selectedShares.bvodShare : workbookDefaults?.grossBvodMedia ?? null,
    grossLinearBtsAddOn: scaledGrossBtsAddOnTotal != null ? scaledGrossBtsAddOnTotal * selectedShares.linearTvShare : workbookDefaults?.grossLinearBtsAddOn ?? profile?.grossLinearBtsAddOn ?? null,
    grossBvodBtsAddOn: scaledGrossBtsAddOnTotal != null ? scaledGrossBtsAddOnTotal * selectedShares.bvodShare : workbookDefaults?.grossBvodBtsAddOn ?? profile?.grossBvodBtsAddOn ?? null,
    productionTraffickingCost: workbookDefaults?.productionTraffickingCost ?? profile?.productionTraffickingCost ?? null,
    techMeasurementCost: workbookDefaults?.techMeasurementCost ?? profile?.techMeasurementCost ?? null,
    btsClientProofFee: workbookDefaults?.btsClientProofFee ?? profile?.btsClientProofFee ?? null,
    btsProofActivationCost: workbookDefaults?.btsProofActivationCost ?? profile?.btsProofActivationCost ?? null,
    proofEnabled: true
  };
}
function clamp01(value) {
  return Math.min(1, Math.max(0, value));
}
function clone(value) {
  if (typeof structuredClone === "function") {
    return structuredClone(value);
  }
  return JSON.parse(JSON.stringify(value));
}

// src/data/rateCardSchema.js
var documentFamily = {
  LINEAR_GENERIC: "linear_generic",
  BVOD_DIGITAL_GENERIC: "bvod_digital_generic",
  EVENT_SPECIFIC: "event_specific",
  SPONSORSHIP: "sponsorship",
  BRAND_CONTENT: "brand_content",
  COMMERCIAL_CONDITIONS: "commercial_conditions"
};
var inventoryType = {
  LINEAR_TV: "linear_tv",
  BVOD: "bvod",
  STREAMING: "streaming",
  DIGITAL_VIDEO: "digital_video",
  SPONSORSHIP: "sponsorship",
  BRAND_CONTENT: "brand_content",
  EVENT_PACKAGE: "event_package"
};
var documentStatus = {
  ACTIVE: "active",
  SUPERSEDED: "superseded",
  AUDIT_ONLY: "audit_only",
  PENDING_SOURCE: "pending_source"
};
var sourceGovernanceFields = {
  sourceDocument: "Human-readable document title or source identifier.",
  sourcePath: "Absolute or canonical source path to the underlying rate-card file.",
  sourcePage: "Page number or page range used for the referenced row.",
  sourceTable: "Table name, section heading, or extracted table identifier.",
  sourceDate: "Publication or source issue date.",
  effectivePeriodStart: "Start date for commercial validity.",
  effectivePeriodEnd: "End date for commercial validity.",
  extractionMethod: "Whether the row was mapped manually or by automation.",
  manual: "Boolean helper flag for manually curated rows.",
  automated: "Boolean helper flag for machine-derived rows.",
  reviewedBy: "Reviewer name or identifier.",
  reviewedAt: "Review timestamp.",
  confidenceLevel: "Review confidence for the mapped row or condition."
};
var normalizationGovernanceFields = {
  baseDurationSeconds: "Native duration basis used by the rate-card source.",
  targetDurationSeconds: "Requested comparable duration for model planning.",
  durationCoefficient: "Broadcaster-specific coefficient applied between base and target duration.",
  grossTariff: "Published gross tariff before net assumptions.",
  grossToNetFactor: "Assumed gross-to-net factor retained as a model assumption.",
  seasonalityFactor: "Optional seasonality multiplier for planning normalization.",
  daypartFactor: "Optional daypart weighting or multiplier used in normalization.",
  channelMix: "Channel allocation applied to a blended planned spend.",
  linearBvodSplit: "Linear/BVoD split used to allocate campaign value across inventory types.",
  normalizedGrossSpend: "Normalized gross spend after duration and daypart handling.",
  normalizedNetSpend: "Normalized net spend after gross-to-net assumptions.",
  assumptionsApplied: "List of assumptions or coefficients used during normalization.",
  notes: "Free-form analyst notes."
};
var rateCardDocuments = {
  description: "Document registry for all broadcaster rate-card and commercial-framework sources.",
  fields: {
    id: "Stable document identifier.",
    broadcaster: "Underlying broadcaster brand, network, or platform.",
    salesHouse: "Commercial sales house or concessionaire.",
    documentFamily: "Source family; never merge generic, digital, event, and legal sources.",
    title: "Document title as published.",
    sourceDocument: sourceGovernanceFields.sourceDocument,
    sourcePath: sourceGovernanceFields.sourcePath,
    sourceDate: sourceGovernanceFields.sourceDate,
    effectivePeriodStart: sourceGovernanceFields.effectivePeriodStart,
    effectivePeriodEnd: sourceGovernanceFields.effectivePeriodEnd,
    status: "Document lifecycle status.",
    notes: "Analyst notes about scope, exclusions, or governance.",
    reviewedBy: sourceGovernanceFields.reviewedBy,
    reviewedAt: sourceGovernanceFields.reviewedAt
  },
  exampleShape: {
    id: "tf1-2026-le-book-linear-v5",
    broadcaster: "TF1",
    salesHouse: "TF1 PUB",
    documentFamily: documentFamily.LINEAR_GENERIC,
    title: "Avenant 5 - Conditions Commerciales Le Book 2026",
    sourceDocument: "Avenant 5 - Conditions Commerciales Le Book 2026.pdf",
    sourcePath: "/abs/path/to/source.pdf",
    sourceDate: "2026-04-08",
    effectivePeriodStart: "2026-01-01",
    effectivePeriodEnd: "2026-12-31",
    status: documentStatus.ACTIVE,
    notes: "Linear TV framework only; keep separate from TF1+ digital pricing.",
    reviewedBy: "analyst@buytryshare",
    reviewedAt: "2026-04-26T12:00:00Z"
  }
};
var rateCardRows = {
  description: "Normalized row-level tariff entries extracted or manually curated from source documents.",
  fields: {
    id: "Stable row identifier.",
    documentId: "Foreign key to rateCardDocuments.",
    broadcaster: "Broadcaster brand.",
    salesHouse: "Sales house or ad alliance.",
    channel: "Channel, service, or platform inventory.",
    inventoryType: "Linear, BVoD, streaming, sponsorship, or event package.",
    period: "Applicable tariff period label.",
    daypart: "Daypart or commercial screen family.",
    programContext: "Program environment, event, or contextual bucket.",
    audienceSector: "Sector, buying segment, or commercial classification if applicable.",
    formatDurationSeconds: "Spot or ad duration basis from the source.",
    tariffBasis: "Spot, package, CPM, sponsorship, or fixed fee.",
    grossTariff: normalizationGovernanceFields.grossTariff,
    currency: "Published currency.",
    unit: "per_spot, per_package, per_cpm, or equivalent.",
    availabilityRule: "Any relevant booking or availability condition.",
    sourceDocument: sourceGovernanceFields.sourceDocument,
    sourcePath: sourceGovernanceFields.sourcePath,
    sourcePage: sourceGovernanceFields.sourcePage,
    sourceTable: sourceGovernanceFields.sourceTable,
    sourceDate: sourceGovernanceFields.sourceDate,
    effectivePeriodStart: sourceGovernanceFields.effectivePeriodStart,
    effectivePeriodEnd: sourceGovernanceFields.effectivePeriodEnd,
    extractionMethod: sourceGovernanceFields.extractionMethod,
    manual: sourceGovernanceFields.manual,
    automated: sourceGovernanceFields.automated,
    reviewedBy: sourceGovernanceFields.reviewedBy,
    reviewedAt: sourceGovernanceFields.reviewedAt,
    confidenceLevel: sourceGovernanceFields.confidenceLevel,
    notes: normalizationGovernanceFields.notes
  }
};
var commercialConditions = {
  description: "Commercial, legal, duration, and packaging conditions that govern how tariffs may be used.",
  fields: {
    id: "Stable condition identifier.",
    documentId: "Foreign key to rateCardDocuments.",
    scope: "linear, bvod, streaming, or cross-media scope.",
    conditionType: "duration coefficient, discount rule, legal rule, seasonality rule, etc.",
    key: "Condition key or semantic label.",
    value: "Condition value as text, number, table, or structured object.",
    valueType: "Primitive or structured data type.",
    sourceDocument: sourceGovernanceFields.sourceDocument,
    sourcePath: sourceGovernanceFields.sourcePath,
    sourcePage: sourceGovernanceFields.sourcePage,
    sourceTable: sourceGovernanceFields.sourceTable,
    sourceDate: sourceGovernanceFields.sourceDate,
    extractionMethod: sourceGovernanceFields.extractionMethod,
    manual: sourceGovernanceFields.manual,
    automated: sourceGovernanceFields.automated,
    reviewedBy: sourceGovernanceFields.reviewedBy,
    reviewedAt: sourceGovernanceFields.reviewedAt,
    confidenceLevel: sourceGovernanceFields.confidenceLevel,
    notes: normalizationGovernanceFields.notes
  }
};
var normalizationProfiles = {
  description: "Reusable broadcaster/channel normalization defaults for future Rate Card Mode planning.",
  fields: {
    id: "Stable profile identifier.",
    broadcaster: "Broadcaster brand.",
    salesHouse: "Sales house or ad alliance.",
    channel: "Channel or inventory bucket.",
    inventoryType: "Normalized inventory type.",
    baseDurationSeconds: normalizationGovernanceFields.baseDurationSeconds,
    targetDurationSeconds: normalizationGovernanceFields.targetDurationSeconds,
    durationCoefficientTable: "Broadcaster-specific table or mapping by duration.",
    defaultGrossToNetFactor: "Default assumed gross-to-net factor.",
    defaultSeasonalityFactor: "Default seasonality assumption.",
    defaultDaypartFactor: "Default daypart factor or weighting.",
    defaultBtsFormatIndex: "Broadcaster-specific 5s BTS tag coefficient or format index.",
    notes: normalizationGovernanceFields.notes
  }
};
var campaignRateCardInputs = {
  description: "Future planning input payload for a non-live Rate Card Mode adapter.",
  fields: {
    id: "Stable campaign-rate-card input set identifier.",
    mode: "scenario or rateCard; future adapter field, not connected to the live app yet.",
    broadcasterSelection: "Selected broadcasters or sales houses for the plan.",
    channelMix: normalizationGovernanceFields.channelMix,
    daypartMix: "Daypart allocation used for the plan.",
    formatMix: "Format duration mix used for the plan.",
    linearBvodSplit: normalizationGovernanceFields.linearBvodSplit,
    seasonalitySelection: "Seasonality selection for the planning window.",
    grossToNetOverrides: "Optional override map for gross-to-net assumptions.",
    btsTagDurationSeconds: "Requested BTS tag duration.",
    proofLayerAllocationRule: "How proof spend is allocated across linear/BVoD.",
    assumptionsApplied: normalizationGovernanceFields.assumptionsApplied,
    notes: normalizationGovernanceFields.notes
  }
};
var normalizationOutputs = {
  description: "Future adapter outputs that can later be mapped into the existing engine media planning inputs.",
  fields: {
    normalizedGrossLinearSpend: "Gross normalized baseline linear spend.",
    normalizedGrossBvodSpend: "Gross normalized baseline BVoD or streaming spend.",
    normalizedNetLinearSpend: "Net normalized baseline linear spend.",
    normalizedNetBvodSpend: "Net normalized baseline BVoD or streaming spend.",
    normalizedGrossLinearBtsAddOn: "Gross normalized linear BTS add-on.",
    normalizedGrossBvodBtsAddOn: "Gross normalized BVoD BTS add-on.",
    normalizedNetLinearBtsAddOn: "Net normalized linear BTS add-on.",
    normalizedNetBvodBtsAddOn: "Net normalized BVoD BTS add-on.",
    baseDurationSeconds: normalizationGovernanceFields.baseDurationSeconds,
    targetDurationSeconds: normalizationGovernanceFields.targetDurationSeconds,
    durationCoefficient: normalizationGovernanceFields.durationCoefficient,
    grossTariff: normalizationGovernanceFields.grossTariff,
    grossToNetFactor: normalizationGovernanceFields.grossToNetFactor,
    seasonalityFactor: normalizationGovernanceFields.seasonalityFactor,
    daypartFactor: normalizationGovernanceFields.daypartFactor,
    channelMix: normalizationGovernanceFields.channelMix,
    linearBvodSplit: normalizationGovernanceFields.linearBvodSplit,
    normalizedGrossSpend: normalizationGovernanceFields.normalizedGrossSpend,
    normalizedNetSpend: normalizationGovernanceFields.normalizedNetSpend,
    assumptionsApplied: normalizationGovernanceFields.assumptionsApplied,
    notes: normalizationGovernanceFields.notes
  }
};

// src/data/rateCardManualRows.js
var SOURCE_MODE = "manual_rate_card";
var NORMALIZED_MARKET_STATUS = "MARKET_ESTIMATION_TO_VALIDATE";
var ROW_TYPE = {
  LINEAR_TV_AVERAGE_TARIFF: "linear_tv_average_tariff",
  BVOD_STREAMING_AVERAGE_TARIFF: "bvod_streaming_average_tariff"
};
function cloneRows(rows) {
  return rows.map((row) => ({ ...row }));
}
var liveActiveLinearRowIds = /* @__PURE__ */ new Set([
  "tf1-pub-tf1-apr-2026",
  "tf1-pub-tmc-apr-2026",
  "tf1-pub-tfx-apr-2026",
  "tf1-pub-lci-apr-2026",
  "francetv-france2-apr-2026",
  "francetv-france3-apr-2026",
  "francetv-france5-apr-2026",
  "m6-unlimited-m6-apr-2026",
  "m6-unlimited-w9-apr-2026",
  "m6-unlimited-6ter-apr-2026",
  "m6-unlimited-gulli-apr-2026"
]);
var validatedRateCardRowIds = /* @__PURE__ */ new Set([
  ...liveActiveLinearRowIds
]);
function buildRateCardRowLabel(row) {
  if (row.channel) return `${row.salesHouse} / ${row.channel}`;
  if (row.platform) return `${row.salesHouse} / ${row.platform}`;
  return row.salesHouse || row.id;
}
function applyBusinessRowState(rows) {
  rows.forEach((row) => {
    const isActive = row.rowType === ROW_TYPE.LINEAR_TV_AVERAGE_TARIFF ? liveActiveLinearRowIds.has(row.id) : false;
    const isValidated = validatedRateCardRowIds.has(row.id);
    Object.assign(row, {
      label: buildRateCardRowLabel(row),
      isSelected: false,
      isActive,
      isValidated,
      appliedToModel: false
    });
  });
}
var linearTvAverageTariffRows = [
  {
    id: "tf1-pub-tf1-apr-2026",
    sourceMode: SOURCE_MODE,
    rowType: ROW_TYPE.LINEAR_TV_AVERAGE_TARIFF,
    group: "Groupe TF1",
    salesHouse: "TF1 Pub",
    channel: "TF1",
    inventoryType: inventoryType.LINEAR_TV,
    baseDurationSeconds: 20,
    avgDaytimeGrossHt: 5e3,
    avgPrimetimeGrossHt: 55e3,
    fiveSecondCoefficientSourceId: "TF1_20_TO_5",
    appliedFiveSecondCoefficient: 0.43,
    avgDaytimeFiveSecondHt: 2150,
    avgPrimetimeFiveSecondHt: 23650,
    confidence: "Medium",
    status: "MARKET_ESTIMATE_TO_VALIDATE",
    validationStatus: "estimate_to_validate",
    normalizedStatus: NORMALIZED_MARKET_STATUS,
    governanceType: "CONTROLLED_PLANNING_ASSUMPTION",
    usableInEngine: false,
    sourceNotes: "Controlled table row. Source: TF1 AdManager. Period: April 2026."
  },
  {
    id: "tf1-pub-tmc-apr-2026",
    sourceMode: SOURCE_MODE,
    rowType: ROW_TYPE.LINEAR_TV_AVERAGE_TARIFF,
    group: "Groupe TF1",
    salesHouse: "TF1 Pub",
    channel: "TMC",
    inventoryType: inventoryType.LINEAR_TV,
    baseDurationSeconds: 20,
    avgDaytimeGrossHt: 1150,
    avgPrimetimeGrossHt: 7850,
    fiveSecondCoefficientSourceId: "TF1_20_TO_5",
    appliedFiveSecondCoefficient: 0.43,
    avgDaytimeFiveSecondHt: 495,
    avgPrimetimeFiveSecondHt: 3376,
    confidence: "Medium",
    status: "MARKET_ESTIMATE_TO_VALIDATE",
    validationStatus: "estimate_to_validate",
    normalizedStatus: NORMALIZED_MARKET_STATUS,
    governanceType: "CONTROLLED_PLANNING_ASSUMPTION",
    usableInEngine: false,
    sourceNotes: "Controlled table row. Source: TF1 AdManager. Period: April 2026."
  },
  {
    id: "tf1-pub-tfx-apr-2026",
    sourceMode: SOURCE_MODE,
    rowType: ROW_TYPE.LINEAR_TV_AVERAGE_TARIFF,
    group: "Groupe TF1",
    salesHouse: "TF1 Pub",
    channel: "TFX",
    inventoryType: inventoryType.LINEAR_TV,
    baseDurationSeconds: 20,
    avgDaytimeGrossHt: 1e3,
    avgPrimetimeGrossHt: 4e3,
    fiveSecondCoefficientSourceId: "TF1_20_TO_5",
    appliedFiveSecondCoefficient: 0.43,
    avgDaytimeFiveSecondHt: 430,
    avgPrimetimeFiveSecondHt: 1720,
    confidence: "Medium",
    status: "MARKET_ESTIMATE_TO_VALIDATE",
    validationStatus: "estimate_to_validate",
    normalizedStatus: NORMALIZED_MARKET_STATUS,
    governanceType: "CONTROLLED_PLANNING_ASSUMPTION",
    usableInEngine: false,
    sourceNotes: "Controlled table row. Source: TF1 AdManager. Period: April 2026."
  },
  {
    id: "tf1-pub-tf1-series-films-apr-2026",
    sourceMode: SOURCE_MODE,
    rowType: ROW_TYPE.LINEAR_TV_AVERAGE_TARIFF,
    group: "Groupe TF1",
    salesHouse: "TF1 Pub",
    channel: "TF1 S\xE9ries Films",
    inventoryType: inventoryType.LINEAR_TV,
    baseDurationSeconds: 20,
    avgDaytimeGrossHt: 8250,
    avgPrimetimeGrossHt: 3e4,
    fiveSecondCoefficientSourceId: "TF1_20_TO_5",
    appliedFiveSecondCoefficient: 0.43,
    avgDaytimeFiveSecondHt: 3548,
    avgPrimetimeFiveSecondHt: 12900,
    confidence: "Medium",
    status: "MARKET_ESTIMATE_TO_VALIDATE",
    validationStatus: "estimate_to_validate",
    normalizedStatus: NORMALIZED_MARKET_STATUS,
    governanceType: "CONTROLLED_PLANNING_ASSUMPTION",
    usableInEngine: false,
    sourceNotes: "Controlled table row. Source: TF1 AdManager. Period: April 2026."
  },
  {
    id: "tf1-pub-lci-apr-2026",
    sourceMode: SOURCE_MODE,
    rowType: ROW_TYPE.LINEAR_TV_AVERAGE_TARIFF,
    group: "Groupe TF1",
    salesHouse: "TF1 Pub",
    channel: "LCI",
    inventoryType: inventoryType.LINEAR_TV,
    baseDurationSeconds: 20,
    avgDaytimeGrossHt: 1200,
    avgPrimetimeGrossHt: 3e3,
    fiveSecondCoefficientSourceId: "TF1_20_TO_5",
    appliedFiveSecondCoefficient: 0.43,
    avgDaytimeFiveSecondHt: 516,
    avgPrimetimeFiveSecondHt: 1290,
    confidence: "Medium",
    status: "MARKET_ESTIMATE_TO_VALIDATE",
    validationStatus: "estimate_to_validate",
    normalizedStatus: NORMALIZED_MARKET_STATUS,
    governanceType: "CONTROLLED_PLANNING_ASSUMPTION",
    usableInEngine: false,
    sourceNotes: "Controlled table row. Source: TF1 AdManager. Period: April 2026."
  },
  {
    id: "francetv-france2-apr-2026",
    sourceMode: SOURCE_MODE,
    rowType: ROW_TYPE.LINEAR_TV_AVERAGE_TARIFF,
    group: "Groupe France TV",
    salesHouse: "FranceTV Publicit\xE9",
    channel: "France 2",
    inventoryType: inventoryType.LINEAR_TV,
    baseDurationSeconds: 20,
    avgDaytimeGrossHt: 7500,
    avgPrimetimeGrossHt: 22500,
    fiveSecondCoefficientSourceId: "FTV_20_TO_5",
    appliedFiveSecondCoefficient: 0.5,
    avgDaytimeFiveSecondHt: 3750,
    avgPrimetimeFiveSecondHt: 11250,
    confidence: "Medium",
    status: "MARKET_ESTIMATE_TO_VALIDATE",
    validationStatus: "estimate_to_validate",
    normalizedStatus: NORMALIZED_MARKET_STATUS,
    governanceType: "CONTROLLED_PLANNING_ASSUMPTION",
    usableInEngine: false,
    sourceNotes: "Controlled table row. Source: France.TV Publici\xE9. Period: April 2026."
  },
  {
    id: "francetv-france3-apr-2026",
    sourceMode: SOURCE_MODE,
    rowType: ROW_TYPE.LINEAR_TV_AVERAGE_TARIFF,
    group: "Groupe France TV",
    salesHouse: "FranceTV Publicit\xE9",
    channel: "France 3",
    inventoryType: inventoryType.LINEAR_TV,
    baseDurationSeconds: 20,
    avgDaytimeGrossHt: 3500,
    avgPrimetimeGrossHt: 9500,
    fiveSecondCoefficientSourceId: "FTV_20_TO_5",
    appliedFiveSecondCoefficient: 0.5,
    avgDaytimeFiveSecondHt: 1750,
    avgPrimetimeFiveSecondHt: 4750,
    confidence: "Medium",
    status: "MARKET_ESTIMATE_TO_VALIDATE",
    validationStatus: "estimate_to_validate",
    normalizedStatus: NORMALIZED_MARKET_STATUS,
    governanceType: "CONTROLLED_PLANNING_ASSUMPTION",
    usableInEngine: false,
    sourceNotes: "Controlled table row. Source: France.TV Publici\xE9. Period: April 2026."
  },
  {
    id: "francetv-france5-apr-2026",
    sourceMode: SOURCE_MODE,
    rowType: ROW_TYPE.LINEAR_TV_AVERAGE_TARIFF,
    group: "Groupe France TV",
    salesHouse: "FranceTV Publicit\xE9",
    channel: "France 5",
    inventoryType: inventoryType.LINEAR_TV,
    baseDurationSeconds: 20,
    avgDaytimeGrossHt: 900,
    avgPrimetimeGrossHt: 3e3,
    fiveSecondCoefficientSourceId: "FTV_20_TO_5",
    appliedFiveSecondCoefficient: 0.5,
    avgDaytimeFiveSecondHt: 450,
    avgPrimetimeFiveSecondHt: 1500,
    confidence: "Medium",
    status: "MARKET_ESTIMATE_TO_VALIDATE",
    validationStatus: "estimate_to_validate",
    normalizedStatus: NORMALIZED_MARKET_STATUS,
    governanceType: "CONTROLLED_PLANNING_ASSUMPTION",
    usableInEngine: false,
    sourceNotes: "Controlled table row. Source: France.TV Publici\xE9. Period: April 2026."
  },
  {
    id: "francetv-france4-apr-2026",
    sourceMode: SOURCE_MODE,
    rowType: ROW_TYPE.LINEAR_TV_AVERAGE_TARIFF,
    group: "Groupe France TV",
    salesHouse: "FranceTV Publicit\xE9",
    channel: "France 4",
    inventoryType: inventoryType.LINEAR_TV,
    baseDurationSeconds: 20,
    avgDaytimeGrossHt: 600,
    avgPrimetimeGrossHt: 1800,
    fiveSecondCoefficientSourceId: "FTV_20_TO_5",
    appliedFiveSecondCoefficient: 0.5,
    avgDaytimeFiveSecondHt: 300,
    avgPrimetimeFiveSecondHt: 900,
    confidence: "Low",
    status: "MARKET_ESTIMATE_TO_VALIDATE",
    validationStatus: "low_confidence",
    normalizedStatus: NORMALIZED_MARKET_STATUS,
    governanceType: "CONTROLLED_PLANNING_ASSUMPTION",
    usableInEngine: false,
    sourceNotes: "Controlled table row. Source: France.TV Publici\xE9. Period: April 2026."
  },
  {
    id: "francetv-franceinfo-apr-2026",
    sourceMode: SOURCE_MODE,
    rowType: ROW_TYPE.LINEAR_TV_AVERAGE_TARIFF,
    group: "Groupe France TV",
    salesHouse: "FranceTV Publicit\xE9",
    channel: "franceinfo:",
    inventoryType: inventoryType.LINEAR_TV,
    baseDurationSeconds: 20,
    avgDaytimeGrossHt: 500,
    avgPrimetimeGrossHt: 1500,
    fiveSecondCoefficientSourceId: "FTV_20_TO_5",
    appliedFiveSecondCoefficient: 0.5,
    avgDaytimeFiveSecondHt: 250,
    avgPrimetimeFiveSecondHt: 750,
    confidence: "Low",
    status: "MARKET_ESTIMATE_TO_VALIDATE",
    validationStatus: "low_confidence",
    normalizedStatus: NORMALIZED_MARKET_STATUS,
    governanceType: "CONTROLLED_PLANNING_ASSUMPTION",
    usableInEngine: false,
    sourceNotes: "Controlled table row. Source: France.TV Publici\xE9. Period: April 2026."
  },
  {
    id: "m6-unlimited-m6-apr-2026",
    sourceMode: SOURCE_MODE,
    rowType: ROW_TYPE.LINEAR_TV_AVERAGE_TARIFF,
    group: "Groupe M6",
    salesHouse: "M6 Unlimited",
    channel: "M6",
    inventoryType: inventoryType.LINEAR_TV,
    baseDurationSeconds: 30,
    avgDaytimeGrossHt: 6e3,
    avgPrimetimeGrossHt: 3e4,
    fiveSecondCoefficientSourceId: "M6_30_TO_5",
    appliedFiveSecondCoefficient: 0.5,
    avgDaytimeFiveSecondHt: 3e3,
    avgPrimetimeFiveSecondHt: 15e3,
    confidence: "Medium",
    status: "MARKET_ESTIMATE_TO_VALIDATE",
    validationStatus: "estimate_to_validate",
    normalizedStatus: NORMALIZED_MARKET_STATUS,
    governanceType: "CONTROLLED_PLANNING_ASSUMPTION",
    usableInEngine: false,
    sourceNotes: "Controlled table row. Source: My6. Period: April 2026."
  },
  {
    id: "m6-unlimited-w9-apr-2026",
    sourceMode: SOURCE_MODE,
    rowType: ROW_TYPE.LINEAR_TV_AVERAGE_TARIFF,
    group: "Groupe M6",
    salesHouse: "M6 Unlimited",
    channel: "W9",
    inventoryType: inventoryType.LINEAR_TV,
    baseDurationSeconds: 30,
    avgDaytimeGrossHt: 2e3,
    avgPrimetimeGrossHt: 1e4,
    fiveSecondCoefficientSourceId: "M6_30_TO_5",
    appliedFiveSecondCoefficient: 0.5,
    avgDaytimeFiveSecondHt: 1e3,
    avgPrimetimeFiveSecondHt: 5e3,
    confidence: "Medium",
    status: "MARKET_ESTIMATE_TO_VALIDATE",
    validationStatus: "estimate_to_validate",
    normalizedStatus: NORMALIZED_MARKET_STATUS,
    governanceType: "CONTROLLED_PLANNING_ASSUMPTION",
    usableInEngine: false,
    sourceNotes: "Controlled table row. Source: My6. Period: April 2026."
  },
  {
    id: "m6-unlimited-6ter-apr-2026",
    sourceMode: SOURCE_MODE,
    rowType: ROW_TYPE.LINEAR_TV_AVERAGE_TARIFF,
    group: "Groupe M6",
    salesHouse: "M6 Unlimited",
    channel: "6ter",
    inventoryType: inventoryType.LINEAR_TV,
    baseDurationSeconds: 30,
    avgDaytimeGrossHt: 1500,
    avgPrimetimeGrossHt: 6e3,
    fiveSecondCoefficientSourceId: "M6_30_TO_5",
    appliedFiveSecondCoefficient: 0.5,
    avgDaytimeFiveSecondHt: 750,
    avgPrimetimeFiveSecondHt: 3e3,
    confidence: "Medium",
    status: "MARKET_ESTIMATE_TO_VALIDATE",
    validationStatus: "estimate_to_validate",
    normalizedStatus: NORMALIZED_MARKET_STATUS,
    governanceType: "CONTROLLED_PLANNING_ASSUMPTION",
    usableInEngine: false,
    sourceNotes: "Controlled table row. Source: My6. Period: April 2026."
  },
  {
    id: "m6-unlimited-gulli-apr-2026",
    sourceMode: SOURCE_MODE,
    rowType: ROW_TYPE.LINEAR_TV_AVERAGE_TARIFF,
    group: "Groupe M6",
    salesHouse: "M6 Unlimited",
    channel: "Gulli",
    inventoryType: inventoryType.LINEAR_TV,
    baseDurationSeconds: 30,
    avgDaytimeGrossHt: 1500,
    avgPrimetimeGrossHt: 5e3,
    fiveSecondCoefficientSourceId: "M6_30_TO_5",
    appliedFiveSecondCoefficient: 0.5,
    avgDaytimeFiveSecondHt: 750,
    avgPrimetimeFiveSecondHt: 2500,
    confidence: "Medium",
    status: "MARKET_ESTIMATE_TO_VALIDATE",
    validationStatus: "estimate_to_validate",
    normalizedStatus: NORMALIZED_MARKET_STATUS,
    governanceType: "CONTROLLED_PLANNING_ASSUMPTION",
    usableInEngine: false,
    sourceNotes: "Controlled table row. Source: My6. Period: April 2026."
  }
];
var bvodStreamingAverageTariffRows = [
  {
    id: "tf1-plus-apr-2026",
    sourceMode: SOURCE_MODE,
    rowType: ROW_TYPE.BVOD_STREAMING_AVERAGE_TARIFF,
    group: "Groupe TF1",
    salesHouse: "TF1 Pub",
    platform: "TF1+",
    inventoryType: "bvod_streaming",
    buyingBasis: "CPM / campaign budget",
    entryBudgetHt: 1e3,
    avgWeeklyBudgetHt: 15e3,
    cpmRangeHt: "10 \u20AC \u2013 20 \u20AC",
    avgCpmHt: 15,
    confidence: "Medium",
    status: "MARKET_ESTIMATE_TO_VALIDATE",
    validationStatus: "estimate_to_validate",
    normalizedStatus: NORMALIZED_MARKET_STATUS,
    governanceType: "CONTROLLED_PLANNING_ASSUMPTION",
    usableInEngine: false,
    sourceNotes: "Controlled table row. Source: TF1 AdManager. Period: April 2026."
  },
  {
    id: "france-tv-platform-apr-2026",
    sourceMode: SOURCE_MODE,
    rowType: ROW_TYPE.BVOD_STREAMING_AVERAGE_TARIFF,
    group: "Groupe France TV",
    salesHouse: "FranceTV Publicit\xE9",
    platform: "france.tv",
    inventoryType: "bvod_streaming",
    buyingBasis: "CPM / campaign budget",
    entryBudgetHt: 5e3,
    avgWeeklyBudgetHt: 1e4,
    cpmRangeHt: "2 \u20AC \u2013 15 \u20AC",
    avgCpmHt: 9,
    confidence: "Medium-Low",
    status: "MARKET_ESTIMATE_TO_VALIDATE",
    validationStatus: "low_confidence",
    normalizedStatus: NORMALIZED_MARKET_STATUS,
    governanceType: "CONTROLLED_PLANNING_ASSUMPTION",
    usableInEngine: false,
    sourceNotes: "Controlled table row. Source: France.TV Publici\xE9. Period: April 2026."
  },
  {
    id: "m6-plus-apr-2026",
    sourceMode: SOURCE_MODE,
    rowType: ROW_TYPE.BVOD_STREAMING_AVERAGE_TARIFF,
    group: "Groupe M6",
    salesHouse: "M6 Unlimited",
    platform: "M6+",
    inventoryType: "bvod_streaming",
    buyingBasis: "CPM / campaign budget",
    entryBudgetHt: 5e3,
    avgWeeklyBudgetHt: 13e3,
    cpmRangeHt: "8 \u20AC \u2013 18 \u20AC",
    avgCpmHt: 13,
    confidence: "Medium",
    status: "MARKET_ESTIMATE_TO_VALIDATE",
    validationStatus: "estimate_to_validate",
    normalizedStatus: NORMALIZED_MARKET_STATUS,
    governanceType: "CONTROLLED_PLANNING_ASSUMPTION",
    usableInEngine: false,
    sourceNotes: "Controlled table row. Source: My6. Period: April 2026."
  }
];
var formatCoefficientRows = [
  {
    id: "M6_30_TO_5",
    salesHouse: "M6 Unlimited",
    channelOrOffer: "M6 national generic",
    sourceId: "M6_RATE_NATIONAL_2026_0202",
    baseDurationSeconds: 30,
    targetDurationSeconds: 5,
    coefficient: 0.5,
    sourcePage: "p.1",
    status: "validated_from_source",
    coefficientStatus: "source_validated",
    validationOwner: "TBD",
    notes: "M6 rate card shows 5s index 50% of base 30s."
  },
  {
    id: "TF1_20_TO_5",
    salesHouse: "TF1 Pub",
    channelOrOffer: "Espace Classique",
    sourceId: "TF1_BOOK_2026",
    baseDurationSeconds: 20,
    targetDurationSeconds: 5,
    coefficient: 0.43,
    sourcePage: "TBD",
    status: "pending_manual_mapping",
    coefficientStatus: "controlled_planning_assumption",
    validationOwner: "TBD",
    notes: "Updated control table now carries the TF1 20s to 5s coefficient. Use as a controlled planning assumption until future platform validation."
  },
  {
    id: "FTV_20_TO_5",
    salesHouse: "FranceTV Publicit\xE9",
    channelOrOffer: "France 2 / 3 / 5 linear",
    sourceId: "FTV_F2_SECTORS_MAY_AUG_2026",
    baseDurationSeconds: 20,
    targetDurationSeconds: 5,
    coefficient: 0.5,
    sourcePage: "TBD",
    status: "pending_manual_mapping",
    coefficientStatus: "controlled_planning_assumption",
    validationOwner: "TBD",
    notes: "Updated control table now carries the FranceTV 20s to 5s coefficient. Use as a controlled planning assumption until future platform validation."
  },
  {
    id: "GENERIC_NO_PRO_RATA",
    salesHouse: "All",
    channelOrOffer: "All offers",
    sourceId: "n/a",
    baseDurationSeconds: null,
    targetDurationSeconds: 5,
    coefficient: null,
    sourcePage: "n/a",
    status: "rule",
    coefficientStatus: "governance_rule",
    validationOwner: "TBD",
    notes: "Governance rule: do not assume 5s = base tariff \xD7 5/base duration unless source explicitly permits it."
  }
];
var grossToNetProfileRows = [
  {
    id: "GTN_CONSERVATIVE",
    profileName: "Conservative",
    description: "Low negotiation / close to gross",
    coreNetFactor: 0.75,
    btsNetFactor: 0.85,
    recommendedUse: "Small advertiser or conservative planning",
    status: "draft",
    notes: "Higher net cost, lower modeled ROI.",
    userAdjustable: true
  },
  {
    id: "GTN_BASE",
    profileName: "Base",
    description: "Standard planning hypothesis",
    coreNetFactor: 0.55,
    btsNetFactor: 0.65,
    recommendedUse: "Default simulation assumption",
    status: "draft",
    notes: "Should be validated against market feedback.",
    userAdjustable: true
  },
  {
    id: "GTN_AGGRESSIVE",
    profileName: "Aggressive",
    description: "Strong negotiation / large buyer context",
    coreNetFactor: 0.35,
    btsNetFactor: 0.45,
    recommendedUse: "Large advertiser / agency-negotiated buying",
    status: "draft",
    notes: "Use carefully; can inflate ROI.",
    userAdjustable: true
  },
  {
    id: "GTN_CUSTOM",
    profileName: "Custom",
    description: "User-specified profile",
    coreNetFactor: null,
    btsNetFactor: null,
    recommendedUse: "Future Rate Card Mode",
    status: "pending",
    notes: "Must display explicit assumptions before use.",
    userAdjustable: true
  }
];
applyBusinessRowState(linearTvAverageTariffRows);
applyBusinessRowState(bvodStreamingAverageTariffRows);
function getLinearTariffRows() {
  return cloneRows(linearTvAverageTariffRows);
}
function getBvodTariffRows() {
  return cloneRows(bvodStreamingAverageTariffRows);
}
function getFormatCoefficientRows() {
  return cloneRows(formatCoefficientRows);
}
function getGrossToNetProfiles() {
  return cloneRows(grossToNetProfileRows);
}
function findLinearTariffRow({ salesHouse, channel }) {
  return linearTvAverageTariffRows.find(
    (row) => row.salesHouse === salesHouse && row.channel === channel
  ) ?? null;
}
function findBvodTariffRow({ salesHouse, platform }) {
  return bvodStreamingAverageTariffRows.find(
    (row) => row.salesHouse === salesHouse && row.platform === platform
  ) ?? null;
}
function findFormatCoefficient({
  salesHouse,
  baseDurationSeconds,
  targetDurationSeconds
}) {
  return formatCoefficientRows.find(
    (row) => row.salesHouse === salesHouse && row.baseDurationSeconds === baseDurationSeconds && row.targetDurationSeconds === targetDurationSeconds
  ) ?? null;
}

// src/lib/rateCardAdapter.js
var SUPPORTED_DAYPARTS = /* @__PURE__ */ new Set(["Daytime", "Primetime"]);
var SUPPORTED_INVENTORY_TYPES = /* @__PURE__ */ new Set(["linear_tv", "bvod_streaming"]);
var MIN_REASONABLE_NET_FACTOR = 0.1;
var MAX_REASONABLE_NET_FACTOR = 1;
function computeAppliedToModelState(row) {
  return Boolean(row?.isSelected && row?.isActive && row?.isValidated);
}
function resolveSelectedRowState(row, overrides = {}) {
  const isSelected = overrides.isSelected ?? row?.isSelected ?? false;
  const isActive = overrides.isActive ?? row?.isActive ?? false;
  const isValidated = overrides.isValidated ?? row?.isValidated ?? false;
  return {
    ...row,
    isSelected,
    isActive,
    isValidated,
    appliedToModel: computeAppliedToModelState({
      isSelected,
      isActive,
      isValidated
    })
  };
}
function roundCurrency(value) {
  return Number.isFinite(value) ? Number(value.toFixed(2)) : value;
}
function roundCount(value) {
  return Number.isFinite(value) ? Number(value.toFixed(2)) : value;
}
function formatBusinessToken(value) {
  return String(value ?? "").replace(/_/g, " ").replace(/\b\w/g, (match) => match.toUpperCase());
}
function clone2(value) {
  return JSON.parse(JSON.stringify(value));
}
function buildFailure(errors, warnings = []) {
  return {
    ok: false,
    errors,
    warnings,
    output: null
  };
}
function mapRateCardStateToUI(row) {
  if (!row) {
    return {
      status: null,
      indicatorTone: "neutral",
      warning: null
    };
  }
  const normalizedRow = resolveSelectedRowState(row);
  if (normalizedRow.appliedToModel) {
    return {
      status: "Applied to ROI model",
      indicatorTone: "applied",
      warning: null
    };
  }
  if (normalizedRow.isSelected && !normalizedRow.isActive) {
    return {
      status: "Selected but not active",
      indicatorTone: "inactive",
      warning: "No active rate-card estimate applied to ROI calculation."
    };
  }
  if (normalizedRow.isSelected && !normalizedRow.isValidated) {
    return {
      status: "Awaiting validation",
      indicatorTone: "pending",
      warning: "No active rate-card estimate applied to ROI calculation."
    };
  }
  return {
    status: null,
    indicatorTone: "neutral",
    warning: null
  };
}
function getGrossToNetProfile(profileId) {
  return grossToNetProfileRows.find((profile) => profile.id === profileId) ?? null;
}
function resolveGrossToNetFactors(selection) {
  const warnings = [];
  const errors = [];
  const profile = getGrossToNetProfile(selection.grossToNetProfileId);
  if (!profile) {
    errors.push(`Missing gross-to-net profile: ${selection.grossToNetProfileId}`);
    return { ok: false, errors, warnings, profile: null, factors: null };
  }
  const hasCoreOverride = selection.userOverrideCoreNetFactor != null;
  const hasBtsOverride = selection.userOverrideBtsNetFactor != null;
  const effectiveCoreNetFactor = hasCoreOverride ? selection.userOverrideCoreNetFactor : profile.coreNetFactor;
  const effectiveBtsNetFactor = hasBtsOverride ? selection.userOverrideBtsNetFactor : profile.btsNetFactor;
  if (effectiveCoreNetFactor == null) {
    errors.push(
      `Missing effective core net factor for profile ${profile.id}. Provide a manual override or complete the profile.`
    );
  }
  if (effectiveBtsNetFactor == null) {
    errors.push(
      `Missing effective BTS net factor for profile ${profile.id}. Provide a manual override or complete the profile.`
    );
  }
  for (const [label, value] of [
    ["core", effectiveCoreNetFactor],
    ["bts", effectiveBtsNetFactor]
  ]) {
    if (value != null && (value < MIN_REASONABLE_NET_FACTOR || value > MAX_REASONABLE_NET_FACTOR)) {
      warnings.push(
        `${label} net factor ${value} is outside the reasonable dormant planning range (${MIN_REASONABLE_NET_FACTOR} to ${MAX_REASONABLE_NET_FACTOR}).`
      );
    }
  }
  return {
    ok: errors.length === 0,
    errors,
    warnings,
    profile,
    factors: {
      selectedGrossToNetProfileId: profile.id,
      profileName: profile.profileName,
      coreNetFactor: profile.coreNetFactor,
      btsNetFactor: profile.btsNetFactor,
      userOverrideCoreNetFactor: selection.userOverrideCoreNetFactor ?? null,
      userOverrideBtsNetFactor: selection.userOverrideBtsNetFactor ?? null,
      effectiveCoreNetFactor,
      effectiveBtsNetFactor,
      assumptionSource: hasCoreOverride || hasBtsOverride ? "manual_override" : "profile"
    }
  };
}
function buildCommonWarnings({ row, warnings, coefficientRow }) {
  if (row.confidence === "Low" || row.confidence === "Medium-Low") {
    warnings.push(`Selected rate-card estimate is ${row.confidence} confidence.`);
  }
  const uiState = mapRateCardStateToUI(row);
  if (uiState.warning) {
    warnings.push(uiState.warning);
  }
  if (coefficientRow && coefficientRow.status !== "validated_from_source") {
    warnings.push(`Selected BTS 5s format index is ${formatBusinessToken(coefficientRow.coefficientStatus ?? coefficientRow.status)}.`);
  }
}
function normalizeLinearTvRateCardSelection(selection) {
  const errors = [];
  const warnings = [];
  if (selection.inventoryType !== "linear_tv") {
    return buildFailure(
      [`normalizeLinearTvRateCardSelection expected inventoryType "linear_tv" but received "${selection.inventoryType}".`],
      warnings
    );
  }
  if (!SUPPORTED_DAYPARTS.has(selection.daypart)) {
    return buildFailure(
      [`Unsupported linear TV daypart: ${selection.daypart}. Supported values are Daytime and Primetime.`],
      warnings
    );
  }
  const matchedRow = findLinearTariffRow({
    salesHouse: selection.salesHouse,
    channel: selection.channel
  }) ?? null;
  if (!matchedRow) {
    return buildFailure(
      [`No linear TV rate-card estimate is available for ${selection.salesHouse} / ${selection.channel}.`],
      warnings
    );
  }
  const row = resolveSelectedRowState(matchedRow, { isSelected: true });
  const coefficientRow = findFormatCoefficient({
    salesHouse: selection.salesHouse,
    baseDurationSeconds: row.baseDurationSeconds,
    targetDurationSeconds: selection.formatDurationSeconds
  }) ?? null;
  if (!coefficientRow) {
    errors.push(
      `No BTS 5s format index is available for ${selection.salesHouse} ${row.baseDurationSeconds}s to ${selection.formatDurationSeconds}s.`
    );
  }
  const grossToNet = resolveGrossToNetFactors(selection);
  warnings.push(...grossToNet.warnings);
  errors.push(...grossToNet.errors);
  const grossTariff = selection.daypart === "Daytime" ? row.avgDaytimeGrossHt : row.avgPrimetimeGrossHt;
  const coefficient = coefficientRow?.coefficient ?? null;
  if (grossTariff == null) {
    errors.push(`No gross tariff estimate is available for ${selection.channel} / ${selection.daypart}.`);
  }
  if (coefficient == null) {
    errors.push("No BTS 5s format index value is available for the current selection.");
  }
  if (coefficient != null && row.appliedFiveSecondCoefficient != null && Math.abs(coefficient - row.appliedFiveSecondCoefficient) > 1e-4) {
    warnings.push(
      `Canonical coefficient ${coefficient} does not match stored applied coefficient ${row.appliedFiveSecondCoefficient} on row ${row.id}.`
    );
  }
  buildCommonWarnings({ row, warnings, coefficientRow });
  if (errors.length > 0) {
    return buildFailure(errors, warnings);
  }
  const grossFiveSecondTariff = roundCurrency(grossTariff * coefficient);
  const normalizedNetFiveSecondTariff = roundCurrency(
    grossFiveSecondTariff * grossToNet.factors.effectiveBtsNetFactor
  );
  const normalizedNetGrossTariff = roundCurrency(
    grossTariff * grossToNet.factors.effectiveCoreNetFactor
  );
  const output = {
    sourceMode: "rate_card",
    inventoryType: "linear_tv",
    salesHouse: selection.salesHouse,
    channel: selection.channel,
    daypart: selection.daypart,
    baseDurationSeconds: row.baseDurationSeconds,
    formatDurationSeconds: selection.formatDurationSeconds,
    grossTariff,
    coefficient,
    grossFiveSecondTariff,
    selectedGrossToNetProfileId: grossToNet.factors.selectedGrossToNetProfileId,
    selectedGrossToNetProfileName: grossToNet.factors.profileName,
    grossToNetAssumptionSource: grossToNet.factors.assumptionSource,
    effectiveCoreNetFactor: grossToNet.factors.effectiveCoreNetFactor,
    effectiveBtsNetFactor: grossToNet.factors.effectiveBtsNetFactor,
    normalizedNetGrossTariff,
    normalizedNetFiveSecondTariff,
    confidence: row.confidence,
    status: row.normalizedStatus ?? row.status,
    validationStatus: row.validationStatus,
    governanceType: row.governanceType,
    coefficientStatus: coefficientRow?.coefficientStatus ?? coefficientRow?.status ?? null,
    label: row.label,
    isSelected: row.isSelected,
    isActive: row.isActive,
    isValidated: row.isValidated,
    appliedToModel: row.appliedToModel,
    sourceRowId: row.id,
    sourceDocumentType: "manual_control_table",
    normalizationTrail: [
      `Matched manual linear tariff row ${row.id}.`,
      `Selected ${selection.daypart} gross tariff ${grossTariff}.`,
      `Resolved canonical coefficient ${coefficientRow.id} = ${coefficient}.`,
      `Computed gross five-second tariff = ${grossTariff} \xD7 ${coefficient} = ${grossFiveSecondTariff}.`,
      `Applied core net factor ${grossToNet.factors.effectiveCoreNetFactor}.`,
      `Applied BTS net factor ${grossToNet.factors.effectiveBtsNetFactor}.`
    ],
    warnings
  };
  return {
    ok: true,
    errors: [],
    warnings,
    output
  };
}
function normalizeBvodStreamingRateCardSelection(selection) {
  const errors = [];
  const warnings = [];
  if (selection.inventoryType !== "bvod_streaming") {
    return buildFailure(
      [`normalizeBvodStreamingRateCardSelection expected inventoryType "bvod_streaming" but received "${selection.inventoryType}".`],
      warnings
    );
  }
  const matchedRow = findBvodTariffRow({
    salesHouse: selection.salesHouse,
    platform: selection.platform
  }) ?? null;
  if (!matchedRow) {
    return buildFailure(
      [`No BVoD / streaming rate-card estimate is available for ${selection.salesHouse} / ${selection.platform}.`],
      warnings
    );
  }
  const row = resolveSelectedRowState(matchedRow, { isSelected: true });
  const grossToNet = resolveGrossToNetFactors(selection);
  warnings.push(...grossToNet.warnings);
  errors.push(...grossToNet.errors);
  for (const [label, value] of [
    ["entryBudgetHt", row.entryBudgetHt],
    ["avgWeeklyBudgetHt", row.avgWeeklyBudgetHt],
    ["avgCpmHt", row.avgCpmHt]
  ]) {
    if (value == null || !Number.isFinite(value)) {
      errors.push(`Missing ${label} for ${row.platform}.`);
    }
  }
  if (!row.cpmRangeHt) {
    errors.push(`Missing CPM range for ${row.platform}.`);
  }
  buildCommonWarnings({ row, warnings, coefficientRow: null });
  if (errors.length > 0) {
    return buildFailure(errors, warnings);
  }
  const estimatedWeeklyImpressions = row.avgWeeklyBudgetHt && row.avgCpmHt ? roundCount(row.avgWeeklyBudgetHt / row.avgCpmHt * 1e3) : null;
  const normalizedNetEntryBudget = roundCurrency(
    row.entryBudgetHt * grossToNet.factors.effectiveBtsNetFactor
  );
  const normalizedNetWeeklyBudget = roundCurrency(
    row.avgWeeklyBudgetHt * grossToNet.factors.effectiveCoreNetFactor
  );
  const output = {
    sourceMode: "rate_card",
    inventoryType: "bvod_streaming",
    salesHouse: selection.salesHouse,
    platform: selection.platform,
    buyingBasis: row.buyingBasis,
    entryBudgetHt: row.entryBudgetHt,
    avgWeeklyBudgetHt: row.avgWeeklyBudgetHt,
    avgCpmHt: row.avgCpmHt,
    cpmRangeHt: row.cpmRangeHt,
    selectedGrossToNetProfileId: grossToNet.factors.selectedGrossToNetProfileId,
    selectedGrossToNetProfileName: grossToNet.factors.profileName,
    grossToNetAssumptionSource: grossToNet.factors.assumptionSource,
    effectiveCoreNetFactor: grossToNet.factors.effectiveCoreNetFactor,
    effectiveBtsNetFactor: grossToNet.factors.effectiveBtsNetFactor,
    normalizedNetEntryBudget,
    normalizedNetWeeklyBudget,
    estimatedWeeklyImpressions,
    confidence: row.confidence,
    status: row.normalizedStatus ?? row.status,
    validationStatus: row.validationStatus,
    governanceType: row.governanceType,
    label: row.label,
    isSelected: row.isSelected,
    isActive: row.isActive,
    isValidated: row.isValidated,
    appliedToModel: row.appliedToModel,
    sourceRowId: row.id,
    sourceDocumentType: "manual_control_table",
    normalizationTrail: [
      `Matched manual BVoD / streaming row ${row.id}.`,
      `Loaded entry budget ${row.entryBudgetHt} and weekly budget ${row.avgWeeklyBudgetHt}.`,
      `Loaded average CPM ${row.avgCpmHt}.`,
      `Applied core net factor ${grossToNet.factors.effectiveCoreNetFactor}.`,
      `Applied BTS net factor ${grossToNet.factors.effectiveBtsNetFactor}.`,
      estimatedWeeklyImpressions != null ? `Estimated weekly impressions = (${row.avgWeeklyBudgetHt} / ${row.avgCpmHt}) \xD7 1000 = ${estimatedWeeklyImpressions}.` : "Estimated weekly impressions unavailable."
    ],
    warnings
  };
  return {
    ok: true,
    errors: [],
    warnings,
    output
  };
}
function normalizeRateCardSelection(selection) {
  if (!selection || typeof selection !== "object") {
    return buildFailure(["Selection object is required."], []);
  }
  if (selection.mode !== "rate_card") {
    return buildFailure(
      [`Unsupported mode: ${selection.mode}. This dormant adapter only supports mode "rate_card".`],
      []
    );
  }
  if (!SUPPORTED_INVENTORY_TYPES.has(selection.inventoryType)) {
    return buildFailure(
      [
        `Unsupported inventoryType: ${selection.inventoryType}. Supported values are ${Array.from(
          SUPPORTED_INVENTORY_TYPES
        ).join(", ")}.`
      ],
      []
    );
  }
  if (selection.inventoryType === "linear_tv") {
    return normalizeLinearTvRateCardSelection(selection);
  }
  return normalizeBvodStreamingRateCardSelection(selection);
}
function buildEngineInputCandidateFromRateCard(normalizedRateCardOutput, options = {}) {
  if (!normalizedRateCardOutput || typeof normalizedRateCardOutput !== "object") {
    return buildFailure(["A normalized rate-card output object is required."], []);
  }
  const warnings = [...normalizedRateCardOutput.warnings ?? []];
  const auditTrail = clone2(normalizedRateCardOutput.normalizationTrail ?? []);
  const baseCandidate = {
    rateCardSourceMode: true,
    rateCardAuditTrail: auditTrail,
    rateCardWarnings: warnings,
    coreNetFactor: normalizedRateCardOutput.effectiveCoreNetFactor ?? null,
    btsNetFactor: normalizedRateCardOutput.effectiveBtsNetFactor ?? null,
    rateCardContext: {
      sourceMode: normalizedRateCardOutput.sourceMode,
      inventoryType: normalizedRateCardOutput.inventoryType,
      sourceRowId: normalizedRateCardOutput.sourceRowId ?? null,
      appliedToModel: normalizedRateCardOutput.appliedToModel ?? false,
      proofLayerAllocationRule: options.proofLayerAllocationRule ?? "bts_tag_add_on"
    }
  };
  let candidate;
  if (normalizedRateCardOutput.inventoryType === "linear_tv") {
    candidate = {
      ...baseCandidate,
      grossLinearMedia: normalizedRateCardOutput.grossTariff ?? null,
      grossLinearBtsAddOn: normalizedRateCardOutput.grossFiveSecondTariff ?? null
    };
  } else if (normalizedRateCardOutput.inventoryType === "bvod_streaming") {
    candidate = {
      ...baseCandidate,
      grossBvodMedia: normalizedRateCardOutput.avgWeeklyBudgetHt ?? null,
      grossBvodBtsAddOn: normalizedRateCardOutput.entryBudgetHt ?? null
    };
  } else {
    return buildFailure(
      [`Unsupported normalized inventoryType: ${normalizedRateCardOutput.inventoryType}.`],
      warnings
    );
  }
  return {
    ok: true,
    errors: [],
    warnings,
    output: candidate
  };
}
function getAvailableRateCardAdapterInputs() {
  return {
    linearRows: getLinearTariffRows(),
    bvodRows: getBvodTariffRows(),
    coefficientRows: getFormatCoefficientRows(),
    grossToNetProfiles: getGrossToNetProfiles()
  };
}
var rateCardAdapterDiagnostics = {
  supportedDayparts: Array.from(SUPPORTED_DAYPARTS),
  supportedInventoryTypes: Array.from(SUPPORTED_INVENTORY_TYPES),
  availableLinearRows: linearTvAverageTariffRows.length,
  availableBvodRows: bvodStreamingAverageTariffRows.length,
  availableFormatCoefficients: getFormatCoefficientRows().length,
  availableGrossToNetProfiles: grossToNetProfileRows.length
};

// src/App.js
var root = document.getElementById("root");
var logoSrc = window.BTS_LOGO_SRC;
var proofMark = window.PROOF_MARK_SRC;
var planningFields = [
  { key: "baseTvBudgetExBts", label: "Base TV budget excl. BTS", type: "currency", step: 1e3, helper: "Workbook baseline TV budget before the proof layer." },
  { key: "linearTvShare", label: "Linear TV share", type: "percent", step: 1, helper: "Automatically rebalances against BVoD share to total 100%." },
  { key: "bvodShare", label: "BVoD share", type: "percent", step: 1, helper: "Automatically rebalances against Linear TV share to total 100%." },
  { key: "attentionOverrideRate", label: "Attention override", type: "percent", step: 0.1, helper: "Optional manual override. Leave at 0 to use the media-context default." },
  { key: "grossLinearBtsAddOn", label: "Gross Linear BTS add-on", type: "currency", step: 1e3 },
  { key: "grossBvodBtsAddOn", label: "Gross BVoD BTS add-on", type: "currency", step: 1e3 },
  { key: "productionTraffickingCost", label: "Production cost", type: "currency", step: 1e3 },
  { key: "techMeasurementCost", label: "Measurement cost", type: "currency", step: 1e3 },
  { key: "btsClientProofFee", label: "BTS client proof PoC fee", type: "currency", step: 100 },
  { key: "btsProofActivationCost", label: "BTS proof activation", type: "currency", step: 100 }
];
var rateCardAdapterInputs = getAvailableRateCardAdapterInputs();
var rateCardInventoryTypes = [
  { value: "linear_tv", label: "Linear TV" },
  { value: "bvod_streaming", label: "BVoD / Streaming" }
];
var rateCardGrossToNetProfiles = rateCardAdapterInputs.grossToNetProfiles.map((profile) => ({
  ...profile,
  shortLabel: profile.profileName
}));
var defaultGrossToNetProfile = rateCardGrossToNetProfiles.find((profile) => profile.id === "GTN_BASE") ?? rateCardGrossToNetProfiles[0] ?? { id: "GTN_BASE", coreNetFactor: 0.55, btsNetFactor: 0.65, shortLabel: "Base" };
var mediaSourceModes = [
  { value: "scenario_model", label: "Scenario model" },
  { value: "rate_card_calibrated", label: "Rate-card calibrated" }
];
var comparisonModes = [
  { value: "tv_only", label: "Baseline (no proof layer)", helper: "" },
  { value: "tv_bts", label: "With proof layer", helper: "" }
];
function getDefaultRateCardPreviewState() {
  return {
    mode: "rate_card",
    inventoryType: "linear_tv",
    salesHouse: "M6 Unlimited",
    channel: "M6",
    platform: "M6+",
    daypart: "Primetime",
    formatDurationSeconds: 5,
    grossToNetProfileId: defaultGrossToNetProfile.id,
    userOverrideCoreNetFactor: null,
    userOverrideBtsNetFactor: null,
    mediaMixProfile: null,
    proofLayerAllocationRule: "bts_tag_add_on"
  };
}
var state = {
  vertical: normalizeVerticalKey("automotive"),
  scenario: "Base",
  mediaSourceMode: "scenario_model",
  comparisonMode: "tv_bts",
  debugMode: false,
  advancedMode: false,
  editingField: null,
  editingSelection: null,
  draftValues: {},
  inputs: getScenarioInputs("automotive", "Base"),
  rateCardPreview: getDefaultRateCardPreviewState(),
  mobileAccordion: {
    inputs: false,
    drivers: false,
    economics: false,
    rateCard: false
  }
};
var verticalEntries = verticalOrder.map((key) => [key, VERTICALS[key]]).filter(([, meta]) => Boolean(meta));
var factorScenarioFields = scenarioOrder.flatMap((scenario) => [
  { key: `coreFactor${scenario}`, label: `Core ${scenario}`, type: "percent", step: 1, compactLabel: true },
  { key: `btsFactor${scenario}`, label: `BTS ${scenario}`, type: "percent", step: 1, compactLabel: true }
]);
function uniqueStrings(values) {
  return [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b));
}
function getRateCardProfile(profileId) {
  return rateCardGrossToNetProfiles.find((profile) => profile.id === profileId) ?? null;
}
function getRateCardPreviewSalesHouses(inventoryType2) {
  const rows = inventoryType2 === "bvod_streaming" ? rateCardAdapterInputs.bvodRows : rateCardAdapterInputs.linearRows;
  return uniqueStrings(rows.map((row) => row.salesHouse));
}
function getRateCardPreviewChannels(salesHouse) {
  return uniqueStrings(
    rateCardAdapterInputs.linearRows.filter((row) => row.salesHouse === salesHouse).map((row) => row.channel)
  );
}
function getRateCardPreviewPlatforms(salesHouse) {
  return uniqueStrings(
    rateCardAdapterInputs.bvodRows.filter((row) => row.salesHouse === salesHouse).map((row) => row.platform)
  );
}
function sanitizeRateCardPreviewSelection(selection) {
  const next = {
    ...getDefaultRateCardPreviewState(),
    ...selection,
    mode: "rate_card",
    proofLayerAllocationRule: "bts_tag_add_on"
  };
  next.inventoryType = next.inventoryType === "bvod_streaming" ? "bvod_streaming" : "linear_tv";
  const availableProfiles = rateCardGrossToNetProfiles.map((profile) => profile.id);
  if (!availableProfiles.includes(next.grossToNetProfileId)) {
    next.grossToNetProfileId = defaultGrossToNetProfile.id;
  }
  if (next.inventoryType === "linear_tv") {
    const salesHouses = getRateCardPreviewSalesHouses("linear_tv");
    if (!salesHouses.includes(next.salesHouse)) {
      next.salesHouse = salesHouses[0] ?? getDefaultRateCardPreviewState().salesHouse;
    }
    const channels = getRateCardPreviewChannels(next.salesHouse);
    if (!channels.includes(next.channel)) {
      next.channel = channels[0] ?? getDefaultRateCardPreviewState().channel;
    }
    next.daypart = next.daypart === "Daytime" ? "Daytime" : "Primetime";
    next.formatDurationSeconds = 5;
  } else {
    const salesHouses = getRateCardPreviewSalesHouses("bvod_streaming");
    if (!salesHouses.includes(next.salesHouse)) {
      next.salesHouse = salesHouses[0] ?? getDefaultRateCardPreviewState().salesHouse;
    }
    const platforms = getRateCardPreviewPlatforms(next.salesHouse);
    if (!platforms.includes(next.platform)) {
      next.platform = platforms[0] ?? getDefaultRateCardPreviewState().platform;
    }
  }
  if (next.grossToNetProfileId === "GTN_CUSTOM") {
    const baseProfile = getRateCardProfile(defaultGrossToNetProfile.id) ?? defaultGrossToNetProfile;
    next.userOverrideCoreNetFactor = Number.isFinite(next.userOverrideCoreNetFactor) ? clamp(next.userOverrideCoreNetFactor, 0.1, 1) : baseProfile.coreNetFactor;
    next.userOverrideBtsNetFactor = Number.isFinite(next.userOverrideBtsNetFactor) ? clamp(next.userOverrideBtsNetFactor, 0.1, 1) : baseProfile.btsNetFactor;
  } else {
    next.userOverrideCoreNetFactor = null;
    next.userOverrideBtsNetFactor = null;
  }
  return next;
}
function patchRateCardPreviewSelection(patch) {
  state.rateCardPreview = sanitizeRateCardPreviewSelection({
    ...state.rateCardPreview,
    ...patch
  });
}
function getRateCardPreviewWarnings(previewResult) {
  return [...previewResult.errors ?? [], ...previewResult.warnings ?? []];
}
function getRateCardLiveScenarioFactorOverrides(candidate) {
  const factorOverrides = {};
  scenarioOrder.forEach((scenario) => {
    factorOverrides[`coreFactor${scenario}`] = candidate.coreNetFactor;
    factorOverrides[`btsFactor${scenario}`] = candidate.btsNetFactor;
  });
  return factorOverrides;
}
function getRateCardLiveCalibration(previewResult) {
  const baseInputs = state.inputs;
  const baseCalibration = {
    mode: state.mediaSourceMode,
    isScenarioModel: state.mediaSourceMode !== "rate_card_calibrated",
    isRateCardCalibrated: state.mediaSourceMode === "rate_card_calibrated",
    isLinearLive: false,
    isBvodPreviewOnly: false,
    effectiveInputs: baseInputs,
    comparisonOverrides: { mediaType: baseInputs.mediaType },
    liveWarnings: [],
    liveModeNote: "Workbook-derived scenario assumptions.",
    liveModeStatus: "Scenario model",
    liveCandidate: null,
    previewOutput: previewResult.ok ? previewResult.output : null
  };
  if (state.mediaSourceMode !== "rate_card_calibrated") {
    return baseCalibration;
  }
  const selection = state.rateCardPreview;
  const modeWarnings = [
    "Planning estimate based on market references and editable gross-to-net assumptions."
  ];
  if (selection.inventoryType !== "linear_tv") {
    return {
      ...baseCalibration,
      isScenarioModel: false,
      isRateCardCalibrated: true,
      isBvodPreviewOnly: true,
      liveWarnings: [
        ...modeWarnings,
        "BVoD Rate Card Mode is not live yet. BVoD remains a preview-only CPM / campaign-budget layer.",
        "No active rate-card estimate applied to ROI calculation."
      ],
      liveModeNote: "BVoD Rate Card Mode is not live yet. BVoD remains a preview-only CPM / campaign-budget layer.",
      liveModeStatus: "Rate-card calibrated"
    };
  }
  if (!previewResult.ok || !previewResult.output) {
    return {
      ...baseCalibration,
      isScenarioModel: false,
      isRateCardCalibrated: true,
      liveWarnings: [...modeWarnings, "No active rate-card estimate applied to ROI calculation.", ...getRateCardPreviewWarnings(previewResult)],
      liveModeNote: "Rate-card calibration could not be applied for the current selection.",
      liveModeStatus: "Rate-card calibrated"
    };
  }
  const rowUiState = mapRateCardStateToUI(previewResult.output);
  if (!previewResult.output.appliedToModel) {
    return {
      ...baseCalibration,
      isScenarioModel: false,
      isRateCardCalibrated: true,
      liveWarnings: [...modeWarnings, ...rowUiState.warning ? [rowUiState.warning] : [], ...getRateCardPreviewWarnings(previewResult)],
      liveModeNote: "The selected rate-card estimate is not currently applied to the ROI model. Scenario assumptions remain active.",
      liveModeStatus: "Rate-card calibrated"
    };
  }
  const candidateResult = buildEngineInputCandidateFromRateCard(previewResult.output, {
    proofLayerAllocationRule: selection.proofLayerAllocationRule
  });
  if (!candidateResult.ok || !candidateResult.output) {
    return {
      ...baseCalibration,
      isScenarioModel: false,
      isRateCardCalibrated: true,
      liveWarnings: [...modeWarnings, ...candidateResult.errors ?? [], ...candidateResult.warnings ?? []],
      liveModeNote: "Rate-card calibration could not be mapped into the live model for the current selection.",
      liveModeStatus: "Rate-card calibrated"
    };
  }
  const candidate = candidateResult.output;
  const factorOverrides = getRateCardLiveScenarioFactorOverrides(candidate);
  const effectiveInputs = {
    ...baseInputs,
    ...factorOverrides,
    grossLinearBtsAddOn: candidate.grossLinearBtsAddOn ?? baseInputs.grossLinearBtsAddOn
  };
  return {
    ...baseCalibration,
    isScenarioModel: false,
    isRateCardCalibrated: true,
    isLinearLive: true,
    effectiveInputs,
    comparisonOverrides: {
      mediaType: baseInputs.mediaType,
      grossLinearBtsAddOn: candidate.grossLinearBtsAddOn ?? baseInputs.grossLinearBtsAddOn,
      ...factorOverrides
    },
    liveWarnings: [...modeWarnings, ...candidateResult.warnings ?? []],
    liveModeNote: "Linear TV proof-layer add-on calibrated from selected sales house, channel, and daypart estimates.",
    liveModeStatus: "Rate-card calibrated",
    liveCandidate: candidate
  };
}
function assertVerticalData(selectedVerticalKey) {
  const missing = [];
  if (!VERTICALS[selectedVerticalKey]) missing.push("VERTICALS");
  if (!getScenarioInputs(selectedVerticalKey, state.scenario, state.inputs.mediaType)) missing.push("scenarioInputs");
  if (!workbookMediaNegotiationAssumptions[selectedVerticalKey]) missing.push("mediaNegotiationAssumptions");
  if (!getScenarioInputs(selectedVerticalKey, state.scenario, state.inputs.mediaType)) missing.push("mediaPlanningInputs");
  if (!getVerticalLogic(selectedVerticalKey)?.length) missing.push("verticalLogic");
  if (missing.length) {
    console.error("Missing vertical data for", selectedVerticalKey, missing);
  }
}
function renderApp() {
  if (!state.vertical) {
  state.vertical = "automotive"; // ou défaut logique
  }
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  const selectedVerticalKey = normalizeVerticalKey(state.vertical);
  const config = verticalConfig[selectedVerticalKey];
  state.rateCardPreview = sanitizeRateCardPreviewSelection(state.rateCardPreview);
  const rateCardPreviewResult = normalizeRateCardSelection(state.rateCardPreview);
  const mediaSourceCalibration = getRateCardLiveCalibration(rateCardPreviewResult);
  const results = computeProofRoi(selectedVerticalKey, mediaSourceCalibration.effectiveInputs);
  const comparison = getComparisonSet(selectedVerticalKey, mediaSourceCalibration.comparisonOverrides);
  const directShare = clamp(1 - results.assistedShareOfImpact, 0, 1);
  const proofShare = clamp(results.assistedShareOfImpact, 0, 1);
  const proofLayerInvestment = results.proofLayerInvestment ?? Math.abs(results.incrementalBtsCost);
  const proofLayerNetContribution = results.proofLayerNetContribution ?? results.netIncrementalDeltaVsTvBaseline;
  const directEstimatedRevenue = results.incrementalRevenue * directShare;
  const assistedEstimatedRevenue = results.incrementalRevenue * proofShare;
  const currentProofLeverage = getProofLeverageDescriptor(results.assistedShareOfImpact);
  const comparisonView = getComparisonViewModel(results, {
    comparisonMode: state.comparisonMode,
    proofLayerInvestment,
    proofLayerNetContribution
  });
  const killerInsight = getKillerInsight(results, comparisonView);
  const currentGroups = {
    ...Object.fromEntries(Object.entries(config.inputGroups || {}).filter(([groupName]) => groupName !== "Advanced")),
    "Media Planning": planningFields
  };
  const assistedAudienceLabel = config.proofLogic === "fmcg" ? "Influenced audience" : "Assisted audience";
  const assistedBaseLabel = config.proofLogic === "automotive" ? "Base bookings" : "Base conversions";
  const driverStats = getDriverStats(selectedVerticalKey, state.inputs, results);
  const verticalLogic = getVerticalLogic(selectedVerticalKey);
  const headerMessage = getDisplayDecisionExplanation(results, comparisonView);
  const interpretationTone = (results.proofLayerNetContribution ?? results.netIncrementalDeltaVsTvBaseline) < 0 || results.btsIncrementalRoi < 1 ? "negative" : "neutral";
  const recommendationTone = results.decision?.tone || (results.netIncrementalDeltaVsTvBaseline < 0 ? "negative" : "positive");
  const recommendationCardTone = getRecommendationCardTone(results);
  const roiLabels = getRoiDisplayLabels(selectedVerticalKey);
  const recommendationMetrics = getRecommendationMetrics(results, comparisonView);
  const recommendationStatus = getRecommendationStatusLabel(results.decision?.status || "Keep and optimize");
  const activeScenarioResults = comparison.find((item) => item.scenario === state.scenario)?.results || results;
  const activeScenarioLeverage = getProofLeverageDescriptor(activeScenarioResults.assistedShareOfImpact);
  const impactDirectShare = comparisonView.isTvOnly ? 1 : directShare;
  const impactProofShare = comparisonView.isTvOnly ? 0 : proofShare;
  const impactDirectConversions = comparisonView.isTvOnly ? 0 : results.directConversions;
  const impactAssistedConversions = comparisonView.isTvOnly ? 0 : results.assistedConversions;
  const impactTotalConversions = comparisonView.isTvOnly ? 0 : results.totalIncrementalConversions;
  const impactDirectRevenue = comparisonView.isTvOnly ? 0 : directEstimatedRevenue;
  const impactAssistedRevenue = comparisonView.isTvOnly ? 0 : assistedEstimatedRevenue;
  const scenarioCardsHtml = comparison.map(({ scenario, results: itemResults }) => {
    const leverage = getProofLeverageDescriptor(itemResults.assistedShareOfImpact);
    return `
      <article class="${getScenarioClass(scenario, state.scenario)} ${leverage.tone}" data-selector="scenario" data-value="${scenario}">
        <span class="scenario-card-title">${scenario}</span>
        <strong class="scenario-card-value">${formatPercent(itemResults.assistedShareOfImpact)}</strong>
        <small class="scenario-card-band ${leverage.tone}">${leverage.label}</small>
      </article>
    `;
  }).join("");
  root.innerHTML = `
    <main class="app-shell">
      <header class="topbar">
        <div class="brand-lockup">
         <img class="brand-logo" src="${window.BTS_LOGO_SRC}" alt="BuyTryShare logo" />
        </div>
        <div class="header-spacer" aria-hidden="true"></div>
        <div class="product-lockup">
        <img class="proof-logo-inline" src="${window.PROOF_MARK_SRC}" alt="The Proof ROI Engine" />
        </div>
      </header>

      <section class="top-overview">
        <section class="economics-overview panel">
          <div class="overview-grid">
            <div class="overview-column revenue">
              <h3>Revenue</h3>
              <div class="metric">
                <label>${comparisonView.revenuePrimaryLabel}</label>
                <value class="${comparisonView.revenuePrimaryTone}">${comparisonView.revenuePrimaryValue}</value>
              </div>
              <div class="metric">
                <label>${comparisonView.revenueSecondaryLabel}</label>
                <value class="${comparisonView.revenueSecondaryTone}">${comparisonView.revenueSecondaryValue}</value>
              </div>
              <div class="metric">
                <label>${comparisonView.revenueTertiaryLabel}</label>
                <value class="${comparisonView.revenueTertiaryTone}">${comparisonView.revenueTertiaryValue}</value>
              </div>
            </div>

            <div class="overview-column economics">
              <h3>Economics</h3>
              <div class="metric">
                <label>${comparisonView.economicsPrimaryLabel}</label>
                <value>${comparisonView.economicsPrimaryValue}</value>
              </div>
              <div class="metric ${comparisonView.economicsSecondaryState}">
                <label>${comparisonView.economicsSecondaryLabel}</label>
                <value class="${comparisonView.economicsSecondaryTone}">${comparisonView.economicsSecondaryValue}</value>
              </div>
              <div class="metric">
                <label>${comparisonView.economicsTertiaryLabel}</label>
                <value>${comparisonView.economicsTertiaryValue}</value>
              </div>
            </div>
          </div>
        </section>

        <section class="top-kpi-row">
          <article class="card panel contrast-card interpretation-card ${interpretationTone}">
            <span>Interpretation</span>
            <div class="decision-summary-text interpretation-text-block">
              <h2>TV baseline vs proof layer</h2>
              <p>Model suggests incremental value under current assumptions. Performance depends on media efficiency and execution conditions.</p>
            </div>
          </article>
          <article class="card panel contrast-card model-card">
            <span>Model</span>
            <div class="model-toggle">
              <div class="chip-row comparison-toggle-chip-row">
                ${comparisonModes.map(({ value, label, helper }) => `
                  <button type="button" class="chip ${state.comparisonMode === value ? "active" : ""}" data-comparison-mode="${value}">
                    ${label}
                    ${helper ? `<span class="chip-subcopy">${helper}</span>` : ""}
                  </button>
                `).join("")}
              </div>
            </div>
          </article>
        </section>
      </section>

      <section class="decision-contrast-grid kpi-row">
        <article class="panel contrast-card kpi-card hero-card-value">
          <span>${comparisonView.heroValueLabel}</span>
          <strong class="contrast-value kpi-value ${comparisonView.heroValueTone}">${comparisonView.heroValue}</strong>
        </article>
        <article class="panel contrast-card kpi-card hero-card-investment">
          <span>${comparisonView.heroCostLabel}</span>
          <strong class="contrast-value kpi-value">${comparisonView.heroCost}</strong>
        </article>
        <article class="panel contrast-card kpi-card hero-card-roi">
          <span>${comparisonView.heroRoiLabel}</span>
          <strong class="contrast-value kpi-value ${comparisonView.heroRoiTone}">${comparisonView.heroRoi}</strong>
          ${comparisonView.heroRoiHelper ? `<small class="contrast-helper">${comparisonView.heroRoiHelper}</small>` : ""}
        </article>
        <article class="panel contrast-card kpi-card hero-card-net">
          <span>${comparisonView.heroNetLabel}</span>
          <strong class="contrast-value kpi-value ${comparisonView.heroNetTone}">${comparisonView.heroNet}</strong>
        </article>
      </section>

      <section class="mobile-executive-stack">
        <article class="panel recommendation-panel decision-panel ${recommendationCardTone} mobile-recommendation-panel">
          <div class="panel-header compact">
            <div>
              <p class="section-label">Action</p>
              <h2>Recommended action</h2>
            </div>
          </div>
          <div class="recommendation-copy">
            <strong>${recommendationStatus}</strong>
            <p>${getDisplayDecisionExplanation(results, comparisonView)}</p>
          </div>
        </article>
      </section>

      <section class="panel selector-panel mobile-scenario-focus">
        <div class="panel-header">
          <div>
            <p class="section-label">Scenario</p>
          </div>
        </div>
        <div class="scenario-cards mobile-scenario-stack">
          ${scenarioCardsHtml}
        </div>
      </section>

      <section class="impact-brand-grid">
        <article class="panel impact-panel">
          <div class="panel-header">
            <div>
              <p class="section-label">Impact split</p>
              <h2>Direct vs assisted conversion impact</h2>
            </div>
          </div>
          <div class="impact-meter">
            <div class="impact-meter-segment direct" style="width:${impactDirectShare * 100}%"></div>
            <div class="impact-meter-segment proof" style="width:${impactProofShare * 100}%"></div>
          </div>
          <div class="impact-grid">
            ${renderImpactMetricCard({
    label: "Direct impact",
    value: formatCurrency(impactDirectRevenue),
    shareLabel: `${formatPercent(comparisonView.isTvOnly ? 0 : directShare)} of modeled incremental value`,
    revenueLabel: `${formatNumber(impactDirectConversions)} conversions`
  })}
            ${renderImpactMetricCard({
    label: "Assisted impact",
    value: formatCurrency(impactAssistedRevenue),
    shareLabel: `${formatPercent(comparisonView.isTvOnly ? 0 : proofShare)} share of value driven by proof`,
    revenueLabel: `${formatNumber(impactAssistedConversions)} conversions`
  })}
            ${renderImpactMetricCard({
    label: "Proof-driven impact share",
    value: formatPercent(comparisonView.isTvOnly ? 0 : results.assistedShareOfImpact),
    shareLabel: `${formatCurrency(impactAssistedRevenue)} estimated revenue allocation`,
    revenueLabel: comparisonView.isTvOnly ? "Proof-layer impact is not applied in the TV-only baseline view." : "Higher proof leverage can raise modeled value, but ROI still depends on efficient activation cost.",
    highlight: true
  })}
          </div>
          <p class="impact-interpretation">The proof layer creates value when direct and assisted incremental impact generate enough additional revenue to exceed the activation investment.</p>
          <p class="impact-interpretation impact-interpretation-subtle">Estimated incremental contribution depends on media efficiency and execution conditions.</p>
        </article>
      </section>

      <section class="control-grid">
        <article class="panel selector-panel">
          <div class="panel-header">
            <div>
              <p class="section-label">Vertical</p>
              <h2>Category model</h2>
            </div>
          </div>
          <div class="chip-row">
            ${verticalEntries.map(([key, meta]) => renderChip(meta.label, selectedVerticalKey === key, "vertical", key)).join("")}
          </div>
        </article>
        <article class="panel selector-panel desktop-scenario-panel">
          <div class="panel-header">
            <div>
              <p class="section-label">Scenario</p>
            </div>
          </div>
          <div class="chip-row">
            ${scenarioOrder.map((item) => renderChip(item, state.scenario === item, "scenario")).join("")}
          </div>
          <div class="scenario-cards">
            ${scenarioCardsHtml}
          </div>
        </article>
        <article class="panel selector-panel">
          <div class="panel-header">
            <div>
              <p class="section-label">Media</p>
              <h2>Media context</h2>
            </div>
          </div>
          <div class="chip-row">
            ${Object.keys(mediaTypes).map((item) => renderChip(item, state.inputs.mediaType === item, "mediaType")).join("")}
          </div>
          <p class="panel-note">Media type adjusts modeled attention and media economics without changing the decision-first view.</p>
        </article>
      </section>

      ${renderNegotiationBlock(mediaSourceCalibration)}
      ${renderRateCardPreviewPanel(state.rateCardPreview, rateCardPreviewResult, mediaSourceCalibration)}

      <section class="workspace-grid decision-flow">
        <aside class="left-rail">
          <article class="panel input-panel detail-panel mobile-collapsible ${state.mobileAccordion.inputs ? "is-open" : ""}">
            <div class="panel-header">
              <div>
                <p class="section-label">Inputs</p>
                <h2>Campaign configuration</h2>
              </div>
              <button type="button" class="mobile-accordion-toggle" data-mobile-accordion="inputs">${state.mobileAccordion.inputs ? "Hide" : "Show"}</button>
            </div>
            <div class="mobile-panel-body">
              ${renderSalesControls()}
              ${Object.entries(currentGroups).map(([groupName, fields]) => renderFieldGroup(groupName, fields)).join("")}
            </div>
          </article>
        </aside>

        <section class="center-rail">
          <article class="panel path-panel detail-panel drivers-panel mobile-collapsible ${state.mobileAccordion.drivers ? "is-open" : ""}">
            <div class="panel-header">
              <div>
                <p class="section-label">Drivers</p>
                <h2>Model Drivers</h2>
              </div>
              <button type="button" class="mobile-accordion-toggle" data-mobile-accordion="drivers">${state.mobileAccordion.drivers ? "Hide" : "Show"}</button>
            </div>
            <div class="mobile-panel-body">
              ${driverStats.map(([label, value]) => renderStat(label, value)).join("")}
              ${renderStat("Media context", state.inputs.mediaType)}
            </div>
          </article>

          <article class="panel path-panel detail-panel">
            <div class="panel-header">
              <div>
                <p class="section-label">Vertical logic</p>
                <h2>How this category behaves</h2>
              </div>
            </div>
            <div class="logic-list">
              ${verticalLogic.map((line) => `<div class="logic-item">${line}</div>`).join("")}
            </div>
          </article>

          <article class="panel path-panel detail-panel">
            <div class="panel-header">
              <div>
                <p class="section-label">Simulation</p>
                <h2>Break-even planning</h2>
              </div>
            </div>
            ${renderStat("Break-even media cost", formatCurrency(results.breakEvenMediaCost))}
            ${renderStat("Gap vs current cost", formatSignedCurrency(results.breakEvenGap))}
          </article>
        </section>

        <section class="right-rail">
          <article class="panel results-panel business-consequences-panel">
            <div class="panel-header">
              <div>
                <p class="section-label">Outputs</p>
                <h2>Business consequences</h2>
              </div>
            </div>
            <div class="business-consequences-layout">
              <div class="business-context-row">
                ${renderMetricCard("Direct conversion impact", formatNumber(comparisonView.isTvOnly ? 0 : results.directConversions), false, "", "", "neutral-metric")}
                ${renderMetricCard("Assisted conversion impact", formatNumber(comparisonView.isTvOnly ? 0 : results.assistedConversions), false, "", "", "neutral-metric")}
                ${renderMetricCard("Total incremental conversions", formatNumber(comparisonView.isTvOnly ? 0 : results.totalIncrementalConversions), false, "", "", "neutral-metric")}
              </div>
              <div class="business-row business-row-performance">
                ${renderMetricCard("Incremental revenue", formatCurrency(comparisonView.isTvOnly ? 0 : results.incrementalRevenue), false, getValueTone("Incremental revenue", comparisonView.isTvOnly ? 0 : results.incrementalRevenue), "", "performance-metric")}
                ${renderMetricCard("Incremental profit", formatCurrency(comparisonView.isTvOnly ? 0 : results.incrementalProfit), false, getValueTone("Incremental profit", comparisonView.isTvOnly ? 0 : results.incrementalProfit), "", "performance-metric")}
                ${renderMetricCard(roiLabels.incremental, comparisonView.isTvOnly ? formatRatio(0) : formatSignedRatio(results.roiIncremental), false, getValueTone("ROI incremental", comparisonView.isTvOnly ? 0 : results.roiIncremental), "", "performance-metric")}
              </div>
              <div class="business-row business-row-cost">
                ${renderMetricCard("TV-only cost", formatCurrency(results.tvOnlyCampaignCost), false, "", "", "neutral-metric")}
                ${renderMetricCard(state.comparisonMode === "tv_bts" ? "Total TV+BTS cost" : "Proof layer investment", state.comparisonMode === "tv_bts" ? formatCurrency(results.totalCampaignCost) : formatCurrency(0), false, "", "", "neutral-metric")}
              </div>
              <div class="business-row business-row-strategic">
                ${renderMetricCard(roiLabels.total, formatRatio(comparisonView.isTvOnly ? results.tvOnlyRoi : results.roiTotal), false, "", "Total campaign ROI", "strategic-metric")}
                ${renderMetricCard(roiLabels.tv, formatRatio(results.tvOnlyRoi), false, "", "", "strategic-metric")}
                ${state.comparisonMode === "tv_bts" ? renderMetricCard(roiLabels.proof, formatSignedRatio(results.btsIncrementalRoi), false, "", "Incremental layer efficiency", "strategic-metric") : renderMetricCard(roiLabels.proof, formatRatio(0), false, "", "Incremental layer efficiency", "strategic-metric")}
              </div>
            </div>
            <p class="panel-note roi-helper">Workbook-modeled ROI based on the vertical\u2019s business-value logic, not a guaranteed commercial outcome.</p>
          </article>

          <article class="panel path-panel commerce-path-panel detail-panel">
            <div class="panel-header compact">
              <div>
                <p class="section-label">Commerce path</p>
                <h2>How value is created</h2>
              </div>
            </div>
            ${renderValueFlow(["Audience", "Exposure", "Consideration", "Conversion", "Revenue"])}

            <section class="commerce-path-section">
              <div class="panel-header compact">
                <div>
                  <p class="section-label">Direct</p>
                  <h3>${config.directPathLabel}</h3>
                </div>
              </div>
              ${renderStat("Attentive audience", formatNumber(results.attentiveAudience))}
              ${renderStat("QR scans", formatNumber(results.qrScans))}
              ${renderStat("Qualified visits", formatNumber(results.qualifiedVisits))}
              ${renderStat("Direct path revenue", formatCurrency(results.directRevenue), getValueTone("Direct path revenue", results.directRevenue))}
            </section>

            <section class="commerce-path-section assisted-section">
              <div class="panel-header compact">
                <div>
                  <p class="section-label">Assisted</p>
                  <h3>${config.assistedPathLabel}</h3>
                </div>
              </div>
              ${renderStat(assistedAudienceLabel, formatNumber(results.assistedAudience))}
              ${renderStat(assistedBaseLabel, formatNumber(results.assistedBaseConversions))}
              ${renderStat("Assisted path revenue", formatCurrency(results.assistedRevenue), getValueTone("Assisted path revenue", results.assistedRevenue))}
              ${renderStat("Conversion uplift", formatPercent(results.conversionUpliftOnInfluencedAudience))}
            </section>
          </article>

          <article class="panel path-panel detail-panel economics-panel mobile-collapsible ${state.mobileAccordion.economics ? "is-open" : ""}">
            <div class="panel-header compact">
              <div>
                <p class="section-label">Economics</p>
                <h2>TV & BTS Media Economics</h2>
              </div>
              <button type="button" class="mobile-accordion-toggle" data-mobile-accordion="economics">${state.mobileAccordion.economics ? "Hide" : "Show"}</button>
            </div>
            <div class="mobile-panel-body">
            <section class="economics-breakdown">
              <div class="eco-section">
                <h4>TV baseline</h4>
                ${renderStat("Gross Linear Media", formatCurrency(results.grossLinearMedia))}
                ${renderStat("Gross BVoD Media", formatCurrency(results.grossBvodMedia))}
                ${renderStat("Core net factor", formatPercent(results.coreNetFactor))}
                ${renderStat("Net TV media investment", formatCurrency(results.netLinearMedia + results.netBvodMedia))}
                ${renderStat(roiLabels.tv, formatRatio(results.tvOnlyRoi), getValueTone("ROI total", results.tvOnlyRoi))}
                ${renderStat("TV-only generated revenue", formatCurrency(results.tvOnlyGeneratedRevenue), getValueTone("Incremental revenue", results.tvOnlyGeneratedRevenue))}
              </div>

              ${state.comparisonMode === "tv_bts" ? `
                <div class="eco-section">
                  <h4>BTS incremental layer</h4>
                  ${renderStat("Gross Linear BTS Add-on", formatCurrency(results.grossLinearBtsAddOn))}
                  ${renderStat("Gross BVoD BTS Add-on", formatCurrency(results.grossBvodBtsAddOn))}
                  ${renderStat("BTS net factor", formatPercent(results.btsNetFactor))}
                  ${renderStat("Net BTS media add-on", formatCurrency(results.incrementalBtsMediaCost))}
                  ${renderStat("Production / traffic", formatCurrency(results.productionTraffickingCost))}
                  ${renderStat("BVoD tech measurement", formatCurrency(results.techMeasurementCost))}
                  ${renderStat("BTS PoC fee", formatCurrency(results.totalBtsCompletePocFee))}
                  ${renderStat("Incremental BTS cost", formatCurrency(results.incrementalBtsCost))}
                  ${renderStat("BTS incremental value", formatCurrency(results.btsIncrementalValue), getValueTone("Incremental profit", results.btsIncrementalValue))}
                  ${renderStat(roiLabels.proof, formatSignedRatio(results.btsIncrementalRoi), getValueTone("ROI incremental", results.btsIncrementalRoi))}
                </div>
              ` : ""}

              <div class="eco-section total">
                <h4>${state.comparisonMode === "tv_bts" ? "Total campaign" : "TV-only view"}</h4>
                ${renderStat(state.comparisonMode === "tv_bts" ? "Total modeled campaign investment" : "TV-only campaign investment", formatCurrency(state.comparisonMode === "tv_bts" ? results.totalCampaignCost : results.tvOnlyCampaignCost))}
                ${renderStat(state.comparisonMode === "tv_bts" ? "Total revenue TV+BTS" : "TV-only generated revenue", formatCurrency(state.comparisonMode === "tv_bts" ? results.totalRevenueWithBts : results.tvOnlyGeneratedRevenue), getValueTone("Incremental revenue", state.comparisonMode === "tv_bts" ? results.totalRevenueWithBts : results.tvOnlyGeneratedRevenue))}
                ${renderStat("Net contribution", state.comparisonMode === "tv_bts" ? formatSignedCurrency(results.proofLayerNetContribution ?? results.netIncrementalDeltaVsTvBaseline) : formatCurrency(0), state.comparisonMode === "tv_bts" ? getValueTone("Current media gap", results.proofLayerNetContribution ?? results.netIncrementalDeltaVsTvBaseline) : "")}
              </div>
            </section>
            </div>
          </article>

          <article class="panel path-panel recommendation-panel decision-panel ${recommendationCardTone}">
            <div class="panel-header compact">
              <div>
                <p class="section-label">Action</p>
                <h2>RECOMMENDED ACTION</h2>
              </div>
            </div>
            <div class="recommendation-copy">
              <strong>${recommendationStatus}</strong>
              <p>${getDisplayDecisionExplanation(results, comparisonView)}</p>
            </div>
            ${recommendationMetrics.map((metric) => renderStat(metric.label, metric.value, metric.tone || "")).join("")}
          </article>

          ${state.debugMode ? renderDebugPanel(results.debugRows) : ""}
          ${state.debugMode ? renderCompletenessPanel(results.mappingValidationRows || []) : ""}
          ${state.debugMode ? renderValidationPanel(results.validationRows) : ""}
        </section>
      </section>

      ${renderRateCardMethodologySection(rateCardPreviewResult, sanitizeRateCardPreviewSelection(state.rateCardPreview))}

      <footer class="footer-signature">
        <span>BuyTryShare</span>
        <span>Strategic Proof ROI demo</span>
      </footer>
    </main>
  `;
  bindInteractions();
  if (state.editingField) {
    const activeInput = root.querySelector(`[data-input-key="${state.editingField}"]`);
    if (activeInput) {
      activeInput.focus({ preventScroll: true });
      const selection = state.editingSelection;
      if (selection && typeof activeInput.setSelectionRange === "function") {
        const start = Math.min(selection.start ?? 0, activeInput.value.length);
        const end = Math.min(selection.end ?? start, activeInput.value.length);
        activeInput.setSelectionRange(start, end);
      }
    }
    window.scrollTo(scrollX, scrollY);
  }
  window.__appLoaded = true;
}
function bindInteractions() {
  root.querySelectorAll("[data-selector]").forEach((button) => {
    button.addEventListener("click", () => {
      const { selector, value } = button.dataset;
      if (selector === "vertical") {
        const selectedVerticalKey = normalizeVerticalKey(value);
        state.vertical = selectedVerticalKey;
        const nextInputs = getScenarioInputs(selectedVerticalKey, state.scenario);
        if (nextInputs) state.inputs = nextInputs;
        assertVerticalData(selectedVerticalKey);
        if (state.advancedMode) {
          applyAdvancedFactorDefaults();
        }
      } else if (selector === "scenario") {
        const selectedVerticalKey = normalizeVerticalKey(state.vertical);
        const factorOverrides = getCurrentFactorOverrides();
        state.scenario = value;
        const nextInputs = getScenarioInputs(selectedVerticalKey, value, state.inputs.mediaType);
        if (nextInputs) state.inputs = { ...nextInputs, ...factorOverrides };
      } else if (selector === "mediaType") {
        const selectedVerticalKey = normalizeVerticalKey(state.vertical);
        const factorOverrides = getCurrentFactorOverrides();
        const preservedBusinessInputs = Object.fromEntries(
          Object.entries(verticalConfig[selectedVerticalKey].inputGroups).filter(([groupName]) => groupName !== "Advanced").flatMap(([, fields]) => fields.map((field) => [field.key, state.inputs[field.key]]))
        );
        state.inputs = {
          ...getScenarioInputs(selectedVerticalKey, state.scenario, value) || {},
          ...factorOverrides,
          ...preservedBusinessInputs,
          mediaType: value
        };
      }
      renderApp();
    });
  });
  root.querySelectorAll("[data-select-role]").forEach((select) => {
    select.addEventListener("change", (event) => {
      const el = event.currentTarget;
      const { selectRole } = el.dataset;
      const value = el.value;
      if (selectRole === "vertical") {
        const selectedVerticalKey = normalizeVerticalKey(value);
        state.vertical = selectedVerticalKey;
        const nextInputs = getScenarioInputs(selectedVerticalKey, state.scenario, state.inputs.mediaType);
        if (nextInputs) state.inputs = nextInputs;
        assertVerticalData(selectedVerticalKey);
        if (state.advancedMode) {
          applyAdvancedFactorDefaults();
        }
      } else if (selectRole === "scenario") {
        const selectedVerticalKey = normalizeVerticalKey(state.vertical);
        const factorOverrides = getCurrentFactorOverrides();
        state.scenario = value;
        const nextInputs = getScenarioInputs(selectedVerticalKey, value, state.inputs.mediaType);
        if (nextInputs) state.inputs = { ...nextInputs, ...factorOverrides };
      }
      renderApp();
    });
  });
  root.querySelectorAll("[data-rate-card-preview-selector]").forEach((button) => {
    button.addEventListener("click", () => {
      const { rateCardPreviewSelector, value } = button.dataset;
      if (rateCardPreviewSelector === "inventoryType") {
        patchRateCardPreviewSelection({
          inventoryType: value,
          salesHouse: null,
          channel: null,
          platform: null
        });
      }
      renderApp();
    });
  });
  root.querySelectorAll("[data-media-source-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.mediaSourceMode = button.dataset.mediaSourceMode === "rate_card_calibrated" ? "rate_card_calibrated" : "scenario_model";
      renderApp();
    });
  });
  root.querySelectorAll("[data-comparison-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.comparisonMode = button.dataset.comparisonMode === "tv_only" ? "tv_only" : "tv_bts";
      renderApp();
    });
  });
  root.querySelectorAll("[data-rate-card-preview-field]").forEach((select) => {
    select.addEventListener("change", (event) => {
      const el = event.currentTarget;
      const { rateCardPreviewField } = el.dataset;
      const value = el.value;
      if (rateCardPreviewField === "grossToNetProfileId") {
        patchRateCardPreviewSelection({
          grossToNetProfileId: value
        });
      } else {
        patchRateCardPreviewSelection({
          [rateCardPreviewField]: value
        });
      }
      renderApp();
    });
  });
  root.querySelectorAll("[data-rate-card-preview-net-factor]").forEach((input) => {
    input.addEventListener("input", (event) => {
      const el = event.currentTarget;
      const raw = parseUiNumber(el.value);
      const nextValue = Number.isFinite(raw) ? clamp(raw, 0.1, 1) : null;
      if (el.dataset.rateCardPreviewNetFactor === "core") {
        patchRateCardPreviewSelection({ userOverrideCoreNetFactor: nextValue });
      } else if (el.dataset.rateCardPreviewNetFactor === "bts") {
        patchRateCardPreviewSelection({ userOverrideBtsNetFactor: nextValue });
      }
      renderApp();
    });
  });
  root.querySelectorAll("[data-mobile-accordion]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.mobileAccordion;
      if (!key) return;
      state.mobileAccordion[key] = !state.mobileAccordion[key];
      renderApp();
    });
  });
  root.querySelectorAll("[data-input-key]").forEach((input) => {
    input.addEventListener("focus", (event) => {
      const el = event.currentTarget;
      const { inputKey, inputKind } = el.dataset;
      state.editingField = inputKey;
      state.draftValues[inputKey] = rawModelToDraft(Number(el.dataset.modelValue), inputKind);
      state.editingSelection = null;
      el.value = state.draftValues[inputKey] ?? "";
    });
    input.addEventListener("input", (event) => {
      const el = event.currentTarget;
      const { inputKey, inputKind } = el.dataset;
      const draft = sanitizeDraft(el.value, inputKind);
      const selectionStart = Math.min(el.selectionStart ?? draft.length, draft.length);
      const selectionEnd = Math.min(el.selectionEnd ?? draft.length, draft.length);
      state.editingField = inputKey;
      state.draftValues[inputKey] = draft;
      state.editingSelection = { start: selectionStart, end: selectionEnd };
      if (el.value !== draft) {
        el.value = draft;
        if (typeof el.setSelectionRange === "function") {
          const start = Math.min(selectionStart, draft.length);
          const end = Math.min(selectionEnd, draft.length);
          el.setSelectionRange(start, end);
        }
      }
      const parsed = parseDraft(draft, inputKind);
      if (parsed !== null) {
        commitInputValue(inputKey, normalizeParsedValue(parsed, inputKind));
      }
    });
    input.addEventListener("blur", (event) => {
      const el = event.currentTarget;
      const { inputKey, inputKind } = el.dataset;
      const draft = state.draftValues[inputKey] ?? sanitizeDraft(el.value, inputKind);
      const parsed = parseDraft(draft, inputKind);
      if (parsed !== null) {
        commitInputValue(inputKey, normalizeParsedValue(parsed, inputKind));
      }
      delete state.draftValues[inputKey];
      state.editingField = null;
      state.editingSelection = null;
      renderApp();
    });
  });
  root.querySelectorAll("[data-action='toggle-debug']").forEach((button) => {
    button.addEventListener("click", () => {
      state.debugMode = !state.debugMode;
      renderApp();
    });
  });
  root.querySelectorAll("[data-action='toggle-advanced']").forEach((button) => {
    button.addEventListener("click", () => {
      state.advancedMode = !state.advancedMode;
      if (state.advancedMode) {
        applyAdvancedFactorDefaults();
      } else {
        clearAdvancedFactorOverrides();
      }
      renderApp();
    });
  });
  root.querySelectorAll("[data-slider-key]").forEach((input) => {
    input.addEventListener("input", (event) => {
      const el = event.currentTarget;
      const next = parseUiNumber(el.value);
      state.inputs[el.dataset.sliderKey] = next;
      renderApp();
    });
  });
  root.querySelectorAll("[data-toggle-proof]").forEach((button) => {
    button.addEventListener("click", () => {
      state.inputs.proofEnabled = button.dataset.toggleProof === "on";
      renderApp();
    });
  });
}
function renderFieldGroup(groupName, fields) {
  const gridClass = groupName === "Proof" ? "field-grid proof-grid" : "field-grid";
  return `
    <section class="field-group input-group">
      <div class="field-group-header">
        <div class="field-group-heading">
          <h3>${groupName}</h3>
          ${groupName === "Media Planning" ? renderAdvancedToggle() : ""}
        </div>
      </div>
      <div class="${gridClass}">
        ${fields.map((field) => renderField(field, groupName)).join("")}
      </div>
      ${groupName === "Media Planning" && state.advancedMode ? renderAdvancedFactorMatrix() : ""}
    </section>
  `;
}
function renderField(field, groupName = "") {
  const rawValue = state.inputs[field.key] ?? 0;
  const isProofField = groupName === "Proof";
  const selectedVerticalKey = normalizeVerticalKey(state.vertical);
  const isObservationWindow = field.key === "observationWindow" && selectedVerticalKey !== "automotive";
  const isFullWidth = !field.compactLabel && (Boolean(field.helper) || field.label.length > 24);
  const kind = getFieldKind(field);
  return `
    <label class="field input-field ${isProofField ? "proof-field" : ""} ${field.type === "percent" ? "field-percent" : ""} ${isObservationWindow ? "field-with-unit" : ""} ${isFullWidth ? "field-full" : "field-compact"}">
      <span>${field.label}</span>
      ${field.helper ? `<small>${field.helper}</small>` : ""}
      <div class="field-input-row input-row ${isObservationWindow ? "input-with-unit" : ""}">
        ${renderEditableMetricInput({
    fieldKey: field.key,
    value: rawValue,
    kind,
    prefix: kind === "currency" ? "\u20AC" : "",
    suffix: kind === "percent" ? "%" : "",
    wrapperClass: kind === "currency" ? "has-prefix" : kind === "percent" ? "has-suffix percent-input-wrapper" : "",
    inputClass: kind === "percent" ? "funnel-input" : ""
  })}
        ${isObservationWindow ? '<span class="input-unit">days</span>' : ""}
      </div>
      <span class="field-helper field-helper-placeholder">placeholder</span>
    </label>
  `;
}
function renderSalesControls() {
  return `
    <section class="field-group sales-controls">
      <div class="field-group-header">
        <h3>Sales simulation</h3>
      </div>
      <div class="field-grid">
        ${renderRangeControl("baseTvBudgetExBts", "TV budget slider", 5e4, 1e6, 1e4, state.inputs.baseTvBudgetExBts, "currency")}
        <div class="proof-toggle">
          <span>Proof scenario</span>
          <div class="chip-row">
            <button type="button" class="chip ${state.inputs.proofEnabled !== false ? "active" : ""}" data-toggle-proof="on">Proof ON</button>
            <button type="button" class="chip ${state.inputs.proofEnabled === false ? "active" : ""}" data-toggle-proof="off">Proof OFF</button>
          </div>
        </div>
      </div>
    </section>
  `;
}
function renderRangeControl(key, label, min, max, step, value, mode) {
  const display = mode === "currency" ? formatCurrency(value) : `${sanitizeNumber(value).toFixed(0)}%`;
  return `
    <label class="field slider-field">
      <span>${label}</span>
      <strong class="slider-value">${display}</strong>
      <input type="range" min="${min}" max="${max}" step="${step}" value="${sanitizeNumber(value)}" data-slider-key="${key}" />
    </label>
  `;
}
function renderAdvancedToggle() {
  return `<button type="button" class="chip ${state.advancedMode ? "active" : ""}" data-action="toggle-advanced">Advanced media assumptions</button>`;
}
function renderNegotiationBlock(mediaSourceCalibration) {
  const selectedFactors = getSelectedMediaFactors();
  return `
    <section class="negotiation-block panel">
      <h3>Media negotiation assumptions</h3>
      <div class="chip-row rate-card-preview-chip-row">
        ${mediaSourceModes.map(({ value, label }) => `<button type="button" class="chip ${state.mediaSourceMode === value ? "active" : ""}" data-media-source-mode="${value}">${label}</button>`).join("")}
      </div>
      <div class="factors-grid">
        <div class="factor">
          <label>Core media factor</label>
          ${renderEditableMetricInput({
    fieldKey: `coreFactor${state.scenario}`,
    value: selectedFactors.core,
    kind: "percent",
    suffix: "%",
    wrapperClass: "has-suffix factor-input-wrap",
    inputClass: "funnel-input"
  })}
        </div>
        <div class="factor">
          <label>BTS media factor</label>
          ${renderEditableMetricInput({
    fieldKey: `btsFactor${state.scenario}`,
    value: selectedFactors.bts,
    kind: "percent",
    suffix: "%",
    wrapperClass: "has-suffix factor-input-wrap",
    inputClass: "funnel-input"
  })}
        </div>
      </div>
      <p class="panel-note">${mediaSourceCalibration.liveModeNote}</p>
      <p class="panel-note">Core media factor and BTS media factor update together and both feed the ROI model in real time.</p>
      ${mediaSourceCalibration.liveWarnings.length ? `<div class="preview-warning-list">${mediaSourceCalibration.liveWarnings.map((warning) => `<p>${warning}</p>`).join("")}</div>` : ""}
    </section>
  `;
}
function renderRateCardPreviewPanel(previewState, previewResult, mediaSourceCalibration) {
  const selection = sanitizeRateCardPreviewSelection(previewState);
  const salesHouseOptions = getRateCardPreviewSalesHouses(selection.inventoryType);
  const channelOptions = selection.inventoryType === "linear_tv" ? getRateCardPreviewChannels(selection.salesHouse) : [];
  const platformOptions = selection.inventoryType === "bvod_streaming" ? getRateCardPreviewPlatforms(selection.salesHouse) : [];
  const warningMessages = getRateCardPreviewWarnings(previewResult);
  const summaryMarkup = previewResult.ok ? selection.inventoryType === "linear_tv" ? renderLinearRateCardPreviewSummary(previewResult.output) : renderBvodRateCardPreviewSummary(previewResult.output) : renderRateCardPreviewErrorSummary(warningMessages);
  return `
    <section class="negotiation-block panel rate-card-preview-panel mobile-collapsible ${state.mobileAccordion.rateCard ? "is-open" : ""}">
      <div class="panel-header compact">
        <div>
          <p class="section-label">Rate card preview</p>
          <h2>Rate Card Preview</h2>
        </div>
        <button type="button" class="mobile-accordion-toggle" data-mobile-accordion="rateCard">${state.mobileAccordion.rateCard ? "Hide" : "Show"}</button>
      </div>
      <div class="mobile-panel-body">
      <p class="panel-note">Source-based planning estimate for preview purposes.</p>
      <div class="chip-row rate-card-preview-chip-row">
        ${rateCardInventoryTypes.map(({ value, label }) => `<button type="button" class="chip ${selection.inventoryType === value ? "active" : ""}" data-rate-card-preview-selector="inventoryType" data-value="${value}">${label}</button>`).join("")}
      </div>
      <div class="selectors rate-card-preview-selectors">
        <label class="selector-field">
          <span class="selector-label">Sales house</span>
          <select data-rate-card-preview-field="salesHouse">
            ${salesHouseOptions.map((salesHouse) => `<option value="${salesHouse}" ${selection.salesHouse === salesHouse ? "selected" : ""}>${salesHouse}</option>`).join("")}
          </select>
        </label>
        ${selection.inventoryType === "linear_tv" ? `
          <label class="selector-field">
            <span class="selector-label">Channel</span>
            <select data-rate-card-preview-field="channel">
              ${channelOptions.map((channel) => `<option value="${channel}" ${selection.channel === channel ? "selected" : ""}>${channel}</option>`).join("")}
            </select>
          </label>
          <label class="selector-field">
            <span class="selector-label">Daypart</span>
            <select data-rate-card-preview-field="daypart">
              ${["Daytime", "Primetime"].map((daypart) => `<option value="${daypart}" ${selection.daypart === daypart ? "selected" : ""}>${daypart}</option>`).join("")}
            </select>
          </label>
        ` : `
          <label class="selector-field">
            <span class="selector-label">Platform</span>
            <select data-rate-card-preview-field="platform">
              ${platformOptions.map((platform) => `<option value="${platform}" ${selection.platform === platform ? "selected" : ""}>${platform}</option>`).join("")}
            </select>
          </label>
        `}
        <label class="selector-field">
          <span class="selector-label">Gross-to-net profile</span>
          <select data-rate-card-preview-field="grossToNetProfileId">
            ${rateCardGrossToNetProfiles.map((profile) => `<option value="${profile.id}" ${selection.grossToNetProfileId === profile.id ? "selected" : ""}>${profile.shortLabel}</option>`).join("")}
          </select>
        </label>
      </div>
      ${selection.inventoryType === "linear_tv" ? `
        <div class="rate-card-preview-meta">
          <span class="selector-label">BTS add-on format</span>
          <strong>5s</strong>
        </div>
        <p class="panel-note">Base format is the broadcaster rate-card reference. BTS add-on is modelled as a 5s proof-layer tag.</p>
      ` : ""}
      ${selection.grossToNetProfileId === "GTN_CUSTOM" ? `
        <div class="factors-grid rate-card-preview-custom-grid">
          <label class="factor">
            <span>Custom core net factor</span>
            <input type="number" min="0.1" max="1" step="0.01" value="${formatPreviewNumber(selection.userOverrideCoreNetFactor)}" data-rate-card-preview-net-factor="core" />
          </label>
          <label class="factor">
            <span>Custom BTS net factor</span>
            <input type="number" min="0.1" max="1" step="0.01" value="${formatPreviewNumber(selection.userOverrideBtsNetFactor)}" data-rate-card-preview-net-factor="bts" />
          </label>
        </div>
      ` : ""}
      ${renderRateCardPreviewLiveModeSummary(mediaSourceCalibration)}
      ${summaryMarkup}
      </div>
    </section>
  `;
}
function getRateCardDisplayState(output) {
  if (!output || state.mediaSourceMode !== "rate_card_calibrated") {
    return null;
  }
  return mapRateCardStateToUI({
    ...output,
    isSelected: true,
    appliedToModel: output.inventoryType === "linear_tv" && output.isActive && output.isValidated
  });
}
function renderRateCardApplicationState(uiState) {
  if (!uiState?.status) return "";
  return `
    <div class="rate-card-application-state tone-${uiState.indicatorTone}">
      <span class="rate-card-application-dot" aria-hidden="true"></span>
      <span>${uiState.status}</span>
    </div>
  `;
}
function renderLinearRateCardPreviewSummary(output) {
  const uiState = getRateCardDisplayState(output);
  return `
    <div class="rate-card-section">
      <section class="rate-group core">
        <h4>Input Core</h4>
        <div class="metric-grid rate-card-preview-grid">
          ${renderMetricCard("Gross tariff HT", formatPreviewCurrency(output.grossTariff))}
          ${renderMetricCard("Rate-card base format", `${formatNumber(output.baseDurationSeconds)}s`)}
          ${renderMetricCard("BTS 5s coefficient", formatPreviewFactor(output.coefficient))}
        </div>
      </section>
      <section class="rate-group parameters">
        <h4>Media Parameters</h4>
        <div class="metric-grid rate-card-preview-grid">
          ${renderMetricCard("Gross-to-net profile", output.selectedGrossToNetProfileName || output.selectedGrossToNetProfileId)}
          ${renderMetricCard("Effective core net factor", formatPercent(output.effectiveCoreNetFactor))}
          ${renderMetricCard("Effective BTS net factor", formatPercent(output.effectiveBtsNetFactor))}
        </div>
      </section>
      <section class="rate-group output">
        <h4>Output Estimation</h4>
        <div class="metric-grid rate-card-preview-grid">
          ${renderMetricCard("Gross BTS 5s tariff HT", formatPreviewCurrency(output.grossFiveSecondTariff))}
          ${renderMetricCard("Estimated net BTS 5s cost", formatPreviewCurrency(output.normalizedNetFiveSecondTariff))}
        </div>
      </section>
    </div>
    ${renderRateCardApplicationState(uiState)}
    <p class="panel-note rate-card-methodology-ref">Rate-card assumptions: see methodology note below.</p>
    <div class="preview-warning-list">
      <p>Planning estimate only \u2014 not a guaranteed broadcaster rate.</p>
      ${uiState?.warning ? `<p>${uiState.warning}</p>` : ""}
    </div>
  `;
}
function renderBvodRateCardPreviewSummary(output) {
  const uiState = getRateCardDisplayState(output);
  return `
    <div class="rate-card-section">
      <section class="rate-group core">
        <h4>Input Core</h4>
        <div class="metric-grid rate-card-preview-grid">
          ${renderMetricCard("Platform", output.platform)}
          ${renderMetricCard("Buying basis", output.buyingBasis)}
          ${renderMetricCard("Entry budget HT", formatPreviewCurrency(output.entryBudgetHt))}
        </div>
      </section>
      <section class="rate-group parameters">
        <h4>Media Parameters</h4>
        <div class="metric-grid rate-card-preview-grid">
          ${renderMetricCard("Avg weekly budget HT", formatPreviewCurrency(output.avgWeeklyBudgetHt))}
          ${renderMetricCard("CPM range HT", output.cpmRangeHt)}
          ${renderMetricCard("Avg CPM HT", formatPreviewCurrency(output.avgCpmHt))}
          ${renderMetricCard("Gross-to-net profile", output.selectedGrossToNetProfileName || output.selectedGrossToNetProfileId)}
          ${renderMetricCard("Effective core net factor", formatPercent(output.effectiveCoreNetFactor))}
          ${renderMetricCard("Effective BTS net factor", formatPercent(output.effectiveBtsNetFactor))}
        </div>
      </section>
      <section class="rate-group output">
        <h4>Output Estimation</h4>
        <div class="metric-grid rate-card-preview-grid">
          ${renderMetricCard("Estimated weekly impressions", formatNumber(output.estimatedWeeklyImpressions))}
          ${renderMetricCard("Estimated net weekly planning budget", formatPreviewCurrency(output.normalizedNetWeeklyBudget))}
        </div>
      </section>
    </div>
    ${renderRateCardApplicationState(uiState)}
    <p class="panel-note rate-card-methodology-ref">Rate-card assumptions: see methodology note below.</p>
    <div class="preview-warning-list">
      <p>Planning estimate only \u2014 not a guaranteed broadcaster rate.</p>
      <p>BVoD is CPM / campaign-budget based and remains separate from linear TV spot pricing.</p>
      ${uiState?.warning ? `<p>${uiState.warning}</p>` : ""}
    </div>
  `;
}
function renderRateCardPreviewLiveModeSummary(mediaSourceCalibration) {
  const notes = [];
  if (mediaSourceCalibration.isScenarioModel) {
    notes.push("Workbook-derived scenario assumptions.");
  } else if (mediaSourceCalibration.isLinearLive) {
    notes.push("Planning estimate based on market references and editable gross-to-net assumptions.");
    notes.push("Linear TV proof-layer add-on calibrated from selected sales house, channel, and daypart estimates.");
  } else if (mediaSourceCalibration.isBvodPreviewOnly) {
    notes.push("Planning estimate based on market references and editable gross-to-net assumptions.");
    notes.push("BVoD Rate Card Mode is not live yet. BVoD remains a preview-only CPM / campaign-budget layer.");
  } else if (mediaSourceCalibration.isRateCardCalibrated) {
    notes.push("Planning estimate based on market references and editable gross-to-net assumptions.");
  }
  if (!notes.length) return "";
  return `<div class="preview-warning-list">${notes.map((note) => `<p>${note}</p>`).join("")}</div>`;
}
function renderRateCardMethodologySection(previewResult, selection) {
  if (!previewResult?.ok || !previewResult.output) return "";
  return `
    <section class="panel methodology-panel rate-card-methodology-panel">
      <div class="panel-header compact">
        <div>
          <p class="section-label">Methodology</p>
          <h2>Rate-card methodology note</h2>
        </div>
      </div>
      <div class="rate-card-methodology-list">
        ${renderRateCardMethodologyLine("Source", "Official framework + market estimate")}
        ${renderRateCardMethodologyLine("Tariff basis", "Market estimation to validate")}
        ${renderRateCardMethodologyLine("Framework", "Commercial conditions / CGV")}
        ${renderRateCardMethodologyLine("Gross-to-net", "Editable planning assumption")}
        ${renderRateCardMethodologyLine("Format index", "Broadcaster-specific 5s index")}
        ${renderRateCardMethodologyLine("Planning estimate", "Values are planning estimates, not guaranteed broadcaster rates.")}
        ${renderRateCardMethodologyLine("Usage", "Rate-card calibrated mode uses the selected estimate to recalibrate the BTS proof-layer media add-on.")}
        ${renderRateCardMethodologyLine("Inventory basis", "Linear TV uses broadcaster base-format tariff estimates plus the BTS 5s format index.")}
        ${renderRateCardMethodologyLine("Format index detail", "BTS 5s format index is broadcaster-specific.")}
        ${renderRateCardMethodologyLine("Gross-to-net assumption", "Gross-to-net is an editable planning assumption, not a broadcaster tariff.")}
        ${renderRateCardMethodologyLine("Calculation method", "Gross BTS 5s tariff is converted into an estimated net BTS 5s cost using the selected gross-to-net profile.")}
        ${renderRateCardMethodologyLine("Current limitation", "Linear TV Rate-card calibrated mode is connected to live ROI calculations. BVoD remains preview-only in this version.")}
      </div>
    </section>
  `;
}
function renderRateCardMethodologyLine(label, value) {
  return `<p><span class="rate-card-methodology-label">${label}:</span><span class="rate-card-methodology-value">${value}</span></p>`;
}
function renderRateCardPreviewErrorSummary(messages) {
  return `
    <div class="preview-warning-list preview-error-list">
      ${(messages.length ? messages : ["Preview data is unavailable for the current selection."]).map((message) => `<p>${message}</p>`).join("")}
    </div>
  `;
}
function renderAdvancedFactorMatrix() {
  return `
    <section class="advanced-factor-panel">
      <div class="field-group-header">
        <h3>Advanced media assumptions</h3>
        <p>Workbook net cost factors by scenario. Core TV and BTS add-on are controlled separately.</p>
      </div>
      <div class="factor-matrix">
        ${factorScenarioFields.map((field) => renderField(field)).join("")}
      </div>
    </section>
  `;
}
function renderMetricCard(label, value, highlight = false, tone = "", helper = "", extraClass = "") {
  return `
    <article class="metric-card ${highlight ? "highlight" : ""} ${extraClass}">
      <span>${label}</span>
      <strong class="value-strong kpi-value ${tone}">${value}</strong>
      ${helper ? `<small>${helper}</small>` : ""}
    </article>
  `;
}
function renderImpactMetricCard({ label, value, shareLabel, revenueLabel, highlight = false }) {
  return `
    <article class="metric-card impact-detail-card ${highlight ? "highlight" : ""}">
      <span>${label}</span>
      <strong class="value-strong">${value}</strong>
      <small>${shareLabel}</small>
      <small>${revenueLabel}</small>
    </article>
  `;
}
function renderValueFlow(items) {
  return `
    <div class="value-flow">
      ${items.map((item, index) => `${index ? '<div aria-hidden="true">\u2192</div>' : ""}<div>${item}</div>`).join("")}
    </div>
  `;
}
function renderChip(label, active, selector, value = label) {
  return `<button type="button" class="chip ${active ? "active" : ""}" data-selector="${selector}" data-value="${value}">${label}</button>`;
}
function renderStat(label, value, tone = "") {
  return `<div class="split-stat"><span>${label}</span><strong class="value-strong ${tone}">${value}</strong></div>`;
}
function renderEditableMetricInput({ fieldKey, value, kind, prefix = "", suffix = "", wrapperClass = "", inputClass = "" }) {
  const displayValue = getEditableInputValue(fieldKey, value, kind);
  const prefixMarkup = prefix ? `<span class="input-prefix metric-prefix">${prefix}</span>` : "";
  const suffixMarkup = suffix ? `<span class="input-suffix metric-suffix">${suffix}</span>` : "";
  const inputMode = kind === "currency" || kind === "integer" || kind === "observation-days" ? "numeric" : "decimal";
  const classAttr = inputClass ? `class="${inputClass}"` : "";
  const displayAttr = kind === "observation-days" ? 'data-display-format="observation-window-days"' : "";
  return `
    <div class="input-wrap ${wrapperClass}">
      ${prefixMarkup}
      <input type="text" lang="en" inputmode="${inputMode}" ${classAttr} value="${displayValue}" data-input-key="${fieldKey}" data-input-kind="${kind}" data-model-value="${safeNumber(value)}" ${displayAttr} />
      ${suffixMarkup}
    </div>
  `;
}
function getFieldKind(field) {
  const selectedVerticalKey = normalizeVerticalKey(state.vertical);
  if (field.key === "observationWindow" && selectedVerticalKey !== "automotive") return "observation-days";
  if (field.type === "currency") return "currency";
  if (field.type === "percent") return "percent";
  const step = Number(field.step ?? 1);
  return step >= 1 && Number.isInteger(step) ? "integer" : "decimal";
}
function getEditableInputValue(fieldKey, modelValue, kind) {
  if (state.editingField === fieldKey) {
    return state.draftValues[fieldKey] ?? rawModelToDraft(modelValue, kind);
  }
  return formatDisplay(modelValue, kind);
}
function formatDisplay(value, kind) {
  const n = Number(value);
  if (!Number.isFinite(n)) return "";
  if (kind === "currency") {
    return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
  }
  if (kind === "integer") {
    return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
  }
  if (kind === "percent") {
    return formatPercentInputValue(n);
  }
  if (kind === "observation-days") {
    return formatNumberForEnglishUI(observationWindowFactorToDays(n, state.vertical), 0);
  }
  const rounded = Number(n.toFixed(2));
  return Number.isInteger(rounded) ? String(rounded) : String(rounded);
}
function rawModelToDraft(value, kind) {
  const n = Number(value);
  if (!Number.isFinite(n)) return "";
  if (kind === "currency" || kind === "integer") {
    return String(Math.round(n));
  }
  if (kind === "percent") {
    return formatPercentInputValue(n);
  }
  if (kind === "observation-days") {
    return formatNumberForEnglishUI(observationWindowFactorToDays(n, state.vertical), 0);
  }
  return formatNumberForEnglishUI(n, 2);
}
function sanitizeDraft(raw, kind) {
  const value = String(raw ?? "");
  if (kind === "currency" || kind === "integer" || kind === "observation-days") {
    return value.replace(/[^\d]/g, "");
  }
  let cleaned = value.replace(/,/g, ".").replace(/[^\d.]/g, "");
  const parts = cleaned.split(".");
  if (parts.length > 2) {
    cleaned = parts[0] + "." + parts.slice(1).join("");
  }
  return cleaned;
}
function parseDraft(draft, kind) {
  if (draft === "" || draft === "." || draft === ",") return null;
  const n = Number(String(draft).replace(/,/g, "."));
  return Number.isFinite(n) ? n : null;
}
function normalizeParsedValue(parsed, kind) {
  if (parsed == null) return null;
  if (kind === "percent") return parsed / 100;
  if (kind === "observation-days") return observationWindowDaysToFactor(parsed, state.vertical);
  return parsed;
}
function commitInputValue(fieldKey, normalizedValue) {
  if (normalizedValue == null) return;
  if (fieldKey === "linearTvShare") {
    state.inputs.linearTvShare = normalizedValue;
    state.inputs.bvodShare = Math.max(0, 1 - normalizedValue);
    return;
  }
  if (fieldKey === "bvodShare") {
    state.inputs.bvodShare = normalizedValue;
    state.inputs.linearTvShare = Math.max(0, 1 - normalizedValue);
    return;
  }
  state.inputs[fieldKey] = normalizedValue;
}
function getValueTone(label, rawValue) {
  if (rawValue == null || Number.isNaN(rawValue)) {
    return "";
  }
  if (label === "Value lost to media" || label === "Current media gap") {
    return rawValue < 0 ? "value-negative" : rawValue > 0 ? "value-positive" : "";
  }
  if (label === "Incremental revenue" || label === "Incremental profit" || label === "Direct path revenue" || label === "Assisted path revenue") {
    return rawValue > 0 ? "value-positive" : rawValue < 0 ? "value-negative" : "";
  }
  if (label === "ROI incremental") {
    return rawValue >= 1 ? "value-positive" : rawValue < 1 ? "value-negative" : "";
  }
  if (label.includes("ROI")) {
    return rawValue > 0 ? "value-positive" : rawValue < 0 ? "value-negative" : "";
  }
  return "";
}
function getRoiDisplayLabels(vertical) {
  return {
    total: "Total campaign ROI",
    incremental: "Incremental ROI uplift",
    tv: "TV-only ROI benchmark",
    proof: "Proof layer ROI (tactical efficiency)"
  };
}
function getRecommendationStatusLabel(status) {
  if (status === "Scale selectively" || status === "Keep and optimize") {
    return "Scale within efficiency threshold";
  }
  return status || "Scale within efficiency threshold";
}
function getComparisonViewModel(results, { comparisonMode, proofLayerInvestment, proofLayerNetContribution }) {
  const isTvOnly = comparisonMode === "tv_only";
  if (isTvOnly) {
    return {
      isTvOnly: true,
      showDeltaBlock: false,
      heroValueLabel: "TV-ONLY REVENUE",
      heroValue: formatCurrency(results.tvOnlyGeneratedRevenue),
      heroValueTone: getValueTone("Incremental revenue", results.tvOnlyGeneratedRevenue),
      heroCostLabel: "TV-ONLY COST",
      heroCost: formatCurrency(results.tvOnlyCampaignCost),
      heroRoiLabel: "TV-ONLY ROI",
      heroRoi: formatRatio(results.tvOnlyRoi),
      heroRoiTone: getValueTone("ROI total", results.tvOnlyRoi),
      heroRoiHelper: "",
      heroNetLabel: "NET CONTRIBUTION",
      heroNet: formatCurrency(0),
      heroNetTone: "",
      summaryPrimaryLabel: "TV-only ROI",
      summaryPrimaryValue: formatRatio(results.tvOnlyRoi),
      summaryPrimaryTone: getValueTone("ROI total", results.tvOnlyRoi),
      summaryPrimaryHelper: "Modeled baseline return without proof-layer activation.",
      summarySecondaryLabel: "TV-only cost",
      summarySecondaryValue: formatCurrency(results.tvOnlyCampaignCost),
      summarySecondaryTone: "",
      summarySecondaryHelper: "Baseline media investment under current assumptions.",
      summaryActionHelper: "Baseline TV performance shown as the comparison anchor.",
      revenuePrimaryLabel: "TV-only revenue",
      revenuePrimaryValue: formatCurrency(results.tvOnlyGeneratedRevenue),
      revenuePrimaryTone: getValueTone("Incremental revenue", results.tvOnlyGeneratedRevenue),
      revenueSecondaryLabel: "Modeled incremental value",
      revenueSecondaryValue: formatCurrency(0),
      revenueSecondaryTone: "",
      revenueTertiaryLabel: "Revenue uplift vs baseline",
      revenueTertiaryValue: formatCurrency(0),
      revenueTertiaryTone: "",
      economicsPrimaryLabel: "TV-only cost",
      economicsPrimaryValue: formatCurrency(results.tvOnlyCampaignCost),
      economicsSecondaryLabel: "TV-only ROI",
      economicsSecondaryValue: formatRatio(results.tvOnlyRoi),
      economicsSecondaryTone: getValueTone("ROI total", results.tvOnlyRoi),
      economicsSecondaryState: "",
      economicsTertiaryLabel: "Net contribution",
      economicsTertiaryValue: formatCurrency(0),
      interpretationSecondBullet: "No proof-layer increment is applied in this baseline comparison view.",
      interpretationThirdBullet: "Net contribution is shown as \u20AC0 because the proof layer is not included in the baseline view."
    };
  }
  return {
    isTvOnly: false,
    showDeltaBlock: true,
    heroValueLabel: "VALUE CREATED",
    heroValue: formatCurrency(results.btsIncrementalValue),
    heroValueTone: "value-positive",
    heroCostLabel: "PROOF LAYER INVESTMENT",
    heroCost: formatCurrency(proofLayerInvestment),
    heroRoiLabel: "PROOF LAYER ROI (TACTICAL EFFICIENCY)",
    heroRoi: formatSignedRatio(results.btsIncrementalRoi),
    heroRoiTone: getValueTone("ROI incremental", results.btsIncrementalRoi),
    heroRoiHelper: "Incremental layer efficiency",
    heroNetLabel: "NET CONTRIBUTION",
    heroNet: formatSignedCurrency(proofLayerNetContribution),
    heroNetTone: getValueTone("Current media gap", proofLayerNetContribution),
    summaryPrimaryLabel: "Proof layer ROI (tactical efficiency)",
    summaryPrimaryValue: formatSignedRatio(results.btsIncrementalRoi),
    summaryPrimaryTone: getValueTone("ROI incremental", results.btsIncrementalRoi),
    summaryPrimaryHelper: "Modeled return on proof-layer activation cost.",
    summarySecondaryLabel: "Net contribution",
    summarySecondaryValue: formatSignedCurrency(proofLayerNetContribution),
    summarySecondaryTone: getValueTone("Current media gap", proofLayerNetContribution),
    summarySecondaryHelper: "Estimated incremental contribution based on current assumptions.",
    summaryActionHelper: "Results depend on media efficiency and execution conditions.",
    revenuePrimaryLabel: "TV-only revenue",
    revenuePrimaryValue: formatCurrency(results.tvOnlyGeneratedRevenue),
    revenuePrimaryTone: getValueTone("Incremental revenue", results.tvOnlyGeneratedRevenue),
    revenueSecondaryLabel: "TV + BTS revenue",
    revenueSecondaryValue: formatCurrency(results.totalRevenueWithBts),
    revenueSecondaryTone: getValueTone("Incremental revenue", results.totalRevenueWithBts),
    revenueTertiaryLabel: "Modeled incremental value",
    revenueTertiaryValue: formatCurrency(results.btsIncrementalValue),
    revenueTertiaryTone: getValueTone("Incremental profit", results.btsIncrementalValue),
    economicsPrimaryLabel: "Proof layer investment",
    economicsPrimaryValue: formatCurrency(proofLayerInvestment),
    economicsSecondaryLabel: "Net contribution",
    economicsSecondaryValue: formatSignedCurrency(proofLayerNetContribution),
    economicsSecondaryTone: getValueTone("Current media gap", proofLayerNetContribution),
    economicsSecondaryState: proofLayerNetContribution >= 0 ? "positive" : "negative",
    economicsTertiaryLabel: "Total campaign investment",
    economicsTertiaryValue: formatCurrency(results.totalCampaignCost),
    interpretationSecondBullet: `Estimated incremental contribution is ${formatCurrency(results.btsIncrementalValue)} for a ${formatCurrency(proofLayerInvestment)} activation investment.`,
    interpretationThirdBullet: `Estimated net contribution under current assumptions: ${formatSignedCurrency(proofLayerNetContribution)}.`
  };
}
function getDisplayDecisionExplanation(results, comparisonView) {
  return "Model suggests incremental value under current assumptions. Performance depends on media efficiency and execution conditions.";
}
function getRecommendationCardTone(results) {
  const proofContribution = results.proofLayerNetContribution ?? results.netIncrementalDeltaVsTvBaseline ?? 0;
  const proofRoi = Number(results.btsIncrementalRoi ?? 0);
  if (proofContribution < 0 || proofRoi < 1) {
    return "negative";
  }
  if (proofRoi < 1.25) {
    return "warning";
  }
  return "positive";
}
function getRecommendationMetrics(results, comparisonView) {
  if (comparisonView?.isTvOnly) {
    return [
      {
        label: "TV-only ROI",
        value: formatRatio(results.tvOnlyRoi),
        tone: getValueTone("ROI total", results.tvOnlyRoi)
      },
      {
        label: "TV-only cost",
        value: formatCurrency(results.tvOnlyCampaignCost),
        tone: ""
      },
      {
        label: "Modeled incremental impact",
        value: formatCurrency(0),
        tone: ""
      }
    ];
  }
  const base = [
    {
      label: "Proof layer net contribution",
      value: formatSignedCurrency(results.proofLayerNetContribution ?? results.netIncrementalDeltaVsTvBaseline),
      tone: getValueTone("Current media gap", results.proofLayerNetContribution ?? results.netIncrementalDeltaVsTvBaseline)
    },
    {
      label: "Proof layer ROI (tactical efficiency)",
      value: formatSignedRatio(results.btsIncrementalRoi),
      tone: getValueTone("ROI incremental", results.btsIncrementalRoi)
    },
    {
      label: "Total campaign ROI",
      value: formatRatio(results.roiTotal),
      tone: getValueTone("ROI total", results.roiTotal)
    }
  ];
  if ((results.proofLayerNetContribution ?? results.netIncrementalDeltaVsTvBaseline) < 0 || results.btsIncrementalRoi < 1) {
    return [
      ...base,
      {
        label: "Incremental BTS cost",
        value: formatCurrency(results.incrementalBtsCost),
        tone: ""
      }
    ];
  }
  if (results.btsIncrementalRoi >= 2) {
    return [
      ...base,
      {
        label: "Break-even media cost",
        value: formatCurrency(results.breakEvenMediaCost),
        tone: ""
      },
      {
        label: "Current media gap",
        value: formatSignedCurrency(results.breakEvenGap),
        tone: getValueTone("Current media gap", results.breakEvenGap)
      }
    ];
  }
  return [
    ...base,
    {
      label: "Current media gap",
      value: formatSignedCurrency(results.breakEvenGap),
      tone: getValueTone("Current media gap", results.breakEvenGap)
    }
  ];
}
function getProofLeverageDescriptor(value) {
  const numeric = safeNumber(value);
  if (numeric >= 0.7) {
    return {
      label: "High leverage",
      helper: "Strong conversion impact from proof layer",
      tone: "positive"
    };
  }
  if (numeric >= 0.4) {
    return {
      label: "Moderate leverage",
      helper: "Proof supports conversion under certain conditions",
      tone: "warning"
    };
  }
  return {
    label: "Low leverage",
    helper: "Limited impact unless cost efficiency improves",
    tone: "negative"
  };
}
function getScenarioClass(scenario, selectedScenario) {
  if (scenario === selectedScenario) {
    if (scenario === "Upside") return "scenario-card scenario-upside-active";
    if (scenario === "Base") return "scenario-card scenario-base-active";
    if (scenario === "Stress") return "scenario-card scenario-stress-active";
  }
  return "scenario-card";
}
function getKillerInsight(results, comparisonView) {
  const proofLayerNetContribution = safeNumber(
    comparisonView?.isTvOnly ? 0 : results.proofLayerNetContribution ?? results.netIncrementalDeltaVsTvBaseline
  );
  const proofRoi = safeNumber(comparisonView?.isTvOnly ? 0 : results.btsIncrementalRoi);
  return {
    tone: proofLayerNetContribution > 0 ? "positive" : proofLayerNetContribution < 0 ? "negative" : "warning",
    headline: `Projected ROI (proof layer): ${formatSignedRatio(proofRoi)}`,
    support: `Estimated incremental value: ${formatSignedCurrency(proofLayerNetContribution)}`
  };
}
function renderDebugPanel(rows) {
  return `
    <article class="panel results-panel">
      <div class="panel-header compact">
        <div>
          <p class="section-label">Debug</p>
          <h2>Intermediate calculations</h2>
        </div>
      </div>
      <div class="debug-grid">
        ${rows.map(([label, value]) => `
          <div class="debug-row">
            <span>${label}</span>
            <strong>${formatDebugValue(value)}</strong>
          </div>
        `).join("")}
      </div>
    </article>
  `;
}
function renderCompletenessPanel(rows) {
  if (!rows.length) return "";
  return `
    <article class="panel results-panel">
      <div class="panel-header compact">
        <div>
          <p class="section-label">Validation</p>
          <h2>Mapping completeness</h2>
        </div>
      </div>
      <div class="debug-grid">
        ${rows.map((row) => `
          <div class="debug-row">
            <span>${row.category}</span>
            <strong>${row.status}: ${row.details}</strong>
          </div>
        `).join("")}
      </div>
    </article>
  `;
}
function renderValidationPanel(rows) {
  if (rows.length && rows[0].excelLabel) {
    return `
      <article class="panel results-panel">
        <div class="panel-header compact">
          <div>
            <p class="section-label">Validation</p>
            <h2>Automotive workbook audit</h2>
          </div>
        </div>
        <div class="audit-table-wrap">
          <table class="audit-table">
            <thead>
              <tr>
                <th>Business concept</th>
                <th>Excel sheet</th>
                <th>Excel cell</th>
                <th>Excel label</th>
                <th>Excel value</th>
                <th>Excel formula</th>
                <th>JS variable</th>
                <th>UI label</th>
                <th>UI value</th>
                <th>Status</th>
                <th>Recommendation</th>
              </tr>
            </thead>
            <tbody>
              ${rows.map((row) => `
                <tr>
                  <td>${row.businessConcept}</td>
                  <td>${row.excelSheet}</td>
                  <td>${row.excelCell}</td>
                  <td>${row.excelLabel}</td>
                  <td>${row.excelValue}</td>
                  <td>${row.excelFormula}</td>
                  <td><code>${row.jsVariable}</code></td>
                  <td>${row.uiLabel}</td>
                  <td>${row.uiValue}</td>
                  <td>${row.status}</td>
                  <td>${row.recommendation}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </article>
    `;
  }
  return `
    <article class="panel results-panel">
      <div class="panel-header compact">
        <div>
          <p class="section-label">Validation</p>
          <h2>Excel vs app</h2>
        </div>
      </div>
      <div class="debug-grid">
        ${rows.map((row) => `
          <div class="debug-row">
            <span>${row.label}</span>
            <strong>Excel ${formatDebugValue(row.excelValue)} | App ${formatDebugValue(row.appValue)} | Diff ${formatDebugValue(row.difference)}</strong>
          </div>
        `).join("")}
      </div>
    </article>
  `;
}
function formatNumber(value) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: value >= 100 ? 0 : 1 }).format(safeNumber(value));
}
function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(safeNumber(value));
}
function formatPreviewCurrency(value) {
  const numeric = safeNumber(value);
  const hasDecimals = Math.abs(numeric % 1) > 1e-6;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: hasDecimals ? 2 : 0,
    maximumFractionDigits: 2
  }).format(numeric);
}
function formatPercent(value) {
  const numeric = safeNumber(value);
  const percentValue = Math.abs(numeric * 100);
  let maxFractionDigits = 0;
  if (percentValue !== 0 && percentValue < 0.1) {
    maxFractionDigits = 2;
  } else if (!Number.isInteger(percentValue)) {
    maxFractionDigits = percentValue < 1 ? 2 : 1;
  }
  return new Intl.NumberFormat("en-US", { style: "percent", maximumFractionDigits: maxFractionDigits }).format(numeric);
}
function formatPreviewNumber(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return "";
  return numeric.toFixed(2).replace(/\.00$/, "");
}
function formatPreviewFactor(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return "n/a";
  return numeric.toFixed(2);
}
function formatRatio(value) {
  return `${safeNumber(value).toFixed(2)}x`;
}
function formatSignedRatio(value) {
  const numeric = safeNumber(value);
  const formatted = `${Math.abs(numeric).toFixed(2).replace(/\.00$/, "")}x`;
  if (numeric < 0) {
    return `-${formatted}`;
  }
  if (numeric < 1) {
    return formatted;
  }
  return `+${formatted}`;
}
function formatSignedCurrency(value) {
  const numeric = safeNumber(value);
  const formatted = new Intl.NumberFormat("en-US", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(
    Math.abs(numeric)
  );
  return `${numeric > 0 ? "+" : numeric < 0 ? "-" : ""}${formatted}`;
}
function formatDebugValue(value) {
  if (Math.abs(value) >= 1e3) return formatNumber(value);
  if (Math.abs(value) <= 1 && value !== 0) return value.toFixed(4);
  return `${safeNumber(value).toFixed(2)}`;
}
function formatNumberForEnglishUI(value, decimals = 1) {
  const n = Number(value);
  if (!Number.isFinite(n)) return "";
  const rounded = Number(n.toFixed(decimals));
  return Number.isInteger(rounded) ? String(rounded) : String(rounded);
}
function formatPercentInputValue(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return "";
  const percentValue = n * 100;
  const absolutePercent = Math.abs(percentValue);
  let decimals = 0;
  if (absolutePercent !== 0 && absolutePercent < 0.1) {
    decimals = 2;
  } else if (!Number.isInteger(percentValue)) {
    decimals = absolutePercent < 1 ? 2 : 1;
  }
  return formatNumberForEnglishUI(percentValue, decimals);
}
var observationWindowDayScaleByVertical = {
  fmcg: 14,
  telecom: 60,
  bankInsurance: 60,
  automotive: 60
};
function getObservationWindowDayScale(vertical) {
  return observationWindowDayScaleByVertical[vertical] || 30;
}
function observationWindowFactorToDays(value, vertical) {
  return Math.max(1, Math.round(safeNumber(value) * getObservationWindowDayScale(vertical)));
}
function observationWindowDaysToFactor(value, vertical) {
  return safeNumber(value) / getObservationWindowDayScale(vertical);
}
function formatObservationWindowDays(value, vertical) {
  return formatNumberForEnglishUI(observationWindowFactorToDays(value, vertical), 0);
}
function sanitizeNumber(value) {
  return Number.isFinite(value) ? value : 0;
}
function parseUiNumber(value) {
  if (typeof value === "number") return Number.isFinite(value) ? value : 0;
  const source = String(value ?? "").trim().replace(/\s+/g, "");
  if (!source) return 0;
  let normalized = source;
  if (source.includes(",") && source.includes(".")) {
    normalized = source.replace(/,/g, "");
  } else if (source.includes(",")) {
    const parts = source.split(",");
    normalized = parts.length === 2 && parts[1].length <= 2 ? `${parts[0]}.${parts[1]}` : source.replace(/,/g, "");
  }
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}
function safeNumber(value) {
  return Number.isFinite(value) ? value : 0;
}
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
function getDriverStats(vertical, inputs, results) {
  if (vertical === "fmcg") {
    return [
      ["Penetration", formatPercent(inputs.householdPenetration)],
      ["Purchase frequency", formatNumber(inputs.purchaseFrequency)],
      ["Uplift elasticity", formatPercent(inputs.assistedUplift)]
    ];
  }
  if (vertical === "retailGeneral" || vertical === "retailAppliances") {
    return [
      ["Buyer share", formatPercent(inputs.baseCategoryBuyerShare)],
      ["Purchase frequency", formatNumber(inputs.repeatFactor ?? 1)],
      ["Uplift elasticity", formatPercent(inputs.assistedUplift)]
    ];
  }
  if (vertical === "telecom") {
    return [
      ["Marketable base", formatPercent(inputs.marketableBase)],
      ["Observation window", `${formatObservationWindowDays(inputs.observationWindow, vertical)} days`],
      ["Uplift elasticity", formatPercent(inputs.assistedUplift)]
    ];
  }
  if (vertical === "bankInsurance") {
    return [
      ["Eligible prospects", formatPercent(inputs.eligibleProspectShare)],
      ["Observation window", `${formatObservationWindowDays(inputs.observationWindow, vertical)} days`],
      ["Uplift elasticity", formatPercent(inputs.assistedConversionUplift)]
    ];
  }
  if (vertical === "tourism") {
    return [
      ["Buyer share in window", formatPercent(inputs.baseCategoryBuyerShare)],
      ["Influenced buyer share", formatPercent(inputs.influencedBuyerShare)],
      ["Retail uplift", formatPercent(inputs.retailUplift)],
      ["Booking window", `${formatNumber(inputs.bookingConsiderationWindowDays)} days`]
    ];
  }
  return [
    ["In-market shopper share", formatPercent(inputs.inMarketShoppers)],
    ["Observation window share", formatPercent(inputs.observationWindow)],
    ["Assisted booking uplift", formatPercent(inputs.assistedUplift)]
  ];
}
function getSelectedMediaFactors() {
  if (state.mediaSourceMode === "rate_card_calibrated") {
    const previewSelection = sanitizeRateCardPreviewSelection(state.rateCardPreview);
    const previewResult = normalizeRateCardSelection(previewSelection);
    if (previewResult.ok && previewResult.output?.appliedToModel) {
      const candidateResult = buildEngineInputCandidateFromRateCard(previewResult.output, {
        proofLayerAllocationRule: previewSelection.proofLayerAllocationRule
      });
      if (candidateResult.ok && candidateResult.output) {
        return {
          core: candidateResult.output.coreNetFactor,
          bts: candidateResult.output.btsNetFactor
        };
      }
    }
  }
  const selectedVerticalKey = normalizeVerticalKey(state.vertical);
  const defaults = getWorkbookMediaFactors(selectedVerticalKey, state.scenario);
  return {
    core: state.inputs[`coreFactor${state.scenario}`] ?? defaults.core,
    bts: state.inputs[`btsFactor${state.scenario}`] ?? defaults.bts
  };
}
function getVerticalLogic(vertical) {
  if (vertical === "retailGeneral") {
    return ["High frequency", "Lower margin", "Faster conversion"];
  }
  if (vertical === "retailAppliances") {
    return ["Low frequency", "Higher basket", "Longer decision cycle"];
  }
  if (vertical === "telecom") {
    return ["Subscription model", "ARPU x Lifetime", "Immediate conversion depends on proof efficiency"];
  }
  if (vertical === "bankInsurance") {
    return ["Long conversion lag", "High value per conversion", "Qualified intent matters more than volume"];
  }
  if (vertical === "automotive") {
    return ["Very low frequency", "Very high consideration", "Proof must support booking-to-sale movement"];
  }
  return ["High repeat potential", "Lower basket value", "Proof acts on buying occasions after exposure"];
}
function applyAdvancedFactorDefaults() {
  scenarioOrder.forEach((scenario) => {
    const selectedVerticalKey = normalizeVerticalKey(state.vertical);
    const defaults = getWorkbookMediaFactors(selectedVerticalKey, scenario);
    state.inputs[`coreFactor${scenario}`] = defaults.core;
    state.inputs[`btsFactor${scenario}`] = defaults.bts;
  });
}
function clearAdvancedFactorOverrides() {
  scenarioOrder.forEach((scenario) => {
    delete state.inputs[`coreFactor${scenario}`];
    delete state.inputs[`btsFactor${scenario}`];
  });
}
function getCurrentFactorOverrides() {
  return Object.fromEntries(
    factorScenarioFields.map((field) => [field.key, state.inputs[field.key]]).filter(([, value]) => value != null)
  );
}
renderApp();

// ── UX Enhancements ────────────────────────────────────────────
(function () {

  var TOOLTIP_DATA = {
    qrScanRate: { source: 'CESP / industry QR usage studies (2022-2024)', range: '0.02% – 0.25% depending on creative & category' },
    scanRate: { source: 'CESP / industry QR usage studies (2022-2024)', range: '0.01% – 0.15% depending on format & vertical' },
    qualifiedVisitRate: { source: 'Nielsen Field studies; BTS internal benchmark', range: '60% – 85% across verticals' },
    baseAttentionRate: { source: 'Lumen / Karen Nelson-Field attention research', range: '20% – 70% (Daytime < Primetime)' },
    assistedUplift: { source: 'BTS proof-layer observed uplift; academic meta-analysis', range: '0.5% – 3% on influenced audience' },
    closeRate: { source: 'Automotive dealer funnel studies; OEM benchmark', range: '12% – 28% close rate from test-drive' },
    basket: { source: 'IRI / Nielsen retail panel; client brief', range: 'FMCG €15–€50 / Retail €80–€500' },
    margin: { source: 'Category gross-margin norm; client brief', range: 'FMCG 20–35% / Retail 15–28%' },
    arpu: { source: 'ARCEP telecommunications observatory', range: '€20–€35/month depending on offer mix' },
    inMarketShoppers: { source: 'JATO / GfK automotive in-market tracker', range: '2%–5% of audience actively in-market' }
  };

  var CSS = [
    '.bts-banner{position:sticky;top:0;z-index:400;width:100%;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:10px 20px;background:rgba(15,19,30,0.95);backdrop-filter:blur(12px);border-bottom:1px solid rgba(77,163,255,0.18);font-family:"Open Sans",Arial,sans-serif;font-size:.82rem;color:rgba(200,215,240,.88);box-shadow:0 4px 24px rgba(0,0,0,.28)}',
    '.bts-banner strong{color:#66c2ff;font-weight:700}',
    '.bts-banner-cta{display:inline-flex;align-items:center;padding:7px 14px;border-radius:999px;background:rgba(77,163,255,.10);border:1px solid rgba(77,163,255,.28);color:#66c2ff;font-size:.78rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;white-space:nowrap;font-family:inherit}',
    '@keyframes bts-pulse{0%{box-shadow:0 0 0 0 rgba(77,163,255,0)}30%{box-shadow:0 0 0 8px rgba(77,163,255,.2);border-color:rgba(77,163,255,.6)}100%{box-shadow:0 0 0 0 rgba(77,163,255,0)}}',
    '.bts-hl{animation:bts-pulse 2s ease forwards}',
    '.bts-badge{display:inline-flex;align-items:center;justify-content:center;width:14px;height:14px;border-radius:50%;background:rgba(77,163,255,.10);border:1px solid rgba(77,163,255,.28);color:#66c2ff;font-size:9px;font-style:italic;font-weight:700;cursor:pointer;margin-left:4px;vertical-align:middle;position:relative}',
    '.bts-tip{position:absolute;bottom:calc(100% + 6px);left:50%;transform:translateX(-50%);z-index:600;width:220px;padding:10px 12px;border-radius:10px;background:rgba(17,23,38,.97);border:1px solid rgba(77,163,255,.28);box-shadow:0 8px 32px rgba(0,0,0,.48);font-size:.76rem;line-height:1.5;color:rgba(200,215,240,.9);pointer-events:none;opacity:0;visibility:hidden;transition:opacity 150ms ease;white-space:normal}',
    '.bts-tip.on{opacity:1;visibility:visible}',
    '.bts-tip-src{display:block;color:#66c2ff;font-weight:700;font-size:.72rem;text-transform:uppercase;margin-bottom:3px}',
    '.bts-scenario-pill{display:inline-flex;align-items:center;gap:5px;padding:3px 9px;border-radius:999px;font-size:.7rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-top:4px;border:1px solid transparent}',
    '.bts-scenario-pill.upside{background:rgba(34,197,94,.10);border-color:rgba(34,197,94,.28);color:#4ade80}',
    '.bts-scenario-pill.base{background:rgba(77,163,255,.10);border-color:rgba(77,163,255,.28);color:#66c2ff}',
    '.bts-scenario-pill.stress{background:rgba(239,68,68,.10);border-color:rgba(239,68,68,.28);color:#f87171}'
  ].join('');

  function injectStyles() {
    if (document.getElementById('bts-ux-css')) return;
    var s = document.createElement('style');
    s.id = 'bts-ux-css';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  function injectBanner() {
    if (document.querySelector('.bts-banner')) return;
    var topbar = document.querySelector('.topbar');
    if (!topbar) return;
    var b = document.createElement('div');
    b.className = 'bts-banner';
    b.innerHTML = '<span><strong>Simulation driven by your assumptions.</strong> Adjust conversion rates, media parameters and business inputs at any time.</span><button class="bts-banner-cta">Adjust assumptions ↓</button>';
    b.querySelector('.bts-banner-cta').addEventListener('click', function () {
      var panel = document.querySelector('.input-panel');
      if (!panel) return;
      panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      panel.classList.remove('bts-hl');
      void panel.offsetWidth;
      panel.classList.add('bts-hl');
      setTimeout(function () { panel.classList.remove('bts-hl'); }, 2200);
    });
    topbar.parentNode.insertBefore(b, topbar.nextSibling);
  }

  function injectTooltips() {
    document.querySelectorAll('[data-input-key]').forEach(function (input) {
      var key = input.getAttribute('data-input-key');
      if (!key || !TOOLTIP_DATA[key]) return;
      var label = input.closest('label') || input.closest('.field');
      if (!label) return;
      var span = label.querySelector('span');
      if (!span || span.querySelector('.bts-badge')) return;
      var data = TOOLTIP_DATA[key];
      var badge = document.createElement('span');
      badge.className = 'bts-badge';
      badge.textContent = 'i';
      var tip = document.createElement('span');
      tip.className = 'bts-tip';
      tip.innerHTML = '<span class="bts-tip-src">Source</span>' + data.source + '<span class="bts-tip-src" style="margin-top:5px">Range</span>' + data.range;
      badge.appendChild(tip);
      badge.addEventListener('mouseenter', function () { tip.classList.add('on'); });
      badge.addEventListener('mouseleave', function () { tip.classList.remove('on'); });
      badge.addEventListener('click', function (e) { e.stopPropagation(); tip.classList.toggle('on'); });
      span.appendChild(badge);
    });
  }

  function injectScenarioPill() {
    var hero = document.querySelector('.decision-contrast-grid.kpi-row');
    if (!hero) return;
    var card = hero.querySelector('.kpi-card');
    if (!card || card.querySelector('.bts-scenario-pill')) return;
    var scenario = 'Base';
    var active = document.querySelector('[data-selector="scenario"].active');
    if (active) scenario = active.dataset.value || active.textContent.trim();
    var pill = document.createElement('div');
    pill.className = 'bts-scenario-pill ' + scenario.toLowerCase();
    pill.textContent = 'Scenario: ' + scenario;
    card.appendChild(pill);
  }

  function enhance() {
    injectStyles();
    injectBanner();
    injectTooltips();
    injectScenarioPill();
  }

  // S'exécute après chaque renderApp()
  var _originalRenderApp = window.renderApp;
  var _render = typeof renderApp === 'function' ? renderApp : null;
  if (_render) {
    window.renderApp = function () {
      _render.apply(this, arguments);
      setTimeout(enhance, 80);
    };
  }

  // Premier appel immédiat
  setTimeout(enhance, 300);

})();
