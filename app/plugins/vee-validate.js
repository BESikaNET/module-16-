import { localize } from "@vee-validate/i18n";
import { email, required } from "@vee-validate/rules";
import { configure, defineRule } from "vee-validate";
import ru from "~/json/vee-validate/ru.json";

export default defineNuxtPlugin(() => {
  const phoneValidator = (value) => {
    if (value === null || value === undefined || value === "") return true;

    return /^((\+7|8)\s?(\(\d{3}\)|\d{3})\s?\d{3}-?\d{2}-?\d{2})$/.test(
      value,
    );
  };

  defineRule("required", required);
  defineRule("email", email);
  defineRule("phone", phoneValidator);

  configure({
    generateMessage: localize({ ru }),
  });

  localize("ru");
});
