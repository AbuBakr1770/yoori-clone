import { Box, Text, Link, UnorderedList } from "@chakra-ui/react";
import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Categories = () => {
  const categories = [
    { name: "Fashion", subcategories: ["Men", "Women", "Kids"] },
    { name: "Electronic", subcategories: ["Mobile", "Laptop", "Camera"] },
    { name: "Home", subcategories: ["Furniture", "Decor", "Lighting"] },
    {
      name: "Appliances",
      subcategories: ["Refrigerator", "Washing Machine", "Microwave"],
    },
    { name: "Travel", subcategories: ["Luggage", "Accessories", "Gear"] },
    {
      name: "Health & Beauty",
      subcategories: ["Skincare", "Haircare", "Makeup"],
    },
    { name: "Toys", subcategories: ["Action Figures", "Puzzles", "Dolls"] },
    { name: "Grocery", subcategories: ["Fruits", "Vegetables", "Snacks"] },
    {
      name: "Mobile",
      subcategories: ["Smartphones", "Accessories", "Tablets"],
    },
  ];

  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <>
      <Box as="ul" px={4} py={2} className="list-none">
        <UnorderedList>
          {categories.map((category) => (
            <Box
              key={category.name}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              as="li"
              className="mr-4 hover:text-yellow-400 cursor-pointer"
              border={"1px solid #0000001c"}
              p={3}
              position="relative"
              onMouseEnter={() => setHoveredCategory(category.name)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <Link fontSize="sm" fontWeight="medium">
                {category.name}
              </Link>

              <MdOutlineKeyboardArrowRight />

              {hoveredCategory === category.name && (
                <Box
                  position="absolute"
                  top="1px"
                  left="100%"
                  bg="white"
                  border="1px solid #0000001c"
                  mt={2}
                  p={5}
                  zIndex={1}
                  boxShadow="md"
                  width={"60vw"}
                >
                  <Box borderBottom={"1px solid #0000001c"}>
                    <Text color={"black"} fontSize={"xl"} fontWeight={"light"}>
                      Heading
                    </Text>
                  </Box>
                  {category.subcategories.map((subcategory) => (
                    <>
                      <Text
                        key={subcategory}
                        _hover={{ color: "yellow.400" }}
                        color={"black"}
                        //   p={1}
                      >
                        {subcategory}
                      </Text>
                    </>
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </UnorderedList>
      </Box>

      <Box as="ul" mt={"-17px"} px={4} py={2} className="list-none">
        <UnorderedList>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            as="li"
            className="mr-4 hover:text-yellow-400 cursor-pointer"
            border={"1px solid #0000001c"}
            p={3}
            position="relative"
            // onMouseEnter={() => setHoveredCategory(category.name)}
            // onMouseLeave={() => setHoveredCategory(null)}
          >
            <Link fontSize="sm" fontWeight="medium">
              View All
            </Link>

            <MdOutlineKeyboardArrowRight />
          </Box>
        </UnorderedList>
      </Box>
    </>
  );
};

export default Categories;
