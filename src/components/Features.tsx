import { Box, Stack, HStack, Icon, StackProps, Text } from "@chakra-ui/react";
import * as React from "react";
import {
  DailySubIcon,
  MoneyBackGuaranteeIcon,
  MonthlySubIcon,
} from "../icons/icons";

interface FeatureProps extends StackProps {
  icon: React.ElementType;
}

const Feature = (props: FeatureProps) => {
  const { icon, children, ...rest } = props;

  return (
    <HStack {...rest} spacing="6" align='start'>
      <Icon as={icon} boxSize={['8','8','12']} />
      <Text textAlign='left' fontWeight="bold" fontSize="lg">
        {children}
      </Text>
    </HStack>
  );
};

const Features = () => {
  return (
    <Box maxW="1024px" m="auto" pt='60px' pb='8' as='section'>
      <Stack px='12' direction={['column','column','row']} spacing={['6','6','5']}>
        <Feature icon={DailySubIcon}>30 days money back Guarantee</Feature>
        <Feature icon={MoneyBackGuaranteeIcon}>
          No setup fees 100% hassle-fee
        </Feature>
        <Feature icon={MonthlySubIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </Stack>
    </Box>
  );
};

export default Features;
