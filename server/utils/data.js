const users = [
    // example data
    {
        "username": "lernantino",
        "email": "lernantino@gmail.com",
        "password": "lernantino111000"
    },
    {
        "username": "mabs5025",
        "email": "mabs5025@gmail.com",
        "password": "mabs242424"
    }
];

const exercises = [
    {
        "exerciseName": "Bicep Curl",
        "equipmentNeeded": "Dumbbells",
        "description": "Begin in a standing position with a dumbbell in each hand. Your arms should be hanging at your sides with your palms facing inward. Look directly ahead, keeping your chest up, with your feet shoulder-width apart. This will be your starting position. Squeeze one of your biceps to lift your dumbbell up. Do not use momentum or flex through the shoulder, instead use a controlled motion. Move only at the elbow keeping your upper arm and shoulder totally vertical. As you curl up, turn your hand over so that your palm is facing the sky when your elbow is parallel with the ground. Keep lifting up until you get to the end of your range of motion, squeezing your biceps the entire time. Lower the weight back down with control while rotating back to starting position. Complete the desired number of repetitions before switching to the opposite side.",
        "difficulty": "Beginner",
        "image": "",
        "group": {
            "groupName": "upper",
            "description": "These exercise help to tone your arms and shoulders. They increase your upper body strength."
        },
    },
    {
        "exerciseName": "Push-Up",
        "equipmentNeeded": "None",
        "description": "Get down on all fours and position your hands slighlty wider then your shoulders. Don't lock out your elbows, keep them slightly bent. Extend your legs back so your feet are hip-width apart. Contract your abs and tighten your core by pulling your belly button towards your spine. This is your starting position. Inhale as you slowly bend your elbows and lower yourself to the floor, until your elbows are at a 90 degree angle. Exhale while contracting your chest muscles and pushing back up through your hands back to the starting position.",
        "difficulty": "Intermediate",
        "image": "",
        "group": {
            "groupName": "upper",
            "description": "These exercise help to tone your arms and shoulders. They increase your upper body strength."
        },
    },
    {
        "exerciseName": "Dumbbell Bench Press",
        "equipmentNeeded": "Dumbbells",
        "description": "Lie down on a flat bench with a dumbbell in each hand resting on top of your thighs. The palms of your hands will be facing each other. Then, using your thighs to help raise the dumbbells up, lift the dumbbells one at a time so that you can hold them in front of you at shoulder width. Once at shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. The dumbbells should be just to the sides of your chest, with your upper arm and forearm creating a 90 degree angle. Be sure to maintain full control of the dumbbells at all times. This will be your starting position. Then, as you breathe out, use your chest to push the dumbbells up. Lock your arms at the top of the lift and squeeze your chest, hold for a second and then begin coming down slowly. Lowering the weight should take about twice as long as raising it. When you are done, do not drop the dumbbells next to you as this is dangerous to your rotator cuff in your shoulders. Just lift your legs from the floor bending at the knees, twist your wrists so that the palms of your hands are facing each other and place the dumbbells on top of your thighs. When both dumbbells are touching your thighs simultaneously push your upper torso up (while pressing the dumbbells on your thighs) and also perform a slight kick forward with your legs (keeping the dumbbells on top of the thighs). By doing this combined movement, momentum will help you get back to a sitting position with both dumbbells still on top of your thighs. At this moment you can place the dumbbells on the floor.",
        "difficulty": "Intermediate",
        "image": "",
        "group": {
            "groupName": "upper",
            "description": "These exercise help to tone your arms and shoulders. They increase your upper body strength."
        },
    },
    {
        "exerciseName": "Squat",
        "equipmentNeeded": "None",
        "description": "Stand tall with your feet slightly wider than hip-width apart and your toes slightly turned out. Contract your core, keep your chest up, and look ahead with your hands clasped together at your chest. This is your starting position. Bend at the knees and hips as you sit back unitl your thighs are parallel to the floor. Keep your weight evenly distributed between both feet. Don't let your knees cave in and always make sure they are pushing out. Your shoulders should be back and realxed and your back straight, there will be a slight lean forward of your full torso. Using your glutes, push yourself back up to your starting postion. Repeat.",
        "difficulty": "Beginner",
        "image": "",
        "group": {
            "groupName": "lower",
            "description": "These exercises help to strengthen your glutes, quadriceps, hamstrings, and calves."
        }
    },
    {
        "exerciseName": "Romanian Deadlift With Dumbbells",
        "equipmentNeeded": "Dumbbells",
        "description": "Begin in a standing position with a dumbbell in each hand. Ensure that your back is straight and stays that way for the duration of the exercise. Allow your arms to hang perpendicular to the floor, with the wrists pronated and the elbows pointed to your sides. This will be your starting position. Initiate the movement by flexing your hips, slowly pushing your butt as far back as you can. This should entail a horizontal movement of the hips, rather than a downward movement. The knees should only partially bend, and your weight should remain on your heels. Drive your butt back as far as you can, which should generate tension in your hamstrings as your hands approach knee level. When your hips cannot perform any further backward movement, pause, and then slowly return to the starting position by extending the hips.",
        "difficulty": "Beginner",
        "image": "",
        "group": {
            "groupName": "lower",
            "description": "These exercises help to strengthen your glutes, quadriceps, hamstrings, and calves."
        }
    },
    {
        "exerciseName": "Calf Raise",
        "equipmentNeeded": "None",
        "description": "Stand with your feet shoulder-width apart, toes pointing forward. Keep your back straight, shoulders back and down, and abs pulled in. This is your starting position. Raise your heels slowly, keeping your knees extended but never lock them. Pause for one second when you're standing as much on the tips of your toes as you can. Lower your heels back to the ground, returning to the starting position.",
        "difficulty": "Beginner",
        "image": "",
        "group": {
            "groupName": "lower",
            "description": "These exercises help to strengthen your glutes, quadriceps, hamstrings, and calves."
        }
    },
    {
        "exerciseName": "Elbow plank",
        "equipmentNeeded": "None",
        "description": "Get into a prone position on the floor, supporting your weight on your toes and your forearms. Your arms are bent and directly below the shoulder. Keep your body straight at all times, and hold this position as long as possible. To increase difficulty, an arm or leg can be raised",
        "difficulty": "Intermediate",
        "image": "",
        "group": {
            "groupName": "core",
            "description": "These exercises strengthen your back and core, reducing back pain. They help improve your posture, balance, flexibility, and stability."
        }
    },
    {
        "exerciseName": "Dumbbell Spell Caster",
        "equipmentNeeded": "Dumbbells",
        "description": "Hold a dumbbell in each hand with a pronated grip. Your feet should be hip-width apart and knees extended. This will be your starting position. Begin the movement by pulling both of the dumbbells to one side next to your hip, rotating your torso. Keeping your arms straight and the dumbbells parallel to the ground, rotate your torso to swing the weights to your opposite side. Continue alternating, rotating from one side to the other until the set is complete.",
        "difficulty": "Beginner",
        "image": "",
        "group": {
            "groupName": "core",
            "description": "These exercises strengthen your back and core, reducing back pain. They help improve your posture, balance, flexibility, and stability."
        }
    },
    {
        "exerciseName": "Spider Crawl",
        "equipmentNeeded": "None",
        "description": "Begin in a prone position on the floor. Support your weight on your hands and toes, with your feet together and your body straight. Your arms should be bent to 90 degrees. This will be your starting position. Initiate the movement by raising one foot off of the ground. Externally rotate the leg and bring the knee toward your elbow, as far forward as possible. Return this leg to the starting position and repeat on the opposite side.",
        "difficulty": "Intermediate",
        "image": "",
        "group": {
            "groupName": "core",
            "description": "These exercises strengthen your back and core, reducing back pain. They help improve your posture, balance, flexibility, and stability."
        }
    },
    {
        "exerciseName": "Burpees",
        "equipmentNeeded": "None",
        "description": "Stand with feet about hip-width apart, this is your starting position. Squat to the floor, placing your hands on the floor in front of you. Jump explosively with your feet out behind you so that you're in a push-up position, on your hands and toes with your body in a straight line. Do a push-up on your toes or knees (this is optional and adds quite a bit of intensity). Take care not to drop your hips. Jump your feet back to start, stand up, and repeat for 10 to 15 reps or 30 to 60 seconds.",
        "difficulty": "Intermediate",
        "image": "",
        "group": {
            "groupName": "cardio",
            "description": "These exercises help get your heart rate up and your blood pumping, strengthening your heart. They help burn fat, increase lung capacity, and increase your bone density. Cardio also helps relieve stress."
        }
    },
    {
        "exerciseName": "Mountain Climbers",
        "equipmentNeeded": "None",
        "description": "Get into a push-up position on your hands and toes, back flat, and abs engaged. This is your starting position. Bring your right knee toward your chest with your opposite foot on the floor. Jump up and switch feet in the air, bringing the left foot in and the right foot back. Continue alternating the feet for 30 to 60 seconds.",
        "difficulty": "Intermediate",
        "image": "",
        "group": {
            "groupName": "cardio",
            "description": "These exercises help get your heart rate up and your blood pumping, strengthening your heart. They help burn fat, increase lung capacity, and increase your bone density. Cardio also helps relieve stress."
        }
    },
    {
        "exerciseName": "Side-To-Side Jumping Lunges",
        "equipmentNeeded": "None",
        "description": "Engage your abs to protect your back. Take your right leg to the side as you bend your left knee, turning your body to the left in a runner's lunge. Touch your right fingers to the floor, if you can. This is your starting position. Jump up quickly to shift your feet and lunge to the right side, touching your left hand to the floor. Continue alternating sides for 30 to 60 seconds.",
        "difficulty": "Intermediate",
        "image": "",
        "group": {
            "groupName": "cardio",
            "description": "These exercises help get your heart rate up and your blood pumping, strengthening your heart. They help burn fat, increase lung capacity, and increase your bone density. Cardio also helps relieve stress."
        }
    },
];

module.exports = { users, exercises};