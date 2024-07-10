'use strict';

var FORMS = {
    ACNE: {
        QUESTIONS:{
            acne_begin : "At what age did your acne start?",
            acne_product_result : "What over-the-counter products have you used for your acne? What were the results and are you still using any?",
            acne_accutane : "Have you ever used Accutane?  If so, what were the results and are you still using it?",
            acne_acne_cause : "Does your acne cause pitting or scars?",
            acne_hormonal_agents : "Are you using any hormonal agents?",
            acne_allergies_status : "Do you have any known allergies?",
            acne_allergies : "Please list out any allergies you have:",
            acne_current_medicines : "Please list all your current medicines, vitamins, and dietary supplements (include any that you have taken in the past month, even if you are not taking them today).",
            acne_surgeries_status : "Do you have any medical conditions or a history of prior surgeries?",
            acne_surgeries : "Do you have any medical conditions or a history of prior surgeries? Please describe in the box below:",
            acne_condition_by_doctor_status : "Is there anything else you want your doctor to know about your condition or health?",
            acne_condition_by_doctor : "Is there anything else you want your doctor to know about your condition or health? If so, please leave your message to your doctor here:",
            drug_name : "Do you have a treatment preference?",
            drug_does: "Dosage:",
            shipping_address : "Shipping Address",
            total: "Total",
            attachment: "Attachments:",
            gov_id: "Government ID:",
            self_image: "Self Image:",
            image: "Acne Photo:",
            acne_acne_at: "Where do you have acne?",
            acne_cosmetics: "Do you use facial cosmetics? If so, which ones?",
            drug_price_of_pill: "Price of Medicines:",
            acne_prescription_medicines: "What other prescription medication have you used for your acne? What were the results and are you still using any?"
        }
    },
    BLADDERCONTROL: {
        QUESTIONS:{
            bladder_past_status : "Yes",
            bladder_past : "How long have you had trouble with urination?",
            bladder_symptom: "Please mark your most problematic symptoms",
            bladder_used_cather_: "Have you ever had to use a catheter to urinate?",
            bladder_diapers: "Have you had to use diapers for urination difficulties?",
            bladder_cystoscopy: "Have you ever had a cystoscopy?",
            bladder_known_cystoscopy: "Please list any known findings on the cystoscopy",
            bladder_genitourinary_history: "Do you have any prior history of genitourinary cancers?",
            bladder_cancer_list: "Please list any cancers you have had:",
            bladder_infection_history: "Do you have a history of kidney or bladder infections?",
            bladder_stone_history: "Do you have a history of kidney stones?",
            bladder_genital_exam: "Have you had a genital exam with a healthcare provider in the past five years?",
            bladder_taken_medication: "Please check any medications you have taken for bladder control:",
            bladder_botox_injection: "Have you ever had botox injections for spasms?",
            bladder_urologist_exam: "Have you been examined by a urologist?",
            bladder_allergies_status: "Do you have any known allergies?",
            bladder_allergies: "Please list out any allergies you have:",
            bladder_medicines_vitamins_suppliments: "Please list all your current medicines, vitamins, and dietary supplements (include any that you have taken in the past month, even if you are not taking them today).",
            bladder_medical_history_status: "Do you have any medical conditions or a history of prior surgeries?",
            bladder_medical_history: "Do you have any medical conditions or a history of prior surgeries? Please describe in the box below:",
            bladder_extra_for_doctor_status: "Is there anything else you want your doctor to know about your condition or health?",
            bladder_extra_for_doctor: "Is there anything else you want your doctor to know about your condition or health? Please describe in the box below:",
            drug_name : "Do you have a treatment preference?",
            drug_does: "Dosage:",
            drug_price_of_pill: "Price of Medicines:",
            shipping_address : "Shipping Address",
            total: "Total",
            attachment: "Attachments:",
            gov_id: "Government ID:",
            self_image: "Self Image:",
            image: "Bladder Control Photo:"          
        }
    },
    COLDSORES: {
        QUESTIONS:{
            coldSores_begin : "When did you first start getting them?",
            coldSores_times : "How many times have you had cold sore outbreaks in the past year?",
            coldSores_duration : "If you get a cold sore how long does it usually last?",
            coldSores_have : "Have you had a cold sore before?",
            coldSores_symptoms : "Have you had any of the following symptoms associated with your cold sore?",
            coldSores_drugs : "Do you take any of the following recreational drugs?",
            coldSores_medication : "Are you currently taking any of the following over-the-counter medications?",
            coldSores_immunocompromised : "Are you immune deficient (or immunocompromised) in any way?",
            coldSores_medicines_vitamins_suppliments : "Please list all your current medicines, vitamins, and dietary supplements (include any that you have taken in the past month, even if you are not taking them today).Otherwise, just leave the box blank and click Next.",
            coldSores_alltergies : "Please list any allergies you have to food, medicine, herbs, vitamins, supplements or anything else. Otherwise, just leave the box blank and click Next.",
            coldSores_medical_history_status : "Do you have any medical conditions or a history of prior surgeries?",
            coldSores_medical_history : "Do you have any medical conditions or a history of prior surgeries?",
            coldSores_extras : "Do any of the following apply to you?",
            lifestyle_questions : "Which of the following apply to you?",
            coldSores_condition_by_doctor_status : "Is there anything else you want your doctor to know about your condition or health?",
            coldSores_condition_by_doctor : "Is there anything else you want your doctor to know about your condition or health? If so, please leave your message to your doctor here:",

            coldSores_drug_does : "How many outbreaks would you like your bottle of Valacyclovir to cover before you have to request a refill?",
            coldSores_drug_price_of_pill : "How many outbreaks would you like your bottle of Valacyclovir to cover before you have to request a refill?",
            image: "Image:",
            drug_name : "Do you have a treatment preference?",
            drug_does : "Drug Dosage",
            drug_does_weekly : "To help your doctor determine how many pills they need to prescribe you, please tell us how many times per week do you anticipate using your medication for sexual activity?",
            total : "Total",
            shipping_address : "Shipping Address:",
            attachment: "Attachments:",
            gov_id: "Government ID:",
            self_image: "Self Image:",
            coldSores_select_all: "Select all that apply to you:"
        }
    },
    GENITALHERPES: {
        QUESTIONS:{
            genitalHerpes_begin : "When did your genital lesion begin?",
            genitalHerpes_symptoms_lesion: "Please mark all that symptoms associated with the lesion:",
            genitalHerpes_simmilar_past : "Have you ever had similar genital lesions in the past?",
            genitalHerpes_times: "How many times have you had similar lesions in the past year?",
            genitalHerpes_duration: "If you get a genital lesion how long does it usually last?",
            genitalHerpes_drainage: "Is there any drainage associated with the lesion?",
            genitalHerpes_sores_in_mouth: "Do you have any similar sores inside your mouth?",
            genitalHerpes_had_symptoms: "Have you had any of the following symptoms associated with your lesion?",
            genitalHerpes_exam: "Have you had a genital exam with a healthcare provider in the past five years?",
            genitalHerpes_bllod_pressure_status: "Have you had your blood pressure measured in the last 6 months?",
            genitalHerpes_bllod_pressure: "Have you had your blood pressure measured in the last 6 months? If you know it, please provide your blood pressure:",
            genitalHerpes_resting_reate: "What is you resting pulse rate?",
            genitalHerpes_disease: "Select all that apply to you:",
            genitalHerpes_immunocompromised: "Are you immune deficient (or immunocompromised) in any way?",
            genitalHerpes_drugs: "Do you take any of the following recreational drugs?",
            genitalHerpes_medication: "Are you currently taking any of the following over-the-counter medications:",
            genitalHerpes_unprotected_sex: "Have you had unprotected sex in the past month?",
            genitalHerpes_std_history: "Do you have a prior history of sexually transmitted disease (STDs)?",
            genitalHerpes_std_list: "Please list out which STDs?",
            genitalHerpes_std_medication: "Please list any STD treatment medications you currently taking or have in the past:",
            genitalHerpes_std_tested: "Have you been tested for any STDs in the past 6 months?",
            genitalHerpes_medicines_vitamins_suppliments: "Please list all your current medicines, vitamins, and dietary supplements (include any that you have taken in the past month, even if you are not taking them today).",
            genitalHerpes_food_allergies: "Please list any allergies you have to food, medicine, herbs, vitamins, supplements or anything else.",
            genitalHerpes_medical_history_status: "Do you have any medical conditions or a history of prior surgeries?",
            genitalHerpes_medical_history: "Do you have any medical conditions or a history of prior surgeries? Please describe here:",
            genitalHerpes_extra_info: "Do any of the following apply to you?",
            genitalHerpes_alcohol: "Do you use alcohol products?",
            genitalHerpes_tobacco_use: "Do you use tobacco products?",
            genitalHerpes_tobacoo_per_week: "How many packs per week?",
            genitalHerpes_condition_by_doctor_status: "Is there anything else you want your doctor to know about your condition or health?",
            genitalHerpes_condition_by_doctor: "Is there anything else you want your doctor to know about your condition or health? If so, please leave your message to your doctor here:",
            image: "Lesion Image:",
            drug_name : "Do you have a treatment preference?",
            drug_does : "Drug Dosage",
            drug_does_weekly : "To help your doctor determine how many pills they need to prescribe you, please tell us how many times per week do you anticipate using your medication for sexual activity?",
            total : "Total",
            shipping_address : "Shipping Address:",
            attachment: "Attachments:",
            gov_id: "Government ID:",
            self_image: "Self Image:",
            drug_price_of_pill: "Price of Medicines:",
            drug_outbreak: "Drug Outbreak:"
        }
    },
    HAIRLOSS: {
        QUESTIONS:{
            chairLoss_hairLoss_age: "At what age did you first start noticing hair loss?",
            chairLoss_hairLoss_logn_age: "How long ago did you first notice any signs of hair loss?",
            chairLoss_hairLoss_cause: "Please pick the best description of your hair?",
            hairLoss_hairLoss_at: "I have experienced the following hair loss symptoms (select those that apply):",
            hair_loss_symptoms: "I have experienced the following hair loss symptoms (select those that apply), Please explain your hair loss symptoms :",
            hairLoss_hormonal_agents : "Have you ever been formally treated for hair loss?",
            hairLoss_cosmetics: "Do you have a family history of hair loss?",
            hairloss_bllod_pressure: "Please tell us which family members experienced hair loss?",
            Effectiveness_of_treatment_used : "Which of the following treatments have you used for hair loss? If you have tried above treatments, please explain the effectiveness and if you had any side effects:",
            shampoo_used_in_last_12months: "Please list shampoos that you have used in part 12 months:",
            hairLoss_current_medicines: "Please list all your current medicines, vitamins, and dietary supplements (include any that you have taken in the past month, even if you are not taking them today).",
            allergies_to_food_herbs: "Please list any allergies you have to food, medicine, herbs, vitamins, supplements or anything else",
            hairLoss_surgeries_status : "Do you have any medical conditions or a history of prior surgeries?",
            hairLoss_surgeries : "Do you have any medical conditions or a history of prior surgeries? Please describe in the box below:",
            experienced_symptoms:"Have you experienced any of the following conditions, events or symptoms?",
            lifestyle_questions: "Which of the following apply to you?",
            hairLoss_condition_by_doctor_status : "Is there anything else you want your doctor to know about your condition or health?",
            hairLoss_condition_by_doctor : "Is there anything else you want your doctor to know about your condition or health? If so, please leave your message to your doctor here:",
            drug_name : "Do you have a treatment preference?",
            drug_does : "Drug Dosage",
            drug_does_weekly : "To help your doctor determine how many pills they need to prescribe you, please tell us how many times per week do you anticipate using your medication for sexual activity?",
            total : "Total",
            shipping_address : "Shipping Address:",
            attachment: "Attachments:",
            gov_id: "Government ID:",
            self_image: "Self Image:",
            hairloss_face_forward: "Face Forward",
            hairloss_top_head: "Top Head",
            hairloss_profile_side: "Side Face Profile",
            drug_price_of_pill: "Price of Medicines:",
            hairLoss_by_doctor_status: "Is there anything else you want your doctor to know about your condition or health?"
        }
    },
    PREMATUREEJACULATION: {
        QUESTIONS:{
            pe_begin : "How did your Premature Ejaculation (PE) begin?",
            pe_sex : "How long does your erection typically last when having sex?",
            pe_erections : "Do you get erections easily?",
            pe_weekly_sex : "How many times a week do you typically have sex?",
            pe_maintaining_erections : "How often do you have trouble getting or maintaining an erection?",
            pe_genital_exam : "Have you had a genital exam with a healthcare provider in the past five years?",
            pe_bllod_pressure_status : "Have you had your blood pressure measured in the last 6 months?",
            pe_bllod_pressure : "If you know blood pressure measured, please provide your blood pressure:",
            pe_disease : "Select all that apply:",
            pe_medication_pe : "Have you ever taken medication for Premature Ejaculation or Erectile Dysfunction in the past? Which ones?",
            pe_medication_status : "Have you ever taken medication for Premature Ejaculation or Erectile Dysfunction in the past?",
            pe_penile : "Have you ever had a penile implant, penile injection or penis pump?",
            pe_allergies_status : "Do you have any known allergies?",
            pe_allergies : "Please list out any allergies you have:",
            pe_alcohol: "Do you use alcohal products?",
            pe_tobacco : "Do you use tobacco products?",
            pe_weekly_pack : "If you use tobacco products how many packs per week do?",
            pe_current_medicines : "Please list all your current medicines, vitamins, and dietary supplements (include any that you have taken in the past month, even if you are not taking them today):",
            pe_surgeries_status : "Do you have any medical conditions or a history of prior surgeries?",
            pe_surgeries : "Please describe any medical conditions or a history of prior surgeries in the box below:",
            pe_symptoms : "Do you have any of the following cardiovascular symptoms?",
            pe_condition_by_doctor_status : "Is there anything else you want your doctor to know about your condition or health?",
            pe_condition_by_doctor : "If so, please leave your message to your doctor here:",
            drug_name : "Do you have a treatment preference?",
            drug_does : "Drug Dosage",
            drug_does_weekly : "To help your doctor determine how many pills they need to prescribe you, please tell us how many times per week do you anticipate using your medication for sexual activity?",
            total : "Total",
            shipping_address : "Shipping Address:",
            attachment: "Attachments:",
            gov_id: "Government ID:",
            self_image: "Self Image:",
            image: "PE Photo:",
            drug_price_of_pill: "Price of Medicines:",
            pe_medications: "Are you currently taking any of the following over-the-counter medications?",
            pe_alcohal: "Do you use alcohol products?",
            pe_resting_reate: "What is you resting pulse rate?"
        }
    },
    ERECTILEDYSFUNCTION: {
        QUESTIONS:{
            ed_begin : "How did your ED begin?",
            ed_sex : "How long does your erection typically last when having sex?",
            ed_erections : "Do you get erections easily?",
            ed_weekly_sex : "How many times a week do you typically have sex?",
            ed_maintaining_erections : "How often do you have trouble getting or maintaining an erection?",
            ed_genital_exam : "Have you had a genital exam with a healthcare provider in the past five years?",
            ed_bllod_pressure_status : "Have you had your blood pressure measured in the last 6 months?",
            ed_bllod_pressure : "If you know it, please provide your blood pressure.",
            ed_resting_reate : "What is you resting pulse rate?",
            ed_disease : "Select all that apply:",
            ed_drug_status : "Have you ever taken ED drugs in the past?",
            ed_drug : "ED Drugs Taken",
            ed_penile : "Have you ever had a penile implant, penile injection or penis pump?",
            ed_medications : "Are you currently taking any of the following over-the-counter medications?",
            ed_allergies_status : "Do you have any known allergies?",
            ed_allergies : "Please list out any allergies you have:",
            ed_current_medicines : "Please list all your current medicines, vitamins, and dietary supplements (include any that you have taken in the past month, even if you are not taking them today)",
            ed_surgeries_status : "Do you have any medical conditions or a history of prior surgeries?",
            ed_surgeries : "Medical conditions or a history of prior surgeries :",
            ed_experienced : "Do you currently have, you ever experienced, any of the follwing?",
            ed_conditions : "Do you have any of these conditions?",
            ed_currently_experienced : "Do you currently have, or you ever experienced, any of the following?",
            ed_symptoms : "Do you have any of the following cardiovascular symptoms?",
            ed_prescription : "Do you currently use, or have an active prescription for, any of the following?",
            ed_prescription_apply : "Which of the following apply to you?",
            ed_condition_by_doctor_status : "Is there anything else you want your doctor to know about your condition or health?",
            ed_condition_by_doctor : "Is there anything else you want your doctor to know about your condition or health?, please leave your message to your doctor here:",
            ed_deformities_genitalia: "Do you have any external deformities of your genitalia? Mention if there is anything else you want your doctor to know.",
            drug_name : "Do you have a treatment preference?",
            drug_does : "Drug Dose:",
            drug_does_weekly : "To help your doctor determine how many pills they need to prescribe you, please tell us how many times per week do you anticipate using your medication for sexual activity?",
            shipping_address : "Shipping Address",
            total: "Total",
            attachment: "Attachments:",
            gov_id: "Government ID:",
            self_image: "Self Image:",
            image: "ED Photo:",
            drug_price_of_pill: "Price of Medicines:",
            ed_external_deformities: "Do you have any external deformities of your genitalia?",
            ed_external_deformities_text: "Mention if there is anything else you want your doctor to know If you have any external deformities of your genitalia:",
        }
    },
    DEFAULT: {
        QUESTIONS:{
            doctor_help: "The Doctor can help. Just a couple quick questions before I transfer you. What are all your symptoms? Are you currently using any medications?",
            age_gender: "What's your age and gender?",
            history   : "Anything else in your medical history you think the Doctor should know?",
            got_it: "OK. Got it. I'm sending you to a secure page to join OnlineDoctorsverifysm"
        }
    }
};

exports.FORMS = Object.freeze(FORMS);