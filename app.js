/**
 * ChartPattern.learn - Interactive Learning Platform
 * Encyclopedia of Chart Patterns - Vietnamese Translation
 * Version: 2.0.0 - Phase 1: 20 Popular Patterns
 */

// ========================================
// Pattern Data - Phase 1: 20 Popular Patterns
// ========================================

const patternsData = {
    // ========== REVERSAL PATTERNS (Đảo chiều) ==========

    'head-shoulders': {
        name: 'Đầu và Vai',
        nameEn: 'Head and Shoulders',
        category: 'reversal',
        successRate: 89,
        avgMove: -18,
        avgDuration: '3-4 tuần',
        description: 'Mẫu Đầu và Vai là một trong những mẫu đảo chiều đáng tin cậy nhất trong phân tích kỹ thuật. Mẫu này xuất hiện ở đỉnh của xu hướng tăng và báo hiệu sự đảo ngược sang xu hướng giảm.',
        structure: [
            'Vai trái: Đỉnh đầu tiên, thấp hơn đầu',
            'Đầu: Đỉnh cao nhất, nằm ở giữa',
            'Vai phải: Đỉnh thứ ba, tương đương vai trái',
            'Đường cổ: Nối hai đáy giữa các đỉnh'
        ],
        tradingRules: [
            'Đợi giá phá vỡ đường cổ trước khi vào lệnh',
            'Khối lượng nên tăng khi phá vỡ',
            'Mục tiêu giá = Khoảng cách từ đầu đến đường cổ',
            'Stop loss đặt trên vai phải'
        ],
        tips: [
            'Hai vai không cần đối xứng hoàn toàn',
            'Đường cổ có thể nghiêng nhẹ',
            'Phân tích thêm các chỉ báo khác để xác nhận'
        ],
        statistics: {
            bullishBreakout: 0,
            bearishBreakout: 89,
            averageRise: 0,
            averageDecline: 18,
            pullbackRate: 4
        }
    },

    'inverse-head-shoulders': {
        name: 'Đầu và Vai Ngược',
        nameEn: 'Inverse Head and Shoulders',
        category: 'reversal',
        successRate: 81,
        avgMove: 22,
        avgDuration: '3-4 tuần',
        description: 'Mẫu Đầu và Vai Ngược là phiên bản đảo ngược của mẫu Đầu và Vai, xuất hiện ở đáy xu hướng giảm và báo hiệu đảo chiều tăng.',
        structure: [
            'Vai trái: Đáy đầu tiên, cao hơn đầu',
            'Đầu: Đáy thấp nhất, nằm ở giữa',
            'Vai phải: Đáy thứ ba, tương đương vai trái',
            'Đường cổ: Nối hai đỉnh giữa các đáy'
        ],
        tradingRules: [
            'Vào lệnh mua khi giá phá vỡ đường cổ',
            'Khối lượng nên tăng mạnh khi phá vỡ',
            'Mục tiêu = Khoảng cách từ đầu đến đường cổ',
            'Stop loss đặt dưới vai phải'
        ],
        tips: [
            'Tìm kiếm divergence với RSI/MACD',
            'Khối lượng tăng ở đầu và giảm ở vai phải',
            'Pullback về đường cổ là cơ hội mua thứ 2'
        ],
        statistics: {
            bullishBreakout: 81,
            bearishBreakout: 0,
            averageRise: 22,
            averageDecline: 0,
            pullbackRate: 8
        }
    },

    'double-top': {
        name: 'Đỉnh Kép',
        nameEn: 'Double Top',
        category: 'reversal',
        successRate: 78,
        avgMove: -15,
        avgDuration: '2-3 tuần',
        description: 'Mẫu Đỉnh Kép hình thành khi giá tạo hai đỉnh ở cùng một mức giá. Đây là mẫu đảo chiều giảm mạnh, báo hiệu kết thúc xu hướng tăng.',
        structure: [
            'Đỉnh đầu tiên: Giá đạt đỉnh và giảm',
            'Đáy giữa (Neckline): Mức hỗ trợ tạm thời',
            'Đỉnh thứ hai: Giá quay lại mức đỉnh cũ và giảm'
        ],
        tradingRules: [
            'Vào lệnh bán khi giá phá vỡ đáy giữa',
            'Khối lượng thường giảm ở đỉnh thứ hai',
            'Mục tiêu = Khoảng cách từ đỉnh đến đáy giữa',
            'Stop loss đặt trên đỉnh thứ hai'
        ],
        tips: [
            'Hai đỉnh nên cách nhau ít nhất 10 phiên',
            'Khối lượng thấp hơn ở đỉnh thứ hai là tín hiệu tốt',
            'Có thể có đỉnh thứ ba hiếm gặp'
        ],
        statistics: {
            bullishBreakout: 0,
            bearishBreakout: 78,
            averageRise: 0,
            averageDecline: 15,
            pullbackRate: 9
        }
    },

    'double-bottom': {
        name: 'Đáy Kép',
        nameEn: 'Double Bottom',
        category: 'reversal',
        successRate: 82,
        avgMove: 20,
        avgDuration: '2-3 tuần',
        description: 'Mẫu Đáy Kép hình thành khi giá tạo hai đáy ở cùng một mức giá. Đây là mẫu đảo chiều tăng mạnh, báo hiệu kết thúc xu hướng giảm.',
        structure: [
            'Đáy đầu tiên: Giá đạt đáy và tăng',
            'Đỉnh giữa: Mức kháng cự tạm thời',
            'Đáy thứ hai: Giá quay lại mức đáy cũ và tăng'
        ],
        tradingRules: [
            'Vào lệnh mua khi giá phá vỡ đỉnh giữa',
            'Khối lượng nên tăng khi phá vỡ',
            'Mục tiêu = Khoảng cách từ đáy đến đỉnh giữa',
            'Stop loss đặt dưới đáy thứ hai'
        ],
        tips: [
            'Hai đáy nên cách nhau ít nhất 10 phiên',
            'Khối lượng tăng ở đáy thứ hai là tín hiệu tốt',
            'Divergence với RSI tăng độ tin cậy'
        ],
        statistics: {
            bullishBreakout: 82,
            bearishBreakout: 0,
            averageRise: 20,
            averageDecline: 0,
            pullbackRate: 11
        }
    },

    'triple-top': {
        name: 'Đỉnh Ba',
        nameEn: 'Triple Top',
        category: 'reversal',
        successRate: 84,
        avgMove: -20,
        avgDuration: '3-6 tuần',
        description: 'Mẫu Đỉnh Ba tương tự Đỉnh Kép nhưng có ba đỉnh ở cùng một mức giá. Tín hiệu đảo chiều mạnh hơn Đỉnh Kép.',
        structure: [
            'Ba đỉnh ở cùng mức giá hoặc gần bằng nhau',
            'Hai đáy giữa các đỉnh',
            'Đường cổ nối hai đáy thấp nhất'
        ],
        tradingRules: [
            'Vào lệnh bán khi giá phá vỡ đường cổ',
            'Khối lượng giảm dần qua các đỉnh',
            'Mục tiêu = Khoảng cách từ đỉnh đến đường cổ',
            'Stop loss đặt trên đỉnh cao nhất'
        ],
        tips: [
            'Ba đỉnh không cần hoàn toàn bằng nhau',
            'Mẫu mạnh hơn Đỉnh Kép',
            'Thời gian hình thành càng lâu càng mạnh'
        ],
        statistics: {
            bullishBreakout: 0,
            bearishBreakout: 84,
            averageRise: 0,
            averageDecline: 20,
            pullbackRate: 7
        }
    },

    'triple-bottom': {
        name: 'Đáy Ba',
        nameEn: 'Triple Bottom',
        category: 'reversal',
        successRate: 86,
        avgMove: 22,
        avgDuration: '3-6 tuần',
        description: 'Mẫu Đáy Ba tương tự Đáy Kép nhưng có ba đáy ở cùng một mức giá. Tín hiệu đảo chiều mạnh hơn Đáy Kép.',
        structure: [
            'Ba đáy ở cùng mức giá hoặc gần bằng nhau',
            'Hai đỉnh giữa các đáy',
            'Đường kháng cự nối hai đỉnh cao nhất'
        ],
        tradingRules: [
            'Vào lệnh mua khi giá phá vỡ đường kháng cự',
            'Khối lượng tăng dần qua các đáy',
            'Mục tiêu = Khoảng cách từ đáy đến đường kháng cự',
            'Stop loss đặt dưới đáy thấp nhất'
        ],
        tips: [
            'Ba đáy không cần hoàn toàn bằng nhau',
            'Mẫu mạnh hơn Đáy Kép',
            'Xác nhận mức hỗ trợ 3 lần rất mạnh'
        ],
        statistics: {
            bullishBreakout: 86,
            bearishBreakout: 0,
            averageRise: 22,
            averageDecline: 0,
            pullbackRate: 6
        }
    },

    'rising-wedge': {
        name: 'Nêm Tăng',
        nameEn: 'Rising Wedge',
        category: 'reversal',
        successRate: 72,
        avgMove: -14,
        avgDuration: '2-4 tuần',
        description: 'Mẫu Nêm Tăng có hai đường biên đều dốc lên. Đây là mẫu đảo chiều giảm dù giá đang tăng trong nêm.',
        structure: [
            'Đường biên dưới: Dốc lên',
            'Đường biên trên: Dốc lên (độ dốc nhỏ hơn)',
            'Khối lượng giảm trong quá trình hình thành'
        ],
        tradingRules: [
            'Vào lệnh bán khi giá phá vỡ đường biên dưới',
            'Khối lượng nên tăng khi phá vỡ',
            'Mục tiêu = Chiều cao của nêm tại điểm rộng nhất',
            'Stop loss đặt trên đường biên trên'
        ],
        tips: [
            'Nêm tăng trong xu hướng tăng = Đảo chiều giảm',
            'Nêm tăng trong xu hướng giảm = Tiếp diễn giảm',
            'Phá vỡ sớm có xu hướng hiệu quả hơn'
        ],
        statistics: {
            bullishBreakout: 28,
            bearishBreakout: 72,
            averageRise: 8,
            averageDecline: 14,
            pullbackRate: 10
        }
    },

    'falling-wedge': {
        name: 'Nêm Giảm',
        nameEn: 'Falling Wedge',
        category: 'reversal',
        successRate: 81,
        avgMove: 18,
        avgDuration: '2-4 tuần',
        description: 'Mẫu Nêm Giảm có hai đường biên đều dốc xuống. Đây là mẫu đảo chiều tăng dù giá đang giảm trong nêm.',
        structure: [
            'Đường biên trên: Dốc xuống',
            'Đường biên dưới: Dốc xuống (độ dốc lớn hơn)',
            'Khối lượng giảm trong quá trình hình thành'
        ],
        tradingRules: [
            'Vào lệnh mua khi giá phá vỡ đường biên trên',
            'Khối lượng nên tăng khi phá vỡ',
            'Mục tiêu = Chiều cao của nêm tại điểm rộng nhất',
            'Stop loss đặt dưới đường biên dưới'
        ],
        tips: [
            'Nêm giảm trong xu hướng giảm = Đảo chiều tăng',
            'Nêm giảm trong xu hướng tăng = Tiếp diễn tăng',
            'Một trong những mẫu đáng tin cậy nhất'
        ],
        statistics: {
            bullishBreakout: 81,
            bearishBreakout: 19,
            averageRise: 18,
            averageDecline: 5,
            pullbackRate: 8
        }
    },

    'rounding-top': {
        name: 'Đỉnh Tròn',
        nameEn: 'Rounding Top',
        category: 'reversal',
        successRate: 71,
        avgMove: -16,
        avgDuration: '4-8 tuần',
        description: 'Mẫu Đỉnh Tròn hình thành với hình dáng cong lên trên, báo hiệu sự chuyển đổi từ xu hướng tăng sang giảm.',
        structure: [
            'Phần đầu: Giá tăng dần chậm lại',
            'Phần đỉnh: Giá đi ngang, tạo đỉnh tròn',
            'Phần đuôi: Giá giảm dần nhanh hơn'
        ],
        tradingRules: [
            'Vào lệnh bán khi giá phá vỡ đường hỗ trợ',
            'Khối lượng thường giảm ở đỉnh',
            'Mục tiêu = Chiều cao của mẫu',
            'Stop loss đặt trên đỉnh của mẫu'
        ],
        tips: [
            'Mẫu hình thành chậm, cần kiên nhẫn',
            'Xác nhận bằng đường khối lượng hình U ngược',
            'Hiệu quả hơn với cổ phiếu lớn'
        ],
        statistics: {
            bullishBreakout: 0,
            bearishBreakout: 71,
            averageRise: 0,
            averageDecline: 16,
            pullbackRate: 12
        }
    },

    'rounding-bottom': {
        name: 'Đáy Tròn',
        nameEn: 'Rounding Bottom / Saucer',
        category: 'reversal',
        successRate: 79,
        avgMove: 24,
        avgDuration: '4-8 tuần',
        description: 'Mẫu Đáy Tròn hình thành với hình dáng cong xuống dưới, báo hiệu sự chuyển đổi từ xu hướng giảm sang tăng.',
        structure: [
            'Phần đầu: Giá giảm dần chậm lại',
            'Phần đáy: Giá đi ngang, tạo đáy tròn',
            'Phần đuôi: Giá tăng dần nhanh hơn'
        ],
        tradingRules: [
            'Vào lệnh mua khi giá phá vỡ đường kháng cự',
            'Khối lượng thường hình chữ U',
            'Mục tiêu = Chiều cao của mẫu',
            'Stop loss đặt dưới đáy của mẫu'
        ],
        tips: [
            'Mẫu hình thành chậm, cần kiên nhẫn',
            'Khối lượng tăng dần về cuối mẫu',
            'Còn gọi là "Saucer" (đĩa)'
        ],
        statistics: {
            bullishBreakout: 79,
            bearishBreakout: 0,
            averageRise: 24,
            averageDecline: 0,
            pullbackRate: 9
        }
    },

    // ========== CONTINUATION PATTERNS (Tiếp diễn) ==========

    'cup-handle': {
        name: 'Cốc và Tay Cầm',
        nameEn: 'Cup and Handle',
        category: 'continuation',
        successRate: 88,
        avgMove: 25,
        avgDuration: '2-6 tháng',
        description: 'Mẫu Cốc và Tay Cầm được phát triển bởi William O\'Neil. Đây là mẫu tiếp diễn tăng mạnh với hình dạng giống chiếc cốc có tay cầm.',
        structure: [
            'Phần cốc: Hình chữ U, kéo dài 1-6 tháng',
            'Phần tay cầm: Điều chỉnh nhẹ, kéo dài 1-4 tuần',
            'Điểm phá vỡ: Giá vượt qua đỉnh tay cầm'
        ],
        tradingRules: [
            'Vào lệnh khi giá phá vỡ đường kháng cự',
            'Khối lượng tăng mạnh khi phá vỡ',
            'Mục tiêu = Độ sâu của cốc',
            'Stop loss đặt dưới tay cầm'
        ],
        tips: [
            'Tay cầm không được thấp quá 1/3 cốc',
            'Phần cốc nên có hình chữ U, không phải V',
            'Phá vỡ với khối lượng cao là tín hiệu mạnh'
        ],
        statistics: {
            bullishBreakout: 88,
            bearishBreakout: 12,
            averageRise: 25,
            averageDecline: 0,
            pullbackRate: 5
        }
    },

    'ascending-triangle': {
        name: 'Tam Giác Tăng',
        nameEn: 'Ascending Triangle',
        category: 'continuation',
        successRate: 75,
        avgMove: 12,
        avgDuration: '2-6 tuần',
        description: 'Mẫu Tam Giác Tăng có đường kháng cự nằm ngang và đường hỗ trợ tăng dần. Báo hiệu xu hướng tăng sẽ tiếp tục.',
        structure: [
            'Đường kháng cự: Nằm ngang, ở trên',
            'Đường hỗ trợ: Dốc lên, ở dưới',
            'Điểm hội tụ: Hai đường gặp nhau'
        ],
        tradingRules: [
            'Vào lệnh khi giá phá vỡ đường kháng cự',
            'Khối lượng giảm trong quá trình hình thành',
            'Mục tiêu = Chiều cao của tam giác',
            'Stop loss đặt dưới đường hỗ trợ'
        ],
        tips: [
            'Mẫu hình thành càng lâu càng mạnh',
            'Phá vỡ nên đi kèm khối lượng tăng',
            'Có thể xuất hiện ở cả đỉnh và đáy'
        ],
        statistics: {
            bullishBreakout: 75,
            bearishBreakout: 25,
            averageRise: 12,
            averageDecline: 5,
            pullbackRate: 11
        }
    },

    'descending-triangle': {
        name: 'Tam Giác Giảm',
        nameEn: 'Descending Triangle',
        category: 'continuation',
        successRate: 79,
        avgMove: -15,
        avgDuration: '2-6 tuần',
        description: 'Mẫu Tam Giác Giảm có đường hỗ trợ nằm ngang và đường kháng cự giảm dần. Báo hiệu xu hướng giảm sẽ tiếp tục.',
        structure: [
            'Đường hỗ trợ: Nằm ngang, ở dưới',
            'Đường kháng cự: Dốc xuống, ở trên',
            'Điểm hội tụ: Hai đường gặp nhau'
        ],
        tradingRules: [
            'Vào lệnh bán khi giá phá vỡ đường hỗ trợ',
            'Khối lượng giảm trong quá trình hình thành',
            'Mục tiêu = Chiều cao của tam giác',
            'Stop loss đặt trên đường kháng cự'
        ],
        tips: [
            'Mẫu hình thành càng lâu càng mạnh',
            'Phá vỡ nên đi kèm khối lượng tăng',
            'Là mẫu đối称 của Tam giác tăng'
        ],
        statistics: {
            bullishBreakout: 21,
            bearishBreakout: 79,
            averageRise: 4,
            averageDecline: 15,
            pullbackRate: 9
        }
    },

    'symmetrical-triangle': {
        name: 'Tam Giác Đối Xứng',
        nameEn: 'Symmetrical Triangle',
        category: 'bilateral',
        successRate: 64,
        avgMove: 0,
        avgDuration: '2-6 tuần',
        description: 'Mẫu Tam Giác Đối Xứng có cả hai đường biên hội tụ. Có thể phá vỡ theo cả hai hướng với xác suất tương đương.',
        structure: [
            'Đường biên trên: Dốc xuống',
            'Đường biên dưới: Dốc lên',
            'Điểm hội tụ: Hai đường gặp nhau'
        ],
        tradingRules: [
            'Đợi phá vỡ rõ ràng trước khi vào lệnh',
            'Hai hướng phá vỡ có xác suất tương đương',
            'Mục tiêu = Chiều cao của tam giác',
            'Stop loss đặt bên kia đường phá vỡ'
        ],
        tips: [
            'Không dự đoán hướng phá vỡ',
            'Sử dụng các chỉ báo khác để xác nhận',
            'Xu hướng trước mẫu thường tiếp tục'
        ],
        statistics: {
            bullishBreakout: 52,
            bearishBreakout: 48,
            averageRise: 10,
            averageDecline: 10,
            pullbackRate: 14
        }
    },

    'flag': {
        name: 'Cờ Đuôi Nheo',
        nameEn: 'Flag',
        category: 'continuation',
        successRate: 85,
        avgMove: 12,
        avgDuration: '1-3 tuần',
        description: 'Mẫu Cờ hình thành sau một xu hướng mạnh, cho phép thị trường nghỉ trước khi tiếp tục xu hướng cũ.',
        structure: [
            'Cột cờ: Xu hướng mạnh ban đầu',
            'Phần cờ: Điều chỉnh ngắn, đi ngược xu hướng',
            'Phá vỡ: Tiếp tục xu hướng cũ'
        ],
        tradingRules: [
            'Vào lệnh khi giá phá vỡ khỏi phần cờ',
            'Khối lượng thấp trong phần cờ',
            'Mục tiêu = Độ dài của cột cờ',
            'Stop loss đặt bên kia phần cờ'
        ],
        tips: [
            'Cờ không nên kéo dài quá 20 phiên',
            'Khối lượng tăng khi phá vỡ',
            'Cờ tăng trong xu hướng giảm = Bull flag'
        ],
        statistics: {
            bullishBreakout: 67,
            bearishBreakout: 85,
            averageRise: 12,
            averageDecline: 12,
            pullbackRate: 6
        }
    },

    'bull-flag': {
        name: 'Cờ Tăng',
        nameEn: 'Bull Flag',
        category: 'continuation',
        successRate: 85,
        avgMove: 14,
        avgDuration: '1-3 tuần',
        description: 'Mẫu Cờ Tăng xuất hiện trong xu hướng tăng, cho phép thị trường nghỉ ngơi trước khi tiếp tục tăng.',
        structure: [
            'Cột cờ: Tăng mạnh trong vài phiên',
            'Phần cờ: Điều chỉnh nhẹ, giảm dần',
            'Phá vỡ: Giá tiếp tục tăng'
        ],
        tradingRules: [
            'Vào lệnh mua khi giá phá vỡ đường kháng cự của cờ',
            'Khối lượng giảm trong phần cờ',
            'Mục tiêu = Độ dài cột cờ tính từ điểm phá vỡ',
            'Stop loss đặt dưới đáy phần cờ'
        ],
        tips: [
            'Cờ nên nghiêng nhẹ xuống',
            'Cột cờ nên có khối lượng cao',
            'Phá vỡ nên có khối lượng tăng'
        ],
        statistics: {
            bullishBreakout: 85,
            bearishBreakout: 15,
            averageRise: 14,
            averageDecline: 0,
            pullbackRate: 5
        }
    },

    'bear-flag': {
        name: 'Cờ Giảm',
        nameEn: 'Bear Flag',
        category: 'continuation',
        successRate: 83,
        avgMove: -13,
        avgDuration: '1-3 tuần',
        description: 'Mẫu Cờ Giảm xuất hiện trong xu hướng giảm, cho phép thị trường nghỉ ngơi trước khi tiếp tục giảm.',
        structure: [
            'Cột cờ: Giảm mạnh trong vài phiên',
            'Phần cờ: Điều chỉnh nhẹ, tăng dần',
            'Phá vỡ: Giá tiếp tục giảm'
        ],
        tradingRules: [
            'Vào lệnh bán khi giá phá vỡ đường hỗ trợ của cờ',
            'Khối lượng giảm trong phần cờ',
            'Mục tiêu = Độ dài cột cờ tính từ điểm phá vỡ',
            'Stop loss đặt trên đỉnh phần cờ'
        ],
        tips: [
            'Cờ nên nghiêng nhẹ lên',
            'Cột cờ nên có khối lượng cao',
            'Phá vỡ nên có khối lượng tăng'
        ],
        statistics: {
            bullishBreakout: 17,
            bearishBreakout: 83,
            averageRise: 0,
            averageDecline: 13,
            pullbackRate: 7
        }
    },

    'pennant': {
        name: 'Cờ Đuôi Nheo Tam Giác',
        nameEn: 'Pennant',
        category: 'continuation',
        successRate: 82,
        avgMove: 11,
        avgDuration: '1-3 tuần',
        description: 'Mẫu Pennant tương tự Flag nhưng phần cờ có hình tam giác nhỏ. Đây là mẫu tiếp diễn mạnh.',
        structure: [
            'Cột cờ: Xu hướng mạnh ban đầu',
            'Phần cờ: Tam giác nhỏ, hội tụ',
            'Phá vỡ: Tiếp tục xu hướng cũ'
        ],
        tradingRules: [
            'Vào lệnh khi giá phá vỡ khỏi tam giác',
            'Khối lượng giảm trong phần tam giác',
            'Mục tiêu = Độ dài của cột cờ',
            'Stop loss bên kia tam giác'
        ],
        tips: [
            'Tam giác nên nhỏ và hội tụ nhanh',
            'Giống Flag nhưng có hình tam giác',
            'Phá vỡ sớm hiệu quả hơn'
        ],
        statistics: {
            bullishBreakout: 68,
            bearishBreakout: 82,
            averageRise: 11,
            averageDecline: 11,
            pullbackRate: 8
        }
    },

    'rectangle-top': {
        name: 'Hình Chữ Nhật Đỉnh',
        nameEn: 'Rectangle Top',
        category: 'bilateral',
        successRate: 62,
        avgMove: -8,
        avgDuration: '2-6 tuần',
        description: 'Mẫu Hình Chữ Nhật Đỉnh là vùng giá đi ngang với biên trên và dưới xác định rõ. Thường phá vỡ về phía giảm.',
        structure: [
            'Biên trên: Đường kháng cự ngang',
            'Biên dưới: Đường hỗ trợ ngang',
            'Giá dao động trong kênh'
        ],
        tradingRules: [
            'Vào lệnh khi giá phá vỡ một trong hai biên',
            'Khối lượng không nhất quán',
            'Mục tiêu = Chiều cao của kênh',
            'Stop loss bên kia biên phá vỡ'
        ],
        tips: [
            'Thường tiếp tục xu hướng cũ',
            'Cũng gọi là trading range',
            'Phá vỡ giả thường xảy ra'
        ],
        statistics: {
            bullishBreakout: 38,
            bearishBreakout: 62,
            averageRise: 6,
            averageDecline: 8,
            pullbackRate: 16
        }
    },

    'rectangle-bottom': {
        name: 'Hình Chữ Nhật Đáy',
        nameEn: 'Rectangle Bottom',
        category: 'bilateral',
        successRate: 64,
        avgMove: 10,
        avgDuration: '2-6 tuần',
        description: 'Mẫu Hình Chữ Nhật Đáy là vùng giá đi ngang ở đáy. Thường phá vỡ về phía tăng.',
        structure: [
            'Biên trên: Đường kháng cự ngang',
            'Biên dưới: Đường hỗ trợ ngang',
            'Giá dao động trong kênh ở đáy'
        ],
        tradingRules: [
            'Vào lệnh mua khi giá phá vỡ biên trên',
            'Khối lượng nên tăng khi phá vỡ',
            'Mục tiêu = Chiều cao của kênh',
            'Stop loss dưới biên dưới'
        ],
        tips: [
            'Thường xuất hiện sau xu hướng giảm',
            'Xác nhận tích lũy ở đáy',
            'Phá vỡ với khối lượng cao mạnh hơn'
        ],
        statistics: {
            bullishBreakout: 64,
            bearishBreakout: 36,
            averageRise: 10,
            averageDecline: 4,
            pullbackRate: 14
        }
    },

    // ========== PHASE 2: 20 MORE PATTERNS ==========

    // Broadening Patterns
    'broadening-top': {
        name: 'Đỉnh Mở Rộng',
        nameEn: 'Broadening Top',
        category: 'reversal',
        successRate: 61,
        avgMove: -12,
        avgDuration: '2-4 tuần',
        description: 'Mẫu Đỉnh Mở Rộng có hai đường biên diverge (mở rộng ra) tại đỉnh xu hướng tăng. Báo hiệu đảo chiều giảm.',
        structure: [
            'Đường biên trên: Dốc lên',
            'Đường biên dưới: Dốc xuống',
            'Hai đường mở rộng ra như cái phễu ngược'
        ],
        tradingRules: [
            'Vào lệnh bán khi giá phá vỡ đường biên dưới',
            'Khối lượng thường không nhất quán',
            'Mục tiêu = Chiều cao tối đa của mẫu',
            'Stop loss đặt trên đỉnh cao nhất'
        ],
        tips: [
            'Còn gọi là "Megaphone" (loa)',
            'Xác suất thành công thấp hơn các mẫu khác',
            'Cần xác nhận thêm từ các chỉ báo'
        ],
        statistics: {
            bullishBreakout: 39,
            bearishBreakout: 61,
            averageRise: 8,
            averageDecline: 12,
            pullbackRate: 18
        }
    },

    'broadening-bottom': {
        name: 'Đáy Mở Rộng',
        nameEn: 'Broadening Bottom',
        category: 'reversal',
        successRate: 68,
        avgMove: 18,
        avgDuration: '2-4 tuần',
        description: 'Mẫu Đáy Mở Rộng có hai đường biên diverge tại đáy xu hướng giảm. Báo hiệu đảo chiều tăng.',
        structure: [
            'Đường biên trên: Dốc lên',
            'Đường biên dưới: Dốc xuống',
            'Hai đường mở rộng ra tại đáy'
        ],
        tradingRules: [
            'Vào lệnh mua khi giá phá vỡ đường biên trên',
            'Tìm divergence với RSI/MACD',
            'Mục tiêu = Chiều cao tối đa của mẫu',
            'Stop loss đặt dưới đáy thấp nhất'
        ],
        tips: [
            'Hiệu quả hơn Broadening Top',
            'Khối lượng nên tăng khi phá vỡ',
            'Xác nhận bằng các chỉ báo momentum'
        ],
        statistics: {
            bullishBreakout: 68,
            bearishBreakout: 32,
            averageRise: 18,
            averageDecline: 6,
            pullbackRate: 15
        }
    },

    'broadening-wedge-ascending': {
        name: 'Nêm Mở Rộng Tăng',
        nameEn: 'Broadening Wedge Ascending',
        category: 'bilateral',
        successRate: 58,
        avgMove: 0,
        avgDuration: '2-6 tuần',
        description: 'Mẫu Nêm Mở Rộng Tăng có đường biên dưới nằm ngang và đường biên trên dốc lên. Có thể phá vỡ cả hai hướng.',
        structure: [
            'Đường biên dưới: Nằm ngang',
            'Đường biên trên: Dốc lên',
            'Mở rộng theo hướng lên'
        ],
        tradingRules: [
            'Đợi phá vỡ rõ ràng',
            'Thường tiếp tục xu hướng cũ',
            'Mục tiêu = Chiều cao của mẫu',
            'Stop loss bên kia đường phá vỡ'
        ],
        tips: [
            'Không phổ biến như các mẫu khác',
            'Cần cẩn trọng với phá vỡ giả',
            'Kết hợp với khối lượng để xác nhận'
        ],
        statistics: {
            bullishBreakout: 42,
            bearishBreakout: 58,
            averageRise: 9,
            averageDecline: 11,
            pullbackRate: 19
        }
    },

    'broadening-wedge-descending': {
        name: 'Nêm Mở Rộng Giảm',
        nameEn: 'Broadening Wedge Descending',
        category: 'bilateral',
        successRate: 62,
        avgMove: 0,
        avgDuration: '2-6 tuần',
        description: 'Mẫu Nêm Mở Rộng Giảm có đường biên trên nằm ngang và đường biên dưới dốc xuống.',
        structure: [
            'Đường biên trên: Nằm ngang',
            'Đường biên dưới: Dốc xuống',
            'Mở rộng theo hướng xuống'
        ],
        tradingRules: [
            'Đợi phá vỡ rõ ràng',
            'Thường phá vỡ về phía giảm',
            'Mục tiêu = Chiều cao của mẫu',
            'Stop loss bên kia đường phá vỡ'
        ],
        tips: [
            'Tương tự descending triangle nhưng mở rộng',
            'Phá vỡ tăng cũng có thể xảy ra',
            'Xác nhận bằng khối lượng'
        ],
        statistics: {
            bullishBreakout: 38,
            bearishBreakout: 62,
            averageRise: 7,
            averageDecline: 12,
            pullbackRate: 17
        }
    },

    // Diamond Patterns
    'diamond-top': {
        name: 'Kim Cương Đỉnh',
        nameEn: 'Diamond Top',
        category: 'reversal',
        successRate: 77,
        avgMove: -16,
        avgDuration: '2-6 tuần',
        description: 'Mẫu Kim Cương Đỉnh có hình dạng như viên kim cương, kết hợp broadening và triangle. Báo hiệu đảo chiều giảm.',
        structure: [
            'Phần đầu: Mở rộng như broadening',
            'Phần đuôi: Hội tụ như triangle',
            'Hình dạng tổng thể như kim cương'
        ],
        tradingRules: [
            'Vào lệnh bán khi giá phá vỡ đường biên dưới',
            'Khối lượng thường giảm trong mẫu',
            'Mục tiêu = Chiều cao của kim cương',
            'Stop loss đặt trên đỉnh cao nhất'
        ],
        tips: [
            'Mẫu hiếm gặp nhưng đáng tin cậy',
            'Kết hợp 2 mẫu: broadening + triangle',
            'Xác nhận bằng divergence'
        ],
        statistics: {
            bullishBreakout: 23,
            bearishBreakout: 77,
            averageRise: 5,
            averageDecline: 16,
            pullbackRate: 8
        }
    },

    'diamond-bottom': {
        name: 'Kim Cương Đáy',
        nameEn: 'Diamond Bottom',
        category: 'reversal',
        successRate: 79,
        avgMove: 19,
        avgDuration: '2-6 tuần',
        description: 'Mẫu Kim Cương Đáy xuất hiện ở đáy, báo hiệu đảo chiều tăng với hình dạng kim cương.',
        structure: [
            'Phần đầu: Mở rộng',
            'Phần đuôi: Hội tụ',
            'Xuất hiện tại đáy xu hướng'
        ],
        tradingRules: [
            'Vào lệnh mua khi giá phá vỡ đường biên trên',
            'Khối lượng nên tăng khi phá vỡ',
            'Mục tiêu = Chiều cao của kim cương',
            'Stop loss đặt dưới đáy thấp nhất'
        ],
        tips: [
            'Hiệu quả hơn Diamond Top',
            'Tỷ lệ thành công cao 79%',
            'Tìm divergence để xác nhận'
        ],
        statistics: {
            bullishBreakout: 79,
            bearishBreakout: 21,
            averageRise: 19,
            averageDecline: 4,
            pullbackRate: 7
        }
    },

    // Island Patterns
    'island-top': {
        name: 'Đảo Đỉnh',
        nameEn: 'Island Top',
        category: 'reversal',
        successRate: 73,
        avgMove: -14,
        avgDuration: '1-3 tuần',
        description: 'Mẫu Đảo Đỉnh hình thành khi giá bị cô lập bởi hai khoảng trống (gaps) - một gap lên và một gap xuống.',
        structure: [
            'Gap tăng: Giá nhảy lên tạo đỉnh',
            'Vùng đảo: Giá giao dịch cô lập',
            'Gap giảm: Giá nhảy xuống xác nhận'
        ],
        tradingRules: [
            'Vào lệnh bán khi gap giảm xuất hiện',
            'Khối lượng thường cao tại đảo',
            'Mục tiêu = Chiều cao của đảo',
            'Stop loss trên đỉnh của đảo'
        ],
        tips: [
            'Rất hiếm gặp',
            'Tín hiệu đảo chiều mạnh',
            'Còn gọi là "Island Reversal"'
        ],
        statistics: {
            bullishBreakout: 27,
            bearishBreakout: 73,
            averageRise: 5,
            averageDecline: 14,
            pullbackRate: 11
        }
    },

    'island-bottom': {
        name: 'Đảo Đáy',
        nameEn: 'Island Bottom',
        category: 'reversal',
        successRate: 76,
        avgMove: 17,
        avgDuration: '1-3 tuần',
        description: 'Mẫu Đảo Đáy hình thành khi giá bị cô lập bởi hai khoảng trống tại đáy.',
        structure: [
            'Gap giảm: Giá nhảy xuống tạo đáy',
            'Vùng đảo: Giá giao dịch cô lập',
            'Gap tăng: Giá nhảy lên xác nhận'
        ],
        tradingRules: [
            'Vào lệnh mua khi gap tăng xuất hiện',
            'Khối lượng thường cao tại đảo',
            'Mục tiêu = Chiều cao của đảo',
            'Stop loss dưới đáy của đảo'
        ],
        tips: [
            'Rất hiếm gặp',
            'Tín hiệu đảo chiều mạnh',
            'Xác nhận tốt với khối lượng cao'
        ],
        statistics: {
            bullishBreakout: 76,
            bearishBreakout: 24,
            averageRise: 17,
            averageDecline: 4,
            pullbackRate: 9
        }
    },

    'island-reversal': {
        name: 'Đảo Ngược Đảo',
        nameEn: 'Island Reversal',
        category: 'reversal',
        successRate: 74,
        avgMove: 0,
        avgDuration: '1-3 tuần',
        description: 'Mẫu Đảo Ngược Đảo tổng quát, có thể xuất hiện ở cả đỉnh và đáy với đặc điểm bị cô lập bởi gaps.',
        structure: [
            'Gap ban đầu: Đi ngược xu hướng cũ',
            'Vùng đảo: Giao dịch cô lập',
            'Gap xác nhận: Quay ngược xu hướng cũ'
        ],
        tradingRules: [
            'Vào lệnh theo hướng gap xác nhận',
            'Khối lượng cao tăng độ tin cậy',
            'Mục tiêu = Chiều cao của đảo',
            'Stop loss bên kia đảo'
        ],
        tips: [
            'Một trong những mẫu mạnh nhất',
            'Hiếm gặp nên rất đáng giá',
            'Kết hợp với RSI divergence'
        ],
        statistics: {
            bullishBreakout: 52,
            bearishBreakout: 48,
            averageRise: 14,
            averageDecline: 14,
            pullbackRate: 10
        }
    },

    // Gap Patterns
    'breakaway-gap': {
        name: 'Khoảng Trống Phá Vỡ',
        nameEn: 'Breakaway Gap',
        category: 'continuation',
        successRate: 71,
        avgMove: 15,
        avgDuration: 'Ngay lập tức',
        description: 'Khoảng Trống Phá Vỡ xuất hiện khi giá phá vỡ khỏi vùng tích lũy hoặc mẫu biểu đồ, báo hiệu bắt đầu xu hướng mới.',
        structure: [
            'Vùng tích lũy trước gap',
            'Gap lớn vượt mức kháng cự/hỗ trợ',
            'Giá tiếp tục theo hướng gap'
        ],
        tradingRules: [
            'Vào lệnh theo hướng gap',
            'Khối lượng phải cao khi gap',
            'Mục tiêu = Độ rộng gap + vùng tích lũy',
            'Stop loss trong vùng gap'
        ],
        tips: [
            'Gap không được lấp đầy trong 3 phiên',
            'Khối lượng cao là bắt buộc',
            'Báo hiệu xu hướng mạnh bắt đầu'
        ],
        statistics: {
            bullishBreakout: 71,
            bearishBreakout: 71,
            averageRise: 15,
            averageDecline: 15,
            pullbackRate: 12
        }
    },

    'runaway-gap': {
        name: 'Khoảng Trống Chạy',
        nameEn: 'Runaway Gap / Measuring Gap',
        category: 'continuation',
        successRate: 68,
        avgMove: 12,
        avgDuration: 'Giữa xu hướng',
        description: 'Khoảng Trống Chạy xuất hiện giữa xu hướng mạnh, báo hiệu xu hướng sẽ tiếp tục. Còn gọi là Measuring Gap.',
        structure: [
            'Xu hướng mạnh đang diễn ra',
            'Gap xuất hiện giữa xu hướng',
            'Giá tiếp tục theo hướng cũ'
        ],
        tradingRules: [
            'Vào lệnh theo hướng gap',
            'Xác nhận bằng khối lượng',
            'Mục tiêu = Đo từ bắt đầu xu hướng đến gap',
            'Stop loss bên kia gap'
        ],
        tips: [
            'Xuất hiện khoảng giữa xu hướng',
            'Giúp đoán mục tiêu giá',
            'Còn gọi là "continuation gap"'
        ],
        statistics: {
            bullishBreakout: 68,
            bearishBreakout: 68,
            averageRise: 12,
            averageDecline: 12,
            pullbackRate: 14
        }
    },

    'exhaustion-gap': {
        name: 'Khoảng Trống Kiệt Sức',
        nameEn: 'Exhaustion Gap',
        category: 'reversal',
        successRate: 65,
        avgMove: -10,
        avgDuration: 'Cuối xu hướng',
        description: 'Khoảng Trống Kiệt Sức xuất hiện cuối xu hướng, báo hiệu xu hướng sắp kết thúc và đảo chiều.',
        structure: [
            'Xu hướng mạnh đã kéo dài',
            'Gap xuất hiện cuối xu hướng',
            'Đảo chiều hoặc đi ngang sau đó'
        ],
        tradingRules: [
            'Chuẩn bị cho đảo chiều',
            'Đợi xác nhận đảo chiều trước vào lệnh',
            'Mục tiêu = Độ rộng gap có thể được lấp đầy',
            'Cẩn trọng với fakeout'
        ],
        tips: [
            'Khối lượng cao nhưng không duy trì',
            'Thường đi kèm divergence',
            'Cẩn thận phân biệt với runaway gap'
        ],
        statistics: {
            bullishBreakout: 35,
            bearishBreakout: 35,
            averageRise: 8,
            averageDecline: 10,
            pullbackRate: 22
        }
    },

    'common-gap': {
        name: 'Khoảng Trống Phổ Biến',
        nameEn: 'Common Gap',
        category: 'bilateral',
        successRate: 0,
        avgMove: 0,
        avgDuration: '1-3 phiên',
        description: 'Khoảng Trống Phổ Biến xuất hiện trong vùng giá đi ngang, thường được lấp đầy nhanh chóng. Không có giá trị dự báo.',
        structure: [
            'Xuất hiện trong trading range',
            'Không có xu hướng rõ ràng',
            'Thường được lấp đầy trong vài phiên'
        ],
        tradingRules: [
            'Không nên giao dịch dựa trên gap này',
            'Có thể fade (đánh ngược) gap',
            'Lấp đầy gap là mục tiêu',
            'Không có giá trị dự báo'
        ],
        tips: [
            'Loại gap phổ biến nhất',
            'Thường xuất hiện trong thị trường sideways',
            'Khối lượng thấp'
        ],
        statistics: {
            bullishBreakout: 50,
            bearishBreakout: 50,
            averageRise: 3,
            averageDecline: 3,
            pullbackRate: 80
        }
    },

    // Hook & Pipe Patterns
    'hook-reversal': {
        name: 'Đảo Ngược Móc',
        nameEn: 'Hook Reversal',
        category: 'reversal',
        successRate: 67,
        avgMove: 8,
        avgDuration: '1-3 phiên',
        description: 'Mẫu Đảo Ngược Móc là mẫu 1-3 phiên, giá mở và đóng trong phạm vi của phiên trước, báo hiệu đảo chiều ngắn hạn.',
        structure: [
            'Phiên 1: Xu hướng mạnh',
            'Phiên 2: Mở trong phạm vi phiên 1, đóng ngược hướng',
            'Phiên 3 (tùy chọn): Xác nhận đảo chiều'
        ],
        tradingRules: [
            'Vào lệnh khi đóng phiên xác nhận',
            'Khối lượng nên giảm ở mẫu',
            'Mục tiêu ngắn hạn',
            'Stop loss gần điểm vào lệnh'
        ],
        tips: [
            'Mẫu ngắn hạn, 1-3 phiên',
            'Hiệu quả trong thị trường có xu hướng',
            'Kết hợp với support/resistance'
        ],
        statistics: {
            bullishBreakout: 45,
            bearishBreakout: 55,
            averageRise: 8,
            averageDecline: 8,
            pullbackRate: 25
        }
    },

    'pipe-top': {
        name: 'Ống Đỉnh',
        nameEn: 'Pipe Top',
        category: 'reversal',
        successRate: 61,
        avgMove: -9,
        avgDuration: '2-5 phiên',
        description: 'Mẫu Ống Đỉnh có hai phiên liên tiếp có thân dài tương tự nhau tại đỉnh, báo hiệu đảo chiều giảm.',
        structure: [
            'Phiên 1: Nến tăng dài',
            'Phiên 2: Nến tăng dài tương tự',
            'Hai nến gần như song song'
        ],
        tradingRules: [
            'Vào lệnh bán khi giá giảm dưới hai nến',
            'Khối lượng nên cao',
            'Mục tiêu = Độ dài của ống',
            'Stop loss trên đỉnh ống'
        ],
        tips: [
            'Hai nến nên có kích thước tương đương',
            'Hiếm gặp',
            'Xác nhận bằng phiên giảm tiếp theo'
        ],
        statistics: {
            bullishBreakout: 39,
            bearishBreakout: 61,
            averageRise: 4,
            averageDecline: 9,
            pullbackRate: 18
        }
    },

    'pipe-bottom': {
        name: 'Ống Đáy',
        nameEn: 'Pipe Bottom',
        category: 'reversal',
        successRate: 64,
        avgMove: 11,
        avgDuration: '2-5 phiên',
        description: 'Mẫu Ống Đáy có hai phiên giảm liên tiếp có thân dài tương tự nhau tại đáy, báo hiệu đảo chiều tăng.',
        structure: [
            'Phiên 1: Nến giảm dài',
            'Phiên 2: Nến giảm dài tương tự',
            'Hai nến gần như song song'
        ],
        tradingRules: [
            'Vào lệnh mua khi giá tăng trên hai nến',
            'Khối lượng nên cao',
            'Mục tiêu = Độ dài của ống',
            'Stop loss dưới đáy ống'
        ],
        tips: [
            'Hai nến nên có kích thước tương đương',
            'Hiếm gặp',
            'Xác nhận bằng phiên tăng tiếp theo'
        ],
        statistics: {
            bullishBreakout: 64,
            bearishBreakout: 36,
            averageRise: 11,
            averageDecline: 4,
            pullbackRate: 16
        }
    },

    // Scallop Patterns
    'scallop-ascending': {
        name: 'Scallop Tăng',
        nameEn: 'Scallop Ascending',
        category: 'continuation',
        successRate: 73,
        avgMove: 14,
        avgDuration: '2-4 tuần',
        description: 'Mẫu Scallop Tăng có hình dáng như vỏ sò, với các đáy tăng dần. Báo hiệu tiếp diễn tăng.',
        structure: [
            'Đáy đầu tiên',
            'Đáy thứ hai cao hơn',
            'Đáy thứ ba cao hơn nữa (tùy chọn)',
            'Hình dáng cong như vỏ sò'
        ],
        tradingRules: [
            'Vào lệnh khi giá vượt đỉnh gần nhất',
            'Khối lượng nên tăng khi vượt đỉnh',
            'Mục tiêu = Độ cao từ đáy đến đỉnh',
            'Stop loss dưới đáy gần nhất'
        ],
        tips: [
            'Tương tự rounding bottom nhưng nghiêng lên',
            'Mỗi đáy cao hơn đáy trước',
            'Kết hợp với trendline để xác nhận'
        ],
        statistics: {
            bullishBreakout: 73,
            bearishBreakout: 27,
            averageRise: 14,
            averageDecline: 3,
            pullbackRate: 11
        }
    },

    'scallop-descending': {
        name: 'Scallop Giảm',
        nameEn: 'Scallop Descending',
        category: 'continuation',
        successRate: 69,
        avgMove: -12,
        avgDuration: '2-4 tuần',
        description: 'Mẫu Scallop Giảm có hình dáng như vỏ sò nghiêng xuống, với các đỉnh giảm dần.',
        structure: [
            'Đỉnh đầu tiên',
            'Đỉnh thứ hai thấp hơn',
            'Đỉnh thứ ba thấp hơn nữa (tùy chọn)',
            'Hình dáng cong nghiêng xuống'
        ],
        tradingRules: [
            'Vào lệnh bán khi giá跌破 đáy gần nhất',
            'Khối lượng nên tăng khi phá vỡ',
            'Mục tiêu = Độ cao từ đỉnh đến đáy',
            'Stop loss trên đỉnh gần nhất'
        ],
        tips: [
            'Tương tự rounding top nhưng nghiêng xuống',
            'Mỗi đỉnh thấp hơn đỉnh trước',
            'Tiếp diễn xu hướng giảm'
        ],
        statistics: {
            bullishBreakout: 31,
            bearishBreakout: 69,
            averageRise: 4,
            averageDecline: 12,
            pullbackRate: 13
        }
    },

    // Tower Patterns
    'tower-top': {
        name: 'Tháp Đỉnh',
        nameEn: 'Tower Top',
        category: 'reversal',
        successRate: 70,
        avgMove: -13,
        avgDuration: '2-4 tuần',
        description: 'Mẫu Tháp Đỉnh có các phiên tăng tạo tháp bên trái, sau đó các phiên giảm tạo tháp bên phải đối xứng.',
        structure: [
            'Phần trái: Nến tăng tạo tháp lên',
            'Đỉnh tháp: Điểm cao nhất',
            'Phần phải: Nến giảm tạo tháp xuống đối xứng'
        ],
        tradingRules: [
            'Vào lệnh bán khi tháp phải hoàn thành',
            'Khối lượng nên đối xứng hai bên',
            'Mục tiêu = Chiều cao của tháp',
            'Stop loss trên đỉnh tháp'
        ],
        tips: [
            'Mẫu đối xứng là quan trọng nhất',
            'Tương tự Adam and Eve',
            'Hiếm gặp nhưng đáng tin cậy'
        ],
        statistics: {
            bullishBreakout: 30,
            bearishBreakout: 70,
            averageRise: 4,
            averageDecline: 13,
            pullbackRate: 12
        }
    },

    'tower-bottom': {
        name: 'Tháp Đáy',
        nameEn: 'Tower Bottom',
        category: 'reversal',
        successRate: 72,
        avgMove: 15,
        avgDuration: '2-4 tuần',
        description: 'Mẫu Tháp Đáy có các phiên giảm tạo tháp bên trái, sau đó các phiên tăng tạo tháp bên phải đối xứng.',
        structure: [
            'Phần trái: Nến giảm tạo tháp xuống',
            'Đáy tháp: Điểm thấp nhất',
            'Phần phải: Nến tăng tạo tháp lên đối xứng'
        ],
        tradingRules: [
            'Vào lệnh mua khi tháp phải hoàn thành',
            'Khối lượng nên đối xứng hai bên',
            'Mục tiêu = Chiều cao của tháp',
            'Stop loss dưới đáy tháp'
        ],
        tips: [
            'Mẫu đối xứng là quan trọng nhất',
            'Hiệu quả hơn Tower Top',
            'Xác nhận bằng khối lượng'
        ],
        statistics: {
            bullishBreakout: 72,
            bearishBreakout: 28,
            averageRise: 15,
            averageDecline: 4,
            pullbackRate: 10
        }
    },

    // ========== PHASE 3: 23 MORE PATTERNS (TOTAL 63) ==========

    // Adam & Eve Patterns
    'adam-adam-top': {
        name: 'Adam Adam Đỉnh',
        nameEn: 'Adam and Adam Top',
        category: 'reversal',
        successRate: 76,
        avgMove: -15,
        avgDuration: '2-4 tuần',
        description: 'Mẫu Adam Adam Đỉnh có hai đỉnh nhọn (Adam) với đáy giữa cũng nhọn. Hình dáng tổng thể sắc cạnh.',
        structure: [
            'Đỉnh 1: Nhọn, sắc (Adam)',
            'Đáy giữa: Nhọn, sắc (Adam)',
            'Đỉnh 2: Nhọn, sắc (Adam)'
        ],
        tradingRules: [
            'Vào lệnh bán khi phá vỡ đáy giữa',
            'Hai đỉnh nên có hình dáng tương tự',
            'Mục tiêu = Khoảng cách từ đỉnh đến đáy giữa',
            'Stop loss trên đỉnh cao nhất'
        ],
        tips: [
            'Adam = đỉnh nhọn, nhanh',
            'Hiệu quả hơn Double Top thông thường',
            'Tìm divergence với oscillator'
        ],
        statistics: {
            bullishBreakout: 24,
            bearishBreakout: 76,
            averageRise: 5,
            averageDecline: 15,
            pullbackRate: 8
        }
    },

    'adam-adam-bottom': {
        name: 'Adam Adam Đáy',
        nameEn: 'Adam and Adam Bottom',
        category: 'reversal',
        successRate: 79,
        avgMove: 18,
        avgDuration: '2-4 tuần',
        description: 'Mẫu Adam Adam Đáy có hai đáy nhọn với đỉnh giữa cũng nhọn. Hình dáng sắc cạnh ở đáy.',
        structure: [
            'Đáy 1: Nhọn, sắc (Adam)',
            'Đỉnh giữa: Nhọn, sắc (Adam)',
            'Đáy 2: Nhọn, sắc (Adam)'
        ],
        tradingRules: [
            'Vào lệnh mua khi phá vỡ đỉnh giữa',
            'Hai đáy nên có hình dáng tương tự',
            'Mục tiêu = Khoảng cách từ đáy đến đỉnh giữa',
            'Stop loss dưới đáy thấp nhất'
        ],
        tips: [
            'Adam = đáy nhọn, V-shape',
            'Hiệu quả hơn Double Bottom thông thường',
            'Khối lượng nên tăng ở đáy thứ 2'
        ],
        statistics: {
            bullishBreakout: 79,
            bearishBreakout: 21,
            averageRise: 18,
            averageDecline: 4,
            pullbackRate: 7
        }
    },

    'adam-eve-top': {
        name: 'Adam Eve Đỉnh',
        nameEn: 'Adam and Eve Top',
        category: 'reversal',
        successRate: 74,
        avgMove: -14,
        avgDuration: '3-5 tuần',
        description: 'Mẫu Adam Eve Đỉnh có đỉnh đầu nhọn (Adam), đỉnh hai tròn (Eve), tạo sự kết hợp thú vị.',
        structure: [
            'Đỉnh 1: Nhọn, sắc (Adam)',
            'Đáy giữa: Có thể tròn hoặc nhọn',
            'Đỉnh 2: Tròn, cong (Eve)'
        ],
        tradingRules: [
            'Vào lệnh bán khi phá vỡ đáy giữa',
            'Đỉnh Adam trước đỉnh Eve',
            'Mục tiêu = Khoảng cách từ đỉnh đến đáy giữa',
            'Stop loss trên đỉnh Eve'
        ],
        tips: [
            'Adam = nhọn, Eve = tròn',
            'Kết hợp hai kiểu hình dáng',
            'Thời gian hình thành đỉnh Eve dài hơn'
        ],
        statistics: {
            bullishBreakout: 26,
            bearishBreakout: 74,
            averageRise: 5,
            averageDecline: 14,
            pullbackRate: 10
        }
    },

    'adam-eve-bottom': {
        name: 'Adam Eve Đáy',
        nameEn: 'Adam and Eve Bottom',
        category: 'reversal',
        successRate: 78,
        avgMove: 20,
        avgDuration: '3-5 tuần',
        description: 'Mẫu Adam Eve Đáy có đáy đầu nhọn, đáy hai tròn, báo hiệu đảo chiều tăng mạnh.',
        structure: [
            'Đáy 1: Nhọn, sắc (Adam)',
            'Đỉnh giữa: Có thể tròn hoặc nhọn',
            'ĐáĐáy 2: Tròn, cong (Eve)'
        ],
        tradingRules: [
            'Vào lệnh mua khi phá vỡ đỉnh giữa',
            'Đáy Adam trước đáy Eve',
            'Mục tiêu = Khoảng cách từ đáy đến đỉnh giữa',
            'Stop loss dưới đáy Eve'
        ],
        tips: [
            'Một trong những mẫu đáng tin cậy nhất',
            'Đáy Eve mất nhiều thời gian hơn Adam',
            'Khối lượng tăng ở cuối mẫu Eve'
        ],
        statistics: {
            bullishBreakout: 78,
            bearishBreakout: 22,
            averageRise: 20,
            averageDecline: 4,
            pullbackRate: 6
        }
    },

    'eve-adam-top': {
        name: 'Eve Adam Đỉnh',
        nameEn: 'Eve and Adam Top',
        category: 'reversal',
        successRate: 71,
        avgMove: -13,
        avgDuration: '3-5 tuần',
        description: 'Mẫu Eve Adam Đỉnh có đỉnh đầu tròn (Eve), đỉnh hai nhọn (Adam), ít phổ biến hơn.',
        structure: [
            'Đỉnh 1: Tròn, cong (Eve)',
            'Đáy giữa: Có thể tròn hoặc nhọn',
            'Đỉnh 2: Nhọn, sắc (Adam)'
        ],
        tradingRules: [
            'Vào lệnh bán khi phá vỡ đáy giữa',
            'Đỉnh Eve trước đỉnh Adam',
            'Mục tiêu = Khoảng cách từ đỉnh đến đáy giữa',
            'Stop loss trên đỉnh Adam'
        ],
        tips: [
            'Ít phổ biến hơn Adam Eve',
            'Eve = tròn, Adam = nhọn',
            'Cẩn trọng với phá vỡ giả'
        ],
        statistics: {
            bullishBreakout: 29,
            bearishBreakout: 71,
            averageRise: 6,
            averageDecline: 13,
            pullbackRate: 12
        }
    },

    'eve-adam-bottom': {
        name: 'Eve Adam Đáy',
        nameEn: 'Eve and Adam Bottom',
        category: 'reversal',
        successRate: 75,
        avgMove: 17,
        avgDuration: '3-5 tuần',
        description: 'Mẫu Eve Adam Đáy có đáy đầu tròn, đáy hai nhọn, báo hiệu đảo chiều tăng.',
        structure: [
            'Đáy 1: Tròn, cong (Eve)',
            'Đỉnh giữa: Có thể tròn hoặc nhọn',
            'Đáy 2: Nhọn, sắc (Adam)'
        ],
        tradingRules: [
            'Vào lệnh mua khi phá vỡ đỉnh giữa',
            'Đáy Eve trước đáy Adam',
            'Mục tiêu = Khoảng cách từ đáy đến đỉnh giữa',
            'Stop loss dưới đáy Adam'
        ],
        tips: [
            'Ít phổ biến hơn Adam Eve Bottom',
            'Khối lượng quan trọng để xác nhận',
            'Kết hợp với RSI divergence'
        ],
        statistics: {
            bullishBreakout: 75,
            bearishBreakout: 25,
            averageRise: 17,
            averageDecline: 4,
            pullbackRate: 9
        }
    },

    'eve-eve-top': {
        name: 'Eve Eve Đỉnh',
        nameEn: 'Eve and Eve Top',
        category: 'reversal',
        successRate: 68,
        avgMove: -12,
        avgDuration: '4-8 tuần',
        description: 'Mẫu Eve Eve Đỉnh có hai đỉnh tròn với đáy giữa cũng tròn. Mẫu mềm mại, mất nhiều thời gian.',
        structure: [
            'Đỉnh 1: Tròn, cong (Eve)',
            'Đáy giữa: Tròn, cong',
            'Đỉnh 2: Tròn, cong (Eve)'
        ],
        tradingRules: [
            'Vào lệnh bán khi phá vỡ đáy giữa',
            'Mẫu hình thành chậm',
            'Mục tiêu = Khoảng cách từ đỉnh đến đáy giữa',
            'Stop loss trên đỉnh cao nhất'
        ],
        tips: [
            'Eve = tròn, mềm mại',
            'Mất nhiều thời gian hình thành',
            'Khối lượng thường thấp ở đỉnh'
        ],
        statistics: {
            bullishBreakout: 32,
            bearishBreakout: 68,
            averageRise: 6,
            averageDecline: 12,
            pullbackRate: 14
        }
    },

    'eve-eve-bottom': {
        name: 'Eve Eve Đáy',
        nameEn: 'Eve and Eve Bottom',
        category: 'reversal',
        successRate: 73,
        avgMove: 19,
        avgDuration: '4-8 tuần',
        description: 'Mẫu Eve Eve Đáy có hai đáy tròn với đỉnh giữa cũng tròn. Mẫu mềm mại ở đáy.',
        structure: [
            'Đáy 1: Tròn, cong (Eve)',
            'Đỉnh giữa: Tròn, cong',
            'Đáy 2: Tròn, cong (Eve)'
        ],
        tradingRules: [
            'Vào lệnh mua khi phá vỡ đỉnh giữa',
            'Kiên nhẫn chờ mẫu hoàn thành',
            'Mục tiêu = Khoảng cách từ đáy đến đỉnh giữa',
            'Stop loss dưới đáy thấp nhất'
        ],
        tips: [
            'Rounding bottom kép',
            'Mẫu hình thành chậm nhưng đáng tin cậy',
            'Khối lượng hình chữ U'
        ],
        statistics: {
            bullishBreakout: 73,
            bearishBreakout: 27,
            averageRise: 19,
            averageDecline: 4,
            pullbackRate: 8
        }
    },

    // Bump and Run Patterns
    'bump-run-top': {
        name: 'Bump and Run Đỉnh',
        nameEn: 'Bump and Run Top',
        category: 'reversal',
        successRate: 71,
        avgMove: -14,
        avgDuration: '2-6 tuần',
        description: 'Mẫu Bump and Run Đỉnh có xu hướng tăng dốc (bump) sau giai đoạn ổn định, báo hiệu đảo chiều.',
        structure: [
            'Lead-in: Xu hướng tăng thoải mái',
            'Bump: Tăng dốc đột ngột',
            'Run: Giảm nhanh sau đỉnh'
        ],
        tradingRules: [
            'Vào lệnh bán khi giá vượt trendline bump',
            'Bump phải dốc hơn lead-in gấp đôi',
            'Mục tiêu = Độ cao của bump',
            'Stop loss trên đỉnh bump'
        ],
        tips: [
            'Bump = phần dốc đột ngột',
            'Run = sự sụt giảm nhanh',
            'Tương tự blow-off top'
        ],
        statistics: {
            bullishBreakout: 29,
            bearishBreakout: 71,
            averageRise: 5,
            averageDecline: 14,
            pullbackRate: 11
        }
    },

    'bump-run-bottom': {
        name: 'Bump and Run Đáy',
        nameEn: 'Bump and Run Bottom / Bump and Run Reversal',
        category: 'reversal',
        successRate: 74,
        avgMove: 22,
        avgDuration: '2-6 tuần',
        description: 'Mẫu Bump and Run Đáy có xu hướng giảm dốc (bump) sau giai đoạn ổn định, báo hiệu đảo chiều tăng mạnh.',
        structure: [
            'Lead-in: Xu hướng giảm thoải mái',
            'Bump: Giảm dốc đột ngột',
            'Run: Tăng nhanh sau đáy'
        ],
        tradingRules: [
            'Vào lệnh mua khi giá vượt trendline bump',
            'Bump phải dốc hơn lead-in gấp đôi',
            'Mục tiêu = Độ sâu của bump',
            'Stop loss dưới đáy bump'
        ],
        tips: [
            'Còn gọi là "Bump and Run Reversal"',
            'Một trong những mẫu mạnh nhất',
            'Khối lượng cao ở bump và run'
        ],
        statistics: {
            bullishBreakout: 74,
            bearishBreakout: 26,
            averageRise: 22,
            averageDecline: 5,
            pullbackRate: 7
        }
    },

    // Horn Patterns
    'horn-top': {
        name: 'Sừng Đỉnh',
        nameEn: 'Horn Top',
        category: 'reversal',
        successRate: 69,
        avgMove: -11,
        avgDuration: '1-3 tuần',
        description: 'Mẫu Sừng Đỉnh có hai đỉnh nhọn gần nhau với đáy giữa rất nông, giống đôi sừng.',
        structure: [
            'Đỉnh 1: Nhọn, sắc',
            'Đáy giữa: Rất nông',
            'Đỉnh 2: Nhọn, sắc, gần đỉnh 1'
        ],
        tradingRules: [
            'Vào lệnh bán khi giá giảm dưới đáy giữa',
            'Hai đỉnh gần nhau về thời gian',
            'Mục tiêu = Khoảng cách từ đỉnh đến đáy giữa',
            'Stop loss trên đỉnh cao nhất'
        ],
        tips: [
            'Giống Double Top nhưng các đỉnh gần nhau hơn',
            'Hai đỉnh nên có kích thước tương đương',
            'Hiếm gặp'
        ],
        statistics: {
            bullishBreakout: 31,
            bearishBreakout: 69,
            averageRise: 5,
            averageDecline: 11,
            pullbackRate: 15
        }
    },

    'horn-bottom': {
        name: 'Sừng Đáy',
        nameEn: 'Horn Bottom',
        category: 'reversal',
        successRate: 72,
        avgMove: 16,
        avgDuration: '1-3 tuần',
        description: 'Mẫu Sừng Đáy có hai đáy nhọn gần nhau với đỉnh giữa rất thấp, giống đôi sừng ngược.',
        structure: [
            'Đáy 1: Nhọn, sắc',
            'Đỉnh giữa: Rất thấp',
            'Đáy 2: Nhọn, sắc, gần đáy 1'
        ],
        tradingRules: [
            'Vào lệnh mua khi giá tăng trên đỉnh giữa',
            'Hai đáy gần nhau về thời gian',
            'Mục tiêu = Khoảng cách từ đáy đến đỉnh giữa',
            'Stop loss dưới đáy thấp nhất'
        ],
        tips: [
            'Giống Double Bottom nhưng các đáy gần nhau hơn',
            'Hiệu quả hơn Horn Top',
            'Xác nhận bằng khối lượng'
        ],
        statistics: {
            bullishBreakout: 72,
            bearishBreakout: 28,
            averageRise: 16,
            averageDecline: 4,
            pullbackRate: 12
        }
    },

    // High and Tight Flag
    'high-tight-flag': {
        name: 'Cờ Cao và Chặt',
        nameEn: 'High and Tight Flag',
        category: 'continuation',
        successRate: 85,
        avgMove: 69,
        avgDuration: '1-2 tháng',
        description: 'Mẫu Cờ Cao và Chặt là mẫu tiếp diễn tăng mạnh, giá tăng gấp đôi trong 1-2 tháng rồi đi ngang.',
        structure: [
            'Phần cột cờ: Tăng mạnh, gấp đôi giá',
            'Phần cờ: Đi ngang chặt, không quá 25%回落',
            'Phá vỡ: Tiếp tục tăng mạnh'
        ],
        tradingRules: [
            'Vào lệnh khi giá phá vỡ đỉnh cờ',
            'Cờ không nên thấp quá 25% so với đỉnh',
            'Mục tiêu = Độ dài cột cờ',
            'Stop loss dưới đáy cờ'
        ],
        tips: [
            'Mẫu mạnh nhất của Bulkowski',
            'Cột cờ phải tăng mạnh (gấp đôi)',
            'Cờ phải chặt, không điều chỉnh nhiều'
        ],
        statistics: {
            bullishBreakout: 85,
            bearishBreakout: 15,
            averageRise: 69,
            averageDecline: 0,
            pullbackRate: 5
        }
    },

    // Cup Variations
    'cup-high-handle': {
        name: 'Cốc Tay Cầm Cao',
        nameEn: 'Cup with High Handle',
        category: 'continuation',
        successRate: 81,
        avgMove: 22,
        avgDuration: '2-5 tháng',
        description: 'Mẫu Cốc Tay Cầm Cao có tay cầm nằm ở phần trên của cốc, gần đỉnh cốc.',
        structure: [
            'Phần cốc: Hình chữ U',
            'Tay cầm: Nằm ở phần cao của cốc',
            'Phá vỡ: Vượt đỉnh tay cầm'
        ],
        tradingRules: [
            'Vào lệnh khi giá phá vỡ đỉnh tay cầm',
            'Tay cầm ở phần trên 1/3 của cốc',
            'Mục tiêu = Độ sâu của cốc',
            'Stop loss dưới tay cầm'
        ],
        tips: [
            'Tay cầm cao hơn Cup and Handle thông thường',
            'Hiệu quả tương đương',
            'Kết hợp với khối lượng tăng'
        ],
        statistics: {
            bullishBreakout: 81,
            bearishBreakout: 19,
            averageRise: 22,
            averageDecline: 0,
            pullbackRate: 6
        }
    },

    'cup-low-handle': {
        name: 'Cốc Tay Cầm Thấp',
        nameEn: 'Cup with Low Handle',
        category: 'continuation',
        successRate: 73,
        avgMove: 18,
        avgDuration: '2-5 tháng',
        description: 'Mẫu Cốc Tay Cầm Thấp có tay cầm nằm ở phần dưới của cốc, gần đáy cốc.',
        structure: [
            'Phần cốc: Hình chữ U',
            'Tay cầm: Nằm ở phần dưới của cốc',
            'Phá vỡ: Vượt đỉnh tay cầm'
        ],
        tradingRules: [
            'Vào lệnh khi giá phá vỡ đỉnh tay cầm',
            'Tay cầm ở phần dưới 1/3 của cốc',
            'Mục tiêu = Độ sâu của cốc',
            'Stop loss dưới tay cầm'
        ],
        tips: [
            'Ít hiệu quả hơn Cup with High Handle',
            'Cần xác nhận kỹ hơn',
            'Khối lượng quan trọng khi phá vỡ'
        ],
        statistics: {
            bullishBreakout: 73,
            bearishBreakout: 27,
            averageRise: 18,
            averageDecline: 0,
            pullbackRate: 9
        }
    },

    // Complex Head and Shoulders
    'complex-head-shoulders': {
        name: 'Đầu và Vai Phức Tạp',
        nameEn: 'Complex Head and Shoulders',
        category: 'reversal',
        successRate: 82,
        avgMove: -17,
        avgDuration: '4-8 tuần',
        description: 'Mẫu Đầu và Vai Phức Tạp có nhiều vai hoặc nhiều đầu, biến thể của mẫu cơ bản.',
        structure: [
            'Có thể có 2 vai trái và/hoặc 2 vai phải',
            'Có thể có 2 đầu (Double Head)',
            'Đường cổ có thể không thẳng'
        ],
        tradingRules: [
            'Vào lệnh bán khi giá phá vỡ đường cổ',
            'Đếm số vai và đầu để xác định',
            'Mục tiêu = Khoảng cách từ đầu đến đường cổ',
            'Stop loss trên vai phải cao nhất'
        ],
        tips: [
            'Biến thể phức tạp của Head and Shoulders',
            'Tỷ lệ thành công cao hơn mẫu cơ bản',
            'Đường cổ có thể cong'
        ],
        statistics: {
            bullishBreakout: 18,
            bearishBreakout: 82,
            averageRise: 4,
            averageDecline: 17,
            pullbackRate: 5
        }
    },

    // Inverted Scallop
    'inverted-scallop': {
        name: 'Scallop Ngược',
        nameEn: 'Inverted Scallop',
        category: 'reversal',
        successRate: 65,
        avgMove: 10,
        avgDuration: '2-4 tuần',
        description: 'Mẫu Scallop Ngược có hình dáng cong lên (inverted so với scallop thường), báo hiệu đảo chiều.',
        structure: [
            'Điểm bắt đầu thấp',
            'Phần giữa cong lên',
            'Điểm kết thúc thấp hơn hoặc bằng điểm bắt đầu'
        ],
        tradingRules: [
            'Vào lệnh theo hướng phá vỡ',
            'Có thể đảo chiều cả hai hướng',
            'Mục tiêu = Độ cao của mẫu',
            'Stop loss bên kia mẫu'
        ],
        tips: [
            'Ít phổ biến',
            'Xác suất thành công trung bình',
            'Kết hợp với các chỉ báo khác'
        ],
        statistics: {
            bullishBreakout: 48,
            bearishBreakout: 52,
            averageRise: 10,
            averageDecline: 10,
            pullbackRate: 18
        }
    },

    // Lazy S
    'lazy-s': {
        name: 'Chữ S Lười',
        nameEn: 'Lazy S',
        category: 'bilateral',
        successRate: 55,
        avgMove: 0,
        avgDuration: '2-6 tuần',
        description: 'Mẫu Chữ S Lười có hình dáng như chữ S nằm ngang, giá đi theo đường cong hình S.',
        structure: [
            'Phần 1: Cong lên',
            'Phần 2: Cong xuống',
            'Tổng thể: Hình S nằm ngang'
        ],
        tradingRules: [
            'Đợi phá vỡ rõ ràng',
            'Không có hướng ưu tiên',
            'Mục tiêu = Biên độ của mẫu',
            'Stop loss bên kia mẫu'
        ],
        tips: [
            'Mẫu hiếm gặp',
            'Tỷ lệ thành công thấp',
            'Cần cẩn trọng'
        ],
        statistics: {
            bullishBreakout: 50,
            bearishBreakout: 50,
            averageRise: 8,
            averageDecline: 8,
            pullbackRate: 22
        }
    },

    // Three Rising Valleys / Falling Peaks
    'three-rising-valleys': {
        name: 'Ba Thung Lũng Tăng',
        nameEn: 'Three Rising Valleys',
        category: 'continuation',
        successRate: 76,
        avgMove: 16,
        avgDuration: '3-6 tuần',
        description: 'Mẫu Ba Thung Lũng Tăng có ba đáy tăng dần, báo hiệu tiếp diễn xu hướng tăng.',
        structure: [
            'Đáy 1: Thấp nhất',
            'Đáy 2: Cao hơn đáy 1',
            'Đáy 3: Cao hơn đáy 2'
        ],
        tradingRules: [
            'Vào lệnh mua khi giá vượt đỉnh gần nhất',
            'Mỗi đáy cao hơn đáy trước',
            'Mục tiêu = Khoảng cách từ đáy 1 đến đỉnh',
            'Stop loss dưới đáy 3'
        ],
        tips: [
            'Tương tự Triple Bottom nhưng các đáy tăng dần',
            'Tiếp diễn xu hướng tăng',
            'Kết hợp với trendline'
        ],
        statistics: {
            bullishBreakout: 76,
            bearishBreakout: 24,
            averageRise: 16,
            averageDecline: 3,
            pullbackRate: 8
        }
    },

    'three-falling-peaks': {
        name: 'Ba Đỉnh Giảm',
        nameEn: 'Three Falling Peaks',
        category: 'continuation',
        successRate: 74,
        avgMove: -14,
        avgDuration: '3-6 tuần',
        description: 'Mẫu Ba Đỉnh Giảm có ba đỉnh giảm dần, báo hiệu tiếp diễn xu hướng giảm.',
        structure: [
            'Đỉnh 1: Cao nhất',
            'Đỉnh 2: Thấp hơn đỉnh 1',
            'Đỉnh 3: Thấp hơn đỉnh 2'
        ],
        tradingRules: [
            'Vào lệnh bán khi giá跌破 đáy gần nhất',
            'Mỗi đỉnh thấp hơn đỉnh trước',
            'Mục tiêu = Khoảng cách từ đỉnh 1 đến đáy',
            'Stop loss trên đỉnh 3'
        ],
        tips: [
            'Tương tự Triple Top nhưng các đỉnh giảm dần',
            'Tiếp diễn xu hướng giảm',
            'Kết hợp với trendline'
        ],
        statistics: {
            bullishBreakout: 26,
            bearishBreakout: 74,
            averageRise: 4,
            averageDecline: 14,
            pullbackRate: 9
        }
    },

    // V Top / Bottom
    'v-top': {
        name: 'Đỉnh V',
        nameEn: 'V Top / Spike Top',
        category: 'reversal',
        successRate: 58,
        avgMove: -10,
        avgDuration: '1-2 tuần',
        description: 'Mẫu Đỉnh V là mẫu đảo chiều nhanh, giá tăng mạnh rồi giảm mạnh tạo hình chữ V.',
        structure: [
            'Xu hướng tăng mạnh',
            'Đỉnh nhọn, sắc',
            'Giảm nhanh ngang bằng độ tăng'
        ],
        tradingRules: [
            'Vào lệnh bán khi xác nhận đỉnh',
            'Khối lượng cao ở đỉnh',
            'Mục tiêu = Độ cao của V',
            'Stop loss trên đỉnh V'
        ],
        tips: [
            'Mẫu đảo chiều nhanh nhất',
            'Khó dự đoán và giao dịch',
            'Cần phản ứng nhanh'
        ],
        statistics: {
            bullishBreakout: 42,
            bearishBreakout: 58,
            averageRise: 5,
            averageDecline: 10,
            pullbackRate: 20
        }
    },

    'v-bottom': {
        name: 'Đáy V',
        nameEn: 'V Bottom / Spike Bottom',
        category: 'reversal',
        successRate: 62,
        avgMove: 14,
        avgDuration: '1-2 tuần',
        description: 'Mẫu Đáy V là mẫu đảo chiều nhanh, giá giảm mạnh rồi tăng mạnh tạo hình chữ V ngược.',
        structure: [
            'Xu hướng giảm mạnh',
            'Đáy nhọn, sắc',
            'Tăng nhanh ngang bằng độ giảm'
        ],
        tradingRules: [
            'Vào lệnh mua khi xác nhận đáy',
            'Khối lượng cao ở đáy',
            'Mục tiêu = Độ sâu của V',
            'Stop loss dưới đáy V'
        ],
        tips: [
            'Mẫu đảo chiều nhanh nhất ở đáy',
            'Khó dự đoán',
            'Cần phản ứng nhanh'
        ],
        statistics: {
            bullishBreakout: 62,
            bearishBreakout: 38,
            averageRise: 14,
            averageDecline: 4,
            pullbackRate: 18
        }
    },

    // Right-Angled Broadening
    'right-angled-broadening-ascending': {
        name: 'Mở Rộng Vuông Tăng',
        nameEn: 'Right-Angled Broadening Ascending',
        category: 'bilateral',
        successRate: 59,
        avgMove: 0,
        avgDuration: '2-6 tuần',
        description: 'Mẫu Mở Rộng Vuông Tăng có đường biên dưới nằm ngang và đường biên trên dốc lên, mở rộng.',
        structure: [
            'Đường biên dưới: Nằm ngang',
            'Đường biên trên: Dốc lên',
            'Mở rộng theo hướng lên'
        ],
        tradingRules: [
            'Đợi phá vỡ rõ ràng',
            'Thường phá vỡ về phía tăng',
            'Mục tiêu = Chiều cao của mẫu',
            'Stop loss bên kia đường phá vỡ'
        ],
        tips: [
            'Kết hợp broadening và ascending',
            'Hiếm gặp',
            'Cần xác nhận kỹ'
        ],
        statistics: {
            bullishBreakout: 59,
            bearishBreakout: 41,
            averageRise: 11,
            averageDecline: 8,
            pullbackRate: 16
        }
    },

    'right-angled-broadening-descending': {
        name: 'Mở Rộng Vuông Giảm',
        nameEn: 'Right-Angled Broadening Descending',
        category: 'bilateral',
        successRate: 61,
        avgMove: 0,
        avgDuration: '2-6 tuần',
        description: 'Mẫu Mở Rộng Vuông Giảm có đường biên trên nằm ngang và đường biên dưới dốc xuống, mở rộng.',
        structure: [
            'Đường biên trên: Nằm ngang',
            'Đường biên dưới: Dốc xuống',
            'Mở rộng theo hướng xuống'
        ],
        tradingRules: [
            'Đợi phá vỡ rõ ràng',
            'Thường phá vỡ về phía giảm',
            'Mục tiêu = Chiều cao của mẫu',
            'Stop loss bên kia đường phá vỡ'
        ],
        tips: [
            'Kết hợp broadening và descending',
            'Hiếm gặp',
            'Phá vỡ giảm phổ biến hơn'
        ],
        statistics: {
            bullishBreakout: 39,
            bearishBreakout: 61,
            averageRise: 7,
            averageDecline: 11,
            pullbackRate: 15
        }
    }
};

// ========================================
// Quiz Data - Expanded
// ========================================

const quizData = [
    {
        question: 'Mẫu Đầu và Vai báo hiệu xu hướng gì?',
        visual: 'head-shoulders',
        options: [
            'Tiếp tục tăng',
            'Đảo chiều giảm',
            'Tiếp tục giảm',
            'Đảo chiều tăng'
        ],
        correct: 1,
        explanation: 'Mẫu Đầu và Vai xuất hiện ở đỉnh xu hướng tăng và báo hiệu đảo chiều sang xu hướng giảm với tỷ lệ thành công 89%.'
    },
    {
        question: 'Đường cổ (Neckline) trong mẫu Đầu và Vai là gì?',
        options: [
            'Đường nối hai vai',
            'Đường nối hai đáy giữa vai trái-đầu và đầu-vai phải',
            'Đường nằm ngang qua đỉnh đầu',
            'Đường hỗ trợ chính'
        ],
        correct: 1,
        explanation: 'Đường cổ là đường nối hai đáy thấp giữa vai trái - đầu và đầu - vai phải. Đây là mức hỗ trợ quan trọng cần phá vỡ để xác nhận mẫu.'
    },
    {
        question: 'Mẫu Đỉnh Kép (Double Top) có tỷ lệ thành công bao nhiêu?',
        options: [
            '65%',
            '78%',
            '89%',
            '95%'
        ],
        correct: 1,
        explanation: 'Theo thống kê của Bulkowski, mẫu Đỉnh Kép có tỷ lệ thành công 78% khi giá phá vỡ đáy giữa.'
    },
    {
        question: 'Mẫu Cốc và Tay Cầm (Cup and Handle) thuộc loại nào?',
        options: [
            'Đảo chiều giảm',
            'Đảo chiều tăng',
            'Tiếp diễn',
            'Hai chiều'
        ],
        correct: 2,
        explanation: 'Mẫu Cốc và Tay Cầm là mẫu tiếp diễn tăng, xuất hiện trong xu hướng tăng và báo hiệu xu hướng sẽ tiếp tục sau giai đoạn điều chỉnh.'
    },
    {
        question: 'Mẫu Nêm Tăng (Rising Wedge) báo hiệu điều gì?',
        options: [
            'Tiếp tục tăng mạnh',
            'Đảo chiều tăng',
            'Đảo chiều giảm',
            'Đi ngang'
        ],
        correct: 2,
        explanation: 'Mẫu Nêm Tăng có hai đường biên đều dốc lên nhưng báo hiệu đảo chiều giảm với tỷ lệ thành công 72%. Đây là mẫu "nghịch lý" trong phân tích kỹ thuật.'
    },
    {
        question: 'Tam Giác Đối Xứng (Symmetrical Triangle) có đặc điểm gì?',
        options: [
            'Chỉ phá vỡ về phía tăng',
            'Chỉ phá vỡ về phía giảm',
            'Có thể phá vỡ cả hai hướng',
            'Luôn tiếp tục xu hướng cũ'
        ],
        correct: 2,
        explanation: 'Tam Giác Đối Xứng có thể phá vỡ theo cả hai hướng với xác suất tương đương. Tỷ lệ thành công thấp hơn (64%) vì không dự đoán được hướng.'
    },
    {
        question: 'Khối lượng giao dịch trong mẫu Cờ (Flag) nên như thế nào?',
        options: [
            'Tăng mạnh trong phần cờ',
            'Giảm trong phần cờ, tăng khi phá vỡ',
            'Luôn luôn tăng',
            'Không quan trọng'
        ],
        correct: 1,
        explanation: 'Khối lượng nên giảm trong quá trình hình thành phần cờ và tăng mạnh khi phá vỡ. Đây là đặc điểm quan trọng để xác nhận mẫu.'
    },
    {
        question: 'Mẫu Đáy Ba (Triple Bottom) mạnh hơn Đáy Kép vì sao?',
        options: [
            'Có nhiều đáy hơn',
            'Xác nhận mức hỗ trợ nhiều lần hơn',
            'Dễ nhận diện hơn',
            'Tất cả đều đúng'
        ],
        correct: 1,
        explanation: 'Mẫu Đáy Ba xác nhận mức hỗ trợ ba lần thay vì hai lần, tạo tín hiệu mạnh hơn với tỷ lệ thành công 86% so với 82% của Đáy Kép.'
    },
    {
        question: 'Mục tiêu giá sau khi phá vỡ mẫu Tam Giác Tăng được tính như thế nào?',
        options: [
            'Bằng chiều rộng của tam giác',
            'Bằng chiều cao của tam giác',
            'Bằng 50% chiều cao tam giác',
            'Bằng 200% chiều cao tam giác'
        ],
        correct: 1,
        explanation: 'Mục tiêu giá sau khi phá vỡ mẫu tam giác bằng chiều cao của tam giác (khoảng cách từ đỉnh đến đáy tại điểm rộng nhất).'
    },
    {
        question: 'Khi nào nên vào lệnh với mẫu Đầu và Vai ngược (Inverse Head and Shoulders)?',
        options: [
            'Khi vai phải hình thành',
            'Khi giá chạm đường cổ lần đầu',
            'Khi giá phá vỡ đường cổ với khối lượng tăng',
            'Khi đầu hình thành xong'
        ],
        correct: 2,
        explanation: 'Vào lệnh mua khi giá phá vỡ đường cổ với khối lượng tăng. Đây là điểm xác nhận mẫu với rủi ro thấp nhất.'
    },
    {
        question: 'Mẫu Nêm Giảm (Falling Wedge) trong xu hướng tăng báo hiệu gì?',
        options: [
            'Đảo chiều giảm',
            'Tiếp diễn tăng',
            'Đảo chiều tăng',
            'Đi ngang'
        ],
        correct: 1,
        explanation: 'Nêm Giảm trong xu hướng tăng là mẫu tiếp diễn tăng, báo hiệu xu hướng tăng sẽ tiếp tục sau khi phá vỡ đường biên trên.'
    },
    {
        question: 'Mẫu Đáy Tròn (Rounding Bottom) còn được gọi là gì?',
        options: [
            'Cốc',
            'Đĩa (Saucer)',
            'Bát',
            'Vũng'
        ],
        correct: 1,
        explanation: 'Mẫu Đáy Tròn còn được gọi là Saucer (đĩa) vì hình dạng giống chiếc đĩa úp.'
    },
    {
        question: 'Phần tay cầm trong mẫu Cup and Handle không nên thấp quá bao nhiêu so với cốc?',
        options: [
            '1/2 cốc',
            '1/3 cốc',
            '1/4 cốc',
            '2/3 cốc'
        ],
        correct: 1,
        explanation: 'Tay cầm không nên thấp quá 1/3 độ sâu của cốc. Nếu thấp hơn, mẫu có thể không còn hiệu quả.'
    },
    {
        question: 'Mẫu nào có tỷ lệ thành công cao nhất trong các mẫu đảo chiều tăng?',
        options: [
            'Đáy Kép',
            'Đáy Ba',
            'Đầu và Vai Ngược',
            'Đáy Tròn'
        ],
        correct: 1,
        explanation: 'Mẫu Đáy Ba có tỷ lệ thành công 86%, cao nhất trong các mẫu đảo chiều tăng phổ biến.'
    },
    {
        question: 'Phần cờ trong mẫu Pennant có hình dạng gì?',
        options: [
            'Hình chữ nhật',
            'Hình tam giác nhỏ',
            'Hình nêm',
            'Hình vòng cung'
        ],
        correct: 1,
        explanation: 'Pennant có phần cờ hình tam giác nhỏ hội tụ, khác với Flag có phần cờ hình chữ nhật nghiêng.'
    },
    {
        question: 'Mẫu Hình Chữ Nhật Đỉnh (Rectangle Top) thường phá vỡ về hướng nào?',
        options: [
            'Luôn lên',
            'Luôn xuống',
            'Thường xuống (62%)',
            'Ngẫu nhiên'
        ],
        correct: 2,
        explanation: 'Mẫu Hình Chữ Nhật Đỉnh thường phá vỡ về phía giảm với tỷ lệ 62%, tiếp tục xu hướng giảm trước đó.'
    },
    {
        question: 'Thời gian hình thành mẫu Cốc và Tay Cầm thường là bao lâu?',
        options: [
            '1-2 tuần',
            '1-3 tháng',
            '2-6 tháng',
            '6-12 tháng'
        ],
        correct: 2,
        explanation: 'Mẫu Cốc và Tay Cầm thường mất 2-6 tháng để hình thành, với phần cốc chiếm phần lớn thời gian.'
    },
    {
        question: 'Dấu hiệu nào cho thấy mẫu Đỉnh Kép đang hình thành?',
        options: [
            'Khối lượng tăng ở đỉnh thứ hai',
            'Khối lượng giảm ở đỉnh thứ hai',
            'Giá phá vỡ đỉnh đầu tiên',
            'RSI divergence'
        ],
        correct: 1,
        explanation: 'Khối lượng giảm ở đỉnh thứ hai so với đỉnh đầu tiên là dấu hiệu cho thấy áp lực mua yếu đi, mẫu Đỉnh Kép đang hình thành.'
    },
    {
        question: 'Stop loss cho mẫu Đầu và Vai nên đặt ở đâu?',
        options: [
            'Trên đỉnh đầu',
            'Trên vai phải',
            'Dưới đường cổ',
            'Trên vai trái'
        ],
        correct: 1,
        explanation: 'Stop loss nên đặt trên vai phải (hoặc cao hơn vai phải một chút), vì nếu giá vượt qua đây thì mẫu không còn hiệu quả.'
    },
    {
        question: 'Mẫu Cờ Giảm (Bear Flag) có phần cờ nghiêng về hướng nào?',
        options: [
            'Nghiêng lên',
            'Nghiêng xuống',
            'Nằm ngang',
            'Không xác định'
        ],
        correct: 0,
        explanation: 'Mẫu Cờ Giảm có phần cờ nghiêng nhẹ lên (đi ngược xu hướng giảm chính), tạo thành kênh giá hẹp.'
    },
    // ========== PHASE 4: 50+ MORE QUIZ QUESTIONS ==========
    {
        question: 'Mẫu Broadening Top còn được gọi là gì?',
        options: [
            'Phễu',
            'Loa (Megaphone)',
            'Kim cương',
            'Nêm'
        ],
        correct: 1,
        explanation: 'Mẫu Broadening Top còn được gọi là "Megaphone" (loa) vì hình dạng hai đường biên mở rộng ra như cái loa.'
    },
    {
        question: 'Mẫu Diamond Top có tỷ lệ thành công bao nhiêu?',
        options: [
            '65%',
            '70%',
            '77%',
            '85%'
        ],
        correct: 2,
        explanation: 'Mẫu Diamond Top có tỷ lệ thành công 77%, khá cao so với các mẫu khác.'
    },
    {
        question: 'Đặc điểm nào phân biệt Diamond với Broadening?',
        options: [
            'Diamond có hai đường biên hội tụ ở cuối',
            'Diamond chỉ có một đường biên',
            'Diamond không có biên',
            'Diamond luôn nằm ngang'
        ],
        correct: 0,
        explanation: 'Diamond kết hợp Broadening (mở rộng) ở đầu và Triangle (hội tụ) ở cuối, tạo hình kim cương.'
    },
    {
        question: 'Mẫu Island Reversal hình thành như thế nào?',
        options: [
            'Một gap duy nhất',
            'Hai gap cô lập một vùng giá',
            'Ba gap liên tiếp',
            'Không có gap'
        ],
        correct: 1,
        explanation: 'Island Reversal có hai gap (khoảng trống) cô lập một vùng giá tạo thành "đảo" bị tách biệt.'
    },
    {
        question: 'Gap nào xuất hiện đầu xu hướng và báo hiệu bắt đầu xu hướng mới?',
        options: [
            'Exhaustion Gap',
            'Runaway Gap',
            'Breakaway Gap',
            'Common Gap'
        ],
        correct: 2,
        explanation: 'Breakaway Gap xuất hiện khi giá phá vỡ khỏi vùng tích lũy, báo hiệu bắt đầu xu hướng mới.'
    },
    {
        question: 'Runaway Gap còn được gọi là gì?',
        options: [
            'Breakaway Gap',
            'Measuring Gap',
            'Exhaustion Gap',
            'Common Gap'
        ],
        correct: 1,
        explanation: 'Runaway Gap còn được gọi là Measuring Gap vì nó giúp đoán mục tiêu giá của xu hướng.'
    },
    {
        question: 'Loại gap nào thường được lấp đầy nhanh nhất?',
        options: [
            'Breakaway Gap',
            'Runaway Gap',
            'Common Gap',
            'Exhaustion Gap'
        ],
        correct: 2,
        explanation: 'Common Gap xuất hiện trong trading range và thường được lấp đầy trong 1-3 phiên.'
    },
    {
        question: 'Mẫu Pipe Top/Bottom có đặc điểm gì?',
        options: [
            'Ba nến song song',
            'Hai nến dài song song',
            'Một nến dài',
            'Nến doji'
        ],
        correct: 1,
        explanation: 'Pipe Top/Bottom có hai nến dài song song, giống hình chiếc ống.'
    },
    {
        question: 'Mẫu Scallop Ascending báo hiệu gì?',
        options: [
            'Đảo chiều giảm',
            'Tiếp diễn tăng',
            'Đảo chiều tăng',
            'Đi ngang'
        ],
        correct: 1,
        explanation: 'Scallop Ascending có các đáy tăng dần, báo hiệu tiếp diễn xu hướng tăng.'
    },
    {
        question: 'Mẫu Tower Top/Bottom có đặc điểm gì quan trọng?',
        options: [
            'Hình dạng bất đối xứng',
            'Tính đối xứng giữa hai bên',
            'Chỉ có một bên',
            'Không có hình dạng cụ thể'
        ],
        correct: 1,
        explanation: 'Tính đối xứng giữa tháp trái và tháp phải là đặc điểm quan trọng nhất của Tower pattern.'
    },
    {
        question: 'Adam trong Adam & Eve pattern có hình dạng gì?',
        options: [
            'Tròn, cong',
            'Nhọn, sắc',
            'Nằm ngang',
            'Dốc thẳng'
        ],
        correct: 1,
        explanation: 'Adam có hình dạng nhọn, sắc (V-shape hoặc A-shape), trong khi Eve có hình dạng tròn, cong.'
    },
    {
        question: 'Eve trong Adam & Eve pattern có hình dạng gì?',
        options: [
            'Nhọn, sắc',
            'Tròn, cong (U-shape)',
            'Thẳng đứng',
            'Zigzag'
        ],
        correct: 1,
        explanation: 'Eve có hình dạng tròn, cong như chữ U, mềm mại hơn Adam.'
    },
    {
        question: 'Mẫu nào có hiệu quả cao nhất trong các biến thể Adam & Eve?',
        options: [
            'Adam Adam',
            'Eve Eve',
            'Adam Eve Bottom',
            'Eve Adam Top'
        ],
        correct: 2,
        explanation: 'Adam Eve Bottom có tỷ lệ thành công 78% và average rise 20%, cao nhất trong các biến thể.'
    },
    {
        question: 'Mẫu Bump and Run có đặc điểm gì về độ dốc?',
        options: [
            'Bump dốc bằng lead-in',
            'Bump dốc hơn lead-in gấp đôi',
            'Bump nằm ngang',
            'Không có quy định'
        ],
        correct: 1,
        explanation: 'Trong Bump and Run, phần Bump phải dốc hơn phần Lead-in ít nhất gấp đôi.'
    },
    {
        question: 'Mẫu Horn Top khác Double Top ở điểm nào?',
        options: [
            'Hai đỉnh xa nhau hơn',
            'Hai đỉnh gần nhau hơn',
            'Chỉ có một đỉnh',
            'Ba đỉnh'
        ],
        correct: 1,
        explanation: 'Horn Top có hai đỉnh nhọn gần nhau về thời gian, trong khi Double Top có hai đỉnh cách nhau ít nhất 10 phiên.'
    },
    {
        question: 'High and Tight Flag có đặc điểm gì đặc biệt?',
        options: [
            'Giá tăng 20% trong cột cờ',
            'Giá tăng gấp đôi trong cột cờ',
            'Giá giảm mạnh',
            'Giá đi ngang'
        ],
        correct: 1,
        explanation: 'High and Tight Flag có cột cờ tăng gấp đôi giá trong 1-2 tháng, là mẫu mạnh nhất của Bulkowski với average rise 69%.'
    },
    {
        question: 'Cup with High Handle khác Cup and Handle thông thường ở đâu?',
        options: [
            'Tay cầm ở phần cao của cốc',
            'Không có tay cầm',
            'Cốc sâu hơn',
            'Cốc nông hơn'
        ],
        correct: 0,
        explanation: 'Cup with High Handle có tay cầm nằm ở phần trên 1/3 của cốc, trong khi Cup and Handle thường có tay cầm ở giữa.'
    },
    {
        question: 'Complex Head and Shoulders có thể có bao nhiêu vai?',
        options: [
            'Chỉ 2 vai',
            '2-4 vai hoặc nhiều hơn',
            'Chỉ 1 vai',
            'Không có vai'
        ],
        correct: 1,
        explanation: 'Complex Head and Shoulders có thể có 2 vai trái, 2 vai phải, hoặc nhiều đầu.'
    },
    {
        question: 'Mẫu Three Rising Valleys báo hiệu gì?',
        options: [
            'Đảo chiều giảm',
            'Tiếp diễn tăng',
            'Đảo chiều tăng',
            'Đi ngang'
        ],
        correct: 1,
        explanation: 'Three Rising Valleys có ba đáy tăng dần, báo hiệu tiếp diễn xu hướng tăng.'
    },
    {
        question: 'Mẫu V Top có tỷ lệ thành công bao nhiêu?',
        options: [
            '45%',
            '58%',
            '75%',
            '89%'
        ],
        correct: 1,
        explanation: 'V Top có tỷ lệ thành công 58%, thấp hơn các mẫu khác vì khó dự đoán và giao dịch.'
    },
    {
        question: 'Tại sao V Bottom khó giao dịch?',
        options: [
            'Mẫu quá lớn',
            'Đảo chiều quá nhanh, khó dự đoán',
            'Khối lượng thấp',
            'Thời gian hình thành quá dài'
        ],
        correct: 1,
        explanation: 'V Bottom đảo chiều rất nhanh, khó dự đoán và cần phản ứng nhanh để giao dịch.'
    },
    {
        question: 'Right-Angled Broadening Ascending thường phá vỡ về hướng nào?',
        options: [
            'Luôn xuống',
            'Luôn lên',
            'Thường lên (59%)',
            'Ngẫu nhiên'
        ],
        correct: 2,
        explanation: 'Right-Angled Broadening Ascending thường phá vỡ về phía tăng với tỷ lệ 59%.'
    },
    {
        question: 'Mẫu nào có average rise cao nhất?',
        options: [
            'Cup and Handle',
            'High and Tight Flag',
            'Double Bottom',
            'Adam Eve Bottom'
        ],
        correct: 1,
        explanation: 'High and Tight Flag có average rise 69%, cao nhất trong tất cả các mẫu của Bulkowski.'
    },
    {
        question: 'Pullback rate là gì trong thống kê của Bulkowski?',
        options: [
            'Tỷ lệ giá quay lại điểm phá vỡ',
            'Tỷ lệ thất bại',
            'Tỷ lệ thành công',
            'Thời gian hình thành'
        ],
        correct: 0,
        explanation: 'Pullback rate là tỷ lệ giá quay lại vùng phá vỡ sau khi phá vỡ thành công.'
    },
    {
        question: 'Mẫu nào có pullback rate thấp nhất (ít quay lại nhất)?',
        options: [
            'Double Top',
            'Complex Head and Shoulders',
            'Common Gap',
            'Triple Bottom'
        ],
        correct: 1,
        explanation: 'Complex Head and Shoulders có pullback rate chỉ 5%, nghĩa là ít khi giá quay lại vùng phá vỡ.'
    },
    {
        question: 'Trong mô hình Bulkowski, mẫu nào đáng tin cậy nhất cho đảo chiều giảm?',
        options: [
            'Double Top',
            'Head and Shoulders',
            'Triple Top',
            'Rising Wedge'
        ],
        correct: 1,
        explanation: 'Head and Shoulders có tỷ lệ thành công 89%, cao nhất trong các mẫu đảo chiều giảm.'
    },
    {
        question: 'Khối lượng trong mẫu Cốc và Tay Cầm nên như thế nào khi phá vỡ?',
        options: [
            'Giảm mạnh',
            'Tăng mạnh',
            'Không đổi',
            'Không quan trọng'
        ],
        correct: 1,
        explanation: 'Khối lượng nên tăng mạnh khi phá vỡ đỉnh tay cầm, xác nhận tín hiệu mua.'
    },
    {
        question: 'Mẫu Tam Giác Đối Xứng có tỷ lệ phá vỡ tăng/giảm như thế nào?',
        options: [
            '80% tăng, 20% giảm',
            '20% tăng, 80% giảm',
            'Xấp xỉ 50/50',
            '100% tăng'
        ],
        correct: 2,
        explanation: 'Tam Giác Đối Xứng có tỷ lệ phá vỡ tăng (52%) và giảm (48%) xấp xỉ bằng nhau.'
    },
    {
        question: 'Neckline trong Head and Shoulders là gì?',
        options: [
            'Đường qua đỉnh đầu',
            'Đường nối hai vai',
            'Đường hỗ trợ nối hai đáy',
            'Đường trendline'
        ],
        correct: 2,
        explanation: 'Neckline là đường hỗ trợ nối hai đáy thấp nhất giữa vai trái-đầu và đầu-vai phải.'
    },
    {
        question: 'Mẫu Rectangle Bottom thường phá vỡ về hướng nào?',
        options: [
            'Luôn giảm',
            'Thường tăng (64%)',
            'Luôn tăng',
            'Ngẫu nhiên'
        ],
        correct: 1,
        explanation: 'Rectangle Bottom thường phá vỡ về phía tăng với tỷ lệ 64%.'
    },
    {
        question: 'Pennant khác Flag ở điểm nào?',
        options: [
            'Pennant có phần cờ hình tam giác',
            'Pennant không có cột cờ',
            'Pennant lớn hơn',
            'Pennant không có cờ'
        ],
        correct: 0,
        explanation: 'Pennant có phần cờ hình tam giác nhỏ hội tụ, trong khi Flag có phần cờ hình chữ nhật nghiêng.'
    },
    {
        question: 'Rounding Bottom còn được gọi là gì?',
        options: [
            'Cốc',
            'Saucer (Đĩa)',
            'Bát',
            'Vũng'
        ],
        correct: 1,
        explanation: 'Rounding Bottom còn được gọi là Saucer (đĩa) vì hình dạng cong giống chiếc đĩa.'
    },
    {
        question: 'Thời gian hình thành Cup and Handle thường là bao lâu?',
        options: [
            '1-2 tuần',
            '1-3 tháng',
            '2-6 tháng',
            '6-12 tháng'
        ],
        correct: 2,
        explanation: 'Cup and Handle thường mất 2-6 tháng để hình thành, với phần cốc chiếm phần lớn thời gian.'
    },
    {
        question: 'Mẫu Broadening Bottom hiệu quả hơn Broadening Top bao nhiêu?',
        options: [
            'Giống nhau',
            'Bottom cao hơn (68% vs 61%)',
            'Top cao hơn',
            'Không so sánh được'
        ],
        correct: 1,
        explanation: 'Broadening Bottom có tỷ lệ thành công 68%, cao hơn Broadening Top (61%).'
    },
    {
        question: 'Exhaustion Gap xuất hiện ở đâu trong xu hướng?',
        options: [
            'Đầu xu hướng',
            'Giữa xu hướng',
            'Cuối xu hướng',
            'Bất kỳ đâu'
        ],
        correct: 2,
        explanation: 'Exhaustion Gap xuất hiện ở cuối xu hướng, báo hiệu xu hướng sắp kết thúc và đảo chiều.'
    },
    {
        question: 'Dấu hiệu nào cho thấy gap là Breakaway Gap?',
        options: [
            'Gap nhỏ, khối lượng thấp',
            'Gap lớn, khối lượng cao, không được lấp trong 3 phiên',
            'Gap được lấp ngay',
            'Xuất hiện trong sideways'
        ],
        correct: 1,
        explanation: 'Breakaway Gap có gap lớn, khối lượng cao, và không được lấp đầy trong ít nhất 3 phiên.'
    },
    {
        question: 'Mẫu Lazy S có đặc điểm gì?',
        options: [
            'Hình dạng chữ V',
            'Hình dạng chữ S nằm ngang',
            'Hình dạng chữ W',
            'Hình dạng chữ M'
        ],
        correct: 1,
        explanation: 'Lazy S có hình dạng như chữ S nằm ngang, với giá đi theo đường cong hình S.'
    },
    {
        question: 'Mẫu nào có tỷ lệ thành công cao nhất cho đảo chiều tăng?',
        options: [
            'Double Bottom',
            'Triple Bottom',
            'Adam Eve Bottom',
            'Bump and Run Bottom'
        ],
        correct: 3,
        explanation: 'Bump and Run Bottom có tỷ lệ thành công 74% với average rise 22%, rất hiệu quả.'
    },
    {
        question: 'Inverted Scallop khác Scallop thường ở điểm nào?',
        options: [
            'Cong lên thay vì cong xuống',
            'Nhọn hơn',
            'Lớn hơn',
            'Không có cờ'
        ],
        correct: 0,
        explanation: 'Inverted Scallop có hình dáng cong lên (inverted), ngược với Scallop thường cong xuống.'
    },
    {
        question: 'Hook Reversal là mẫu ngắn hạn hay dài hạn?',
        options: [
            'Dài hạn (hàng tháng)',
            'Trung hạn (hàng tuần)',
            'Ngắn hạn (1-3 phiên)',
            'Intraday'
        ],
        correct: 2,
        explanation: 'Hook Reversal là mẫu ngắn hạn, chỉ kéo dài 1-3 phiên giao dịch.'
    },
    {
        question: 'Mẫu Three Falling Peaks báo hiệu gì?',
        options: [
            'Đảo chiều tăng',
            'Tiếp diễn giảm',
            'Đảo chiều giảm',
            'Đi ngang'
        ],
        correct: 1,
        explanation: 'Three Falling Peaks có ba đỉnh giảm dần, báo hiệu tiếp diễn xu hướng giảm.'
    },
    {
        question: 'Trong mẫu Adam Eve, thời gian hình thành đỉnh/đáy Eve thường như thế nào?',
        options: [
            'Nhanh hơn Adam',
            'Chậm hơn Adam',
            'Bằng Adam',
            'Không liên quan'
        ],
        correct: 1,
        explanation: 'Eve có hình dạng tròn, mất nhiều thời gian hình thành hơn Adam có hình dạng nhọn.'
    },
    {
        question: 'Mẫu nào có thống kê highest average decline?',
        options: [
            'Double Top',
            'Head and Shoulders',
            'Diamond Top',
            'Triple Top'
        ],
        correct: 2,
        explanation: 'Diamond Top có average decline 16%, cao trong các mẫu đảo chiều giảm.'
    },
    {
        question: 'Tại sao Common Gap không nên giao dịch?',
        options: [
            'Quá lớn',
            'Không có giá trị dự báo, thường được lấp đầy',
            'Quá hiếm',
            'Khối lượng quá cao'
        ],
        correct: 1,
        explanation: 'Common Gap xuất hiện trong trading range, không có giá trị dự báo và thường được lấp đầy nhanh.'
    },
    {
        question: 'Mẫu Broadening Wedge khác Broadening thường ở đâu?',
        options: [
            'Có một đường biên nằm ngang',
            'Hai đường biên đều dốc',
            'Không có biên',
            'Chỉ mở rộng một phía'
        ],
        correct: 0,
        explanation: 'Broadening Wedge có một đường biên nằm ngang (hoặc dốc nhẹ) trong khi Broadening thường có hai đường đều dốc.'
    },
    {
        question: 'Mẫu Island Top có tính chất gì đặc biệt?',
        options: [
            'Rất phổ biến',
            'Rất hiếm nhưng tín hiệu mạnh',
            'Tỷ lệ thành công thấp',
            'Không có gap'
        ],
        correct: 1,
        explanation: 'Island Top rất hiếm gặp nhưng tín hiệu đảo chiều rất mạnh với tỷ lệ thành công 73%.'
    },
    {
        question: 'Biến thể nào của Head and Shoulders có tỷ lệ thành công cao nhất?',
        options: [
            'Head and Shoulders cơ bản',
            'Complex Head and Shoulders',
            'Inverse Head and Shoulders',
            'Head and Shoulders với neckline nghiêng'
        ],
        correct: 1,
        explanation: 'Complex Head and Shoulders có tỷ lệ thành công 82%, cao hơn mẫu cơ bản (89%) về độ tin cậy khi đã xác nhận.'
    },
    {
        question: 'Mẫu nào phù hợp nhất cho swing trading?',
        options: [
            'V Top/Bottom',
            'Flag và Pennant',
            'Lazy S',
            'Common Gap'
        ],
        correct: 1,
        explanation: 'Flag và Pennant có thời gian hình thành ngắn (1-3 tuần) và tỷ lệ thành công cao (82-85%), phù hợp cho swing trading.'
    }
];

// ========================================
// Lessons Data - 63 Patterns
// ========================================

const lessonsData = [
    // ========== REVERSAL PATTERNS (35 patterns) ==========
    {
        id: 'head-shoulders',
        category: 'reversal',
        module: 'Module 2',
        duration: '15 phút',
        title: 'Mẫu Đầu và Vai (Head and Shoulders)',
        description: 'Mẫu Đầu và Vai là một trong những mẫu đảo chiều đáng tin cậy nhất trong phân tích kỹ thuật. Mẫu này xuất hiện ở đỉnh của xu hướng tăng và báo hiệu sự đảo ngược sang xu hướng giảm.',
        svg: {
            path: 'M 30 200 Q 60 180, 90 150 Q 120 120, 150 140 Q 180 160, 210 200 Q 240 240, 300 80 Q 360 240, 390 200 Q 420 160, 450 140 Q 480 120, 510 150 Q 540 180, 570 250',
            neckline: { x1: 90, y1: 200, x2: 510, y2: 200 },
            labels: [
                { x: 150, y: 140, r: 8, color: '#4facfe', text: 'Vai trái', textY: 125 },
                { x: 300, y: 80, r: 10, color: '#f5576c', text: 'Đầu', textY: 60, highlight: true },
                { x: 450, y: 140, r: 8, color: '#4facfe', text: 'Vai phải', textY: 125 }
            ],
            volume: [
                { x: 120, y: 260, w: 20, h: 30, color: 'rgba(102,126,234,0.5)' },
                { x: 270, y: 250, w: 20, h: 40, color: 'rgba(245,87,108,0.5)' },
                { x: 420, y: 265, w: 20, h: 25, color: 'rgba(102,126,234,0.5)' }
            ]
        },
        legend: [
            { color: '#f5576c', text: 'Đầu (cao nhất)' },
            { color: '#4facfe', text: 'Vai trái & phải' },
            { color: '#ff6b6b', text: 'Đường cổ (Neckline)' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Mẫu gồm 3 đỉnh: Vai trái, Đầu (cao nhất), Vai phải. Hai vai thường ở mức giá tương đương nhau.' },
            { title: 'Đường cổ (Neckline)', desc: 'Nối hai đáy giữa vai trái - đầu và đầu - vai phải. Đây là mức hỗ trợ quan trọng.' },
            { title: 'Xác nhận mẫu', desc: 'Giá phá vỡ đường cổ với khối lượng tăng. Tỷ lệ thành công: 89% (theo Bulkowski).' },
            { title: 'Mục tiêu giá', desc: 'Độ giảm dự kiến = Khoảng cách từ đỉnh đầu đến đường cổ. Thường giảm 15-20%.' }
        ],
        stats: { successRate: '89%', avgChange: '-18%', timeForm: '3-4 tuần', pullback: '4%' }
    },
    {
        id: 'inverse-head-shoulders',
        category: 'reversal',
        module: 'Module 2',
        duration: '15 phút',
        title: 'Mẫu Đầu Vai Ngược (Inverse Head and Shoulders)',
        description: 'Mẫu Đầu Vai Ngược là phiên bản đảo ngược của mẫu Đầu và Vai, xuất hiện ở đáy xu hướng giảm và báo hiệu sự đảo chiều sang xu hướng tăng mạnh mẽ.',
        svg: {
            path: 'M 30 80 Q 60 100, 90 130 Q 120 160, 150 140 Q 180 120, 210 80 Q 240 40, 300 200 Q 360 40, 390 80 Q 420 120, 450 140 Q 480 160, 510 130 Q 540 100, 570 50',
            neckline: { x1: 90, y1: 100, x2: 510, y2: 100 },
            labels: [
                { x: 150, y: 140, r: 8, color: '#4facfe', text: 'Vai trái', textY: 160 },
                { x: 300, y: 200, r: 10, color: '#43e97b', text: 'Đầu', textY: 220, highlight: true },
                { x: 450, y: 140, r: 8, color: '#4facfe', text: 'Vai phải', textY: 160 }
            ],
            volume: [
                { x: 120, y: 240, w: 20, h: 50, color: 'rgba(67,233,123,0.5)' },
                { x: 270, y: 230, w: 20, h: 60, color: 'rgba(67,233,123,0.7)' },
                { x: 420, y: 245, w: 20, h: 45, color: 'rgba(67,233,123,0.5)' }
            ]
        },
        legend: [
            { color: '#43e97b', text: 'Đầu (thấp nhất)' },
            { color: '#4facfe', text: 'Vai trái & phải' },
            { color: '#43e97b', text: 'Đường cổ (Neckline)' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Mẫu gồm 3 đáy: Vai trái, Đầu (thấp nhất), Vai phải. Xuất hiện cuối xu hướng giảm.' },
            { title: 'Đường cổ', desc: 'Nối hai đỉnh giữa các vai và đầu. Phá vỡ đường cổ xác nhận đảo chiều tăng.' },
            { title: 'Xác nhận mẫu', desc: 'Giá phá vỡ đường cổ với khối lượng tăng mạnh. Tỷ lệ thành công: 81%.' },
            { title: 'Mục tiêu giá', desc: 'Độ tăng dự kiến = Khoảng cách từ đáy đầu đến đường cổ. Thường tăng 20-25%.' }
        ],
        stats: { successRate: '81%', avgChange: '+23%', timeForm: '3-4 tuần', pullback: '53%' }
    },
    {
        id: 'double-top',
        category: 'reversal',
        module: 'Module 2',
        duration: '12 phút',
        title: 'Mẫu Đỉnh Kép (Double Top)',
        description: 'Mẫu Đỉnh Kép là mẫu đảo chiều giảm phổ biến, xuất hiện khi giá tạo hai đỉnh ở mức giá tương đương nhau, báo hiệu xu hướng tăng có thể kết thúc.',
        svg: {
            path: 'M 30 200 L 80 80 L 150 160 L 250 80 L 350 180 L 450 200',
            neckline: { x1: 30, y1: 160, x2: 450, y2: 160 },
            labels: [
                { x: 80, y: 80, r: 8, color: '#f5576c', text: 'Đỉnh 1', textY: 60 },
                { x: 250, y: 80, r: 8, color: '#f5576c', text: 'Đỉnh 2', textY: 60 },
                { x: 150, y: 160, r: 6, color: '#667eea', text: 'Đáy giữa', textY: 180 }
            ],
            volume: [
                { x: 70, y: 240, w: 20, h: 50, color: 'rgba(245,87,108,0.5)' },
                { x: 140, y: 255, w: 20, h: 35, color: 'rgba(102,126,234,0.4)' },
                { x: 240, y: 245, w: 20, h: 45, color: 'rgba(245,87,108,0.5)' }
            ]
        },
        legend: [
            { color: '#f5576c', text: 'Hai đỉnh bằng nhau' },
            { color: '#667eea', text: 'Đáy giữa (Neckline)' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Hai đỉnh ở mức giá gần bằng nhau, cách nhau bởi một đáy trung gian. Giống chữ "M".' },
            { title: 'Đường cổ', desc: 'Nằm ở mức đáy giữa hai đỉnh. Phá vỡ đường cổ xác nhận mẫu.' },
            { title: 'Xác nhận mẫu', desc: 'Giá đóng cửa dưới đường cổ với khối lượng tăng. Tỷ lệ thành công: 78%.' },
            { title: 'Mục tiêu giá', desc: 'Độ giảm = Khoảng cách từ đỉnh đến đường cổ. Thường giảm 10-15%.' }
        ],
        stats: { successRate: '78%', avgChange: '-15%', timeForm: '2-3 tuần', pullback: '65%' }
    },
    {
        id: 'double-bottom',
        category: 'reversal',
        module: 'Module 2',
        duration: '12 phút',
        title: 'Mẫu Đáy Kép (Double Bottom)',
        description: 'Mẫu Đáy Kép là mẫu đảo chiều tăng, xuất hiện khi giá tạo hai đáy ở mức giá tương đương nhau, báo hiệu xu hướng giảm có thể kết thúc.',
        svg: {
            path: 'M 30 80 L 80 200 L 150 120 L 250 200 L 350 100 L 450 60',
            neckline: { x1: 30, y1: 120, x2: 450, y2: 120 },
            labels: [
                { x: 80, y: 200, r: 8, color: '#43e97b', text: 'Đáy 1', textY: 220 },
                { x: 250, y: 200, r: 8, color: '#43e97b', text: 'Đáy 2', textY: 220 },
                { x: 150, y: 120, r: 6, color: '#667eea', text: 'Đỉnh giữa', textY: 105 }
            ],
            volume: [
                { x: 70, y: 230, w: 20, h: 60, color: 'rgba(67,233,123,0.6)' },
                { x: 140, y: 250, w: 20, h: 40, color: 'rgba(102,126,234,0.4)' },
                { x: 240, y: 225, w: 20, h: 65, color: 'rgba(67,233,123,0.7)' }
            ]
        },
        legend: [
            { color: '#43e97b', text: 'Hai đáy bằng nhau' },
            { color: '#667eea', text: 'Đỉnh giữa (Neckline)' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Hai đáy ở mức giá gần bằng nhau, cách nhau bởi một đỉnh trung gian. Giống chữ "W".' },
            { title: 'Đường cổ', desc: 'Nằm ở mức đỉnh giữa hai đáy. Phá vỡ xác nhận đảo chiều tăng.' },
            { title: 'Xác nhận mẫu', desc: 'Giá đóng cửa trên đường cổ với khối lượng tăng. Tỷ lệ thành công: 82%.' },
            { title: 'Mục tiêu giá', desc: 'Độ tăng = Khoảng cách từ đáy đến đường cổ. Thường tăng 15-20%.' }
        ],
        stats: { successRate: '82%', avgChange: '+20%', timeForm: '2-3 tuần', pullback: '58%' }
    },
    {
        id: 'triple-top',
        category: 'reversal',
        module: 'Module 2',
        duration: '14 phút',
        title: 'Mẫu Đỉnh Ba (Triple Top)',
        description: 'Mẫu Đỉnh Ba tương tự Đỉnh Kép nhưng có 3 đỉnh thay vì 2. Đây là mẫu đảo chiều giảm mạnh mẽ với tỷ lệ thành công cao.',
        svg: {
            path: 'M 30 200 L 60 80 L 100 150 L 160 80 L 220 150 L 280 80 L 350 200',
            neckline: { x1: 30, y1: 150, x2: 350, y2: 150 },
            labels: [
                { x: 60, y: 80, r: 7, color: '#f5576c', text: 'Đỉnh 1', textY: 60 },
                { x: 160, y: 80, r: 7, color: '#f5576c', text: 'Đỉnh 2', textY: 60 },
                { x: 280, y: 80, r: 7, color: '#f5576c', text: 'Đỉnh 3', textY: 60 }
            ],
            volume: [
                { x: 50, y: 230, w: 18, h: 55, color: 'rgba(245,87,108,0.5)' },
                { x: 150, y: 240, w: 18, h: 45, color: 'rgba(245,87,108,0.4)' },
                { x: 270, y: 245, w: 18, h: 40, color: 'rgba(245,87,108,0.3)' }
            ]
        },
        legend: [
            { color: '#f5576c', text: 'Ba đỉnh bằng nhau' },
            { color: '#667eea', text: 'Đường cổ' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Ba đỉnh ở mức giá gần bằng nhau, cách nhau bởi hai đáy trung gian.' },
            { title: 'Đường cổ', desc: 'Nằm ở mức thấp nhất giữa các đỉnh. Phá vỡ xác nhận mẫu.' },
            { title: 'Xác nhận mẫu', desc: 'Giá đóng cửa dưới đường cổ. Khối lượng thường giảm qua mỗi đỉnh.' },
            { title: 'Mục tiêu giá', desc: 'Độ giảm = Khoảng cách từ đỉnh đến đường cổ.' }
        ],
        stats: { successRate: '85%', avgChange: '-17%', timeForm: '3-5 tuần', pullback: '52%' }
    },
    {
        id: 'triple-bottom',
        category: 'reversal',
        module: 'Module 2',
        duration: '14 phút',
        title: 'Mẫu Đáy Ba (Triple Bottom)',
        description: 'Mẫu Đáy Ba là mẫu đảo chiều tăng với 3 đáy ở mức giá tương đương. Tỷ lệ thành công cao hơn Đáy Kép.',
        svg: {
            path: 'M 30 80 L 60 200 L 100 130 L 160 200 L 220 130 L 280 200 L 350 70',
            neckline: { x1: 30, y1: 130, x2: 350, y2: 130 },
            labels: [
                { x: 60, y: 200, r: 7, color: '#43e97b', text: 'Đáy 1', textY: 220 },
                { x: 160, y: 200, r: 7, color: '#43e97b', text: 'Đáy 2', textY: 220 },
                { x: 280, y: 200, r: 7, color: '#43e97b', text: 'Đáy 3', textY: 220 }
            ],
            volume: [
                { x: 50, y: 225, w: 18, h: 60, color: 'rgba(67,233,123,0.5)' },
                { x: 150, y: 230, w: 18, h: 55, color: 'rgba(67,233,123,0.6)' },
                { x: 270, y: 220, w: 18, h: 65, color: 'rgba(67,233,123,0.7)' }
            ]
        },
        legend: [
            { color: '#43e97b', text: 'Ba đáy bằng nhau' },
            { color: '#667eea', text: 'Đường cổ' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Ba đáy ở mức giá gần bằng nhau. Tương tự "W" nhưng có thêm 1 đáy.' },
            { title: 'Đường cổ', desc: 'Nằm ở mức cao nhất giữa các đáy. Phá vỡ xác nhận tăng.' },
            { title: 'Xác nhận mẫu', desc: 'Giá đóng cửa trên đường cổ với khối lượng tăng dần.' },
            { title: 'Mục tiêu giá', desc: 'Độ tăng = Khoảng cách từ đáy đến đường cổ.' }
        ],
        stats: { successRate: '87%', avgChange: '+22%', timeForm: '3-5 tuần', pullback: '48%' }
    },
    {
        id: 'rising-wedge',
        category: 'reversal',
        module: 'Module 2',
        duration: '12 phút',
        title: 'Mẫu Nêm Tăng (Rising Wedge)',
        description: 'Mẫu Nêm Tăng là mẫu đảo chiều giảm, mặc dù giá đang tăng. Hai đường biên hội tụ dần, báo hiệu xu hướng tăng sắp kết thúc.',
        svg: {
            path: 'M 30 180 L 80 140 L 130 150 L 180 110 L 230 115 L 280 80 L 330 75 L 380 50',
            labels: [
                { x: 100, y: 140, r: 5, color: '#f5576c', text: '', textY: 130 },
                { x: 280, y: 80, r: 5, color: '#f5576c', text: '', textY: 65 }
            ],
            trendlines: [
                { x1: 30, y1: 190, x2: 400, y2: 60, color: '#f5576c' },
                { x1: 30, y1: 150, x2: 400, y2: 40, color: '#f5576c' }
            ]
        },
        legend: [
            { color: '#f5576c', text: 'Hai đường biên hội tụ' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Hai đường biên tăng dần nhưng hội tụ lại. Đáy cao hơn, đỉnh cao hơn.' },
            { title: 'Tín hiệu', desc: 'Mặc dù giá tăng, biên độ giảm dần cho thấy động lực mua yếu đi.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ đường biên dưới với khối lượng tăng. Tỷ lệ thành công: 72%.' },
            { title: 'Mục tiêu giá', desc: 'Độ giảm = Chiều cao nêm tại điểm bắt đầu.' }
        ],
        stats: { successRate: '72%', avgChange: '-12%', timeForm: '2-4 tuần', pullback: '61%' }
    },
    {
        id: 'falling-wedge',
        category: 'reversal',
        module: 'Module 2',
        duration: '12 phút',
        title: 'Mẫu Nêm Giảm (Falling Wedge)',
        description: 'Mẫu Nêm Giảm là mẫu đảo chiều tăng tích cực. Mặc dù giá giảm nhưng hai đường biên hội tụ, báo hiệu đảo chiều sắp xảy ra.',
        svg: {
            path: 'M 30 60 L 80 100 L 130 90 L 180 130 L 230 120 L 280 160 L 330 150 L 380 190',
            labels: [
                { x: 100, y: 100, r: 5, color: '#43e97b', text: '', textY: 85 },
                { x: 280, y: 160, r: 5, color: '#43e97b', text: '', textY: 145 }
            ],
            trendlines: [
                { x1: 30, y1: 50, x2: 400, y2: 180, color: '#43e97b' },
                { x1: 30, y1: 80, x2: 400, y2: 200, color: '#43e97b' }
            ]
        },
        legend: [
            { color: '#43e97b', text: 'Hai đường biên hội tụ' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Hai đường biên giảm dần và hội tụ. Đỉnh thấp hơn, đáy thấp hơn.' },
            { title: 'Tín hiệu', desc: 'Biên độ giảm dần cho thấy áp lực bán yếu đi, chuẩn bị đảo chiều.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ đường biên trên với khối lượng tăng. Tỷ lệ thành công: 81%.' },
            { title: 'Mục tiêu giá', desc: 'Độ tăng = Chiều cao nêm tại điểm bắt đầu.' }
        ],
        stats: { successRate: '81%', avgChange: '+18%', timeForm: '2-4 tuần', pullback: '55%' }
    },
    {
        id: 'v-top',
        category: 'reversal',
        module: 'Module 2',
        duration: '10 phút',
        title: 'Mẫu V-Top (Adam and Adam Top)',
        description: 'Mẫu V-Top là mẫu đảo chiều giảm hình thành nhanh, giá tăng đột ngột rồi đảo chiều ngay. Đỉnh nhọn, hai bên dốc đứng.',
        svg: {
            path: 'M 30 200 L 150 50 L 180 60 L 220 50 L 280 70 L 350 200',
            labels: [
                { x: 185, y: 50, r: 8, color: '#f5576c', text: 'Đỉnh V', textY: 35 }
            ]
        },
        legend: [{ color: '#f5576c', text: 'Đỉnh nhọn, dốc đứng' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Tăng nhanh đến đỉnh nhọn, sau đó giảm nhanh. Ít pullback.' },
            { title: 'Đặc điểm', desc: 'Hình thành trong vài ngày. Biến động cao, đảo chiều mạnh.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ mức thấp nhất trước đỉnh. Tỷ lệ thành công: 75%.' },
            { title: 'Mục tiêu giá', desc: 'Độ giảm = Khoảng cách từ đỉnh đến điểm bắt đầu tăng.' }
        ],
        stats: { successRate: '75%', avgChange: '-20%', timeForm: '1-2 tuần', pullback: '35%' }
    },
    {
        id: 'v-bottom',
        category: 'reversal',
        module: 'Module 2',
        duration: '10 phút',
        title: 'Mẫu V-Bottom (Adam and Adam Bottom)',
        description: 'Mẫu V-Bottom là mẫu đảo chiều tăng hình thành nhanh, giá giảm đột ngột rồi đảo chiều lên. Đáy nhọn, hai bên dốc đứng.',
        svg: {
            path: 'M 30 60 L 150 200 L 180 190 L 220 200 L 280 180 L 350 50',
            labels: [
                { x: 185, y: 200, r: 8, color: '#43e97b', text: 'Đáy V', textY: 220 }
            ]
        },
        legend: [{ color: '#43e97b', text: 'Đáy nhọn, dốc đứng' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Giảm nhanh đến đáy nhọn, sau đó tăng nhanh. Ít pullback.' },
            { title: 'Đặc điểm', desc: 'Hình thành trong vài ngày. Biến động cao, đảo chiều mạnh.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ mức cao nhất trước đáy. Tỷ lệ thành công: 77%.' },
            { title: 'Mục tiêu giá', desc: 'Độ tăng = Khoảng cách từ đáy đến điểm bắt đầu giảm.' }
        ],
        stats: { successRate: '77%', avgChange: '+22%', timeForm: '1-2 tuần', pullback: '32%' }
    },
    {
        id: 'rounding-top',
        category: 'reversal',
        module: 'Module 2',
        duration: '12 phút',
        title: 'Mẫu Đỉnh Tròn (Rounding Top)',
        description: 'Mẫu Đỉnh Tròn có hình dạng bán cầu, giá tăng chậm rồi giảm chậm. Cho thấy sự chuyển dịch dần từ tăng sang giảm.',
        svg: {
            path: 'M 30 180 Q 100 180, 150 140 Q 200 80, 250 60 Q 300 80, 350 140 Q 400 180, 450 200',
            labels: [
                { x: 250, y: 60, r: 8, color: '#f5576c', text: 'Đỉnh tròn', textY: 45 }
            ]
        },
        legend: [{ color: '#f5576c', text: 'Hình bán cầu' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Đỉnh hình chữ U ngược, chuyển đổi dần từ tăng sang giảm.' },
            { title: 'Đặc điểm', desc: 'Khối lượng thấp ở giữa, tăng ở hai đầu. Hình thành chậm.' },
            { title: 'Xác nhận mẫu', desc: 'Giá phá vỡ mức hỗ trợ thấp nhất. Tỷ lệ thành công: 71%.' },
            { title: 'Mục tiêu giá', desc: 'Độ giảm = Chiều cao từ đỉnh đến điểm bắt đầu/kết thúc.' }
        ],
        stats: { successRate: '71%', avgChange: '-15%', timeForm: '3-6 tuần', pullback: '48%' }
    },
    {
        id: 'rounding-bottom',
        category: 'reversal',
        module: 'Module 2',
        duration: '12 phút',
        title: 'Mẫu Đáy Tròn (Rounding Bottom)',
        description: 'Mẫu Đáy Tròn có hình dạng bán cầu ngược, giá giảm chậm rồi tăng chậm. Cho thấy sự chuyển dịch dần từ giảm sang tăng.',
        svg: {
            path: 'M 30 60 Q 100 60, 150 100 Q 200 160, 250 180 Q 300 160, 350 100 Q 400 60, 450 40',
            labels: [
                { x: 250, y: 180, r: 8, color: '#43e97b', text: 'Đáy tròn', textY: 200 }
            ]
        },
        legend: [{ color: '#43e97b', text: 'Hình bán cầu ngược' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Đáy hình chữ U, chuyển đổi dần từ giảm sang tăng.' },
            { title: 'Đặc điểm', desc: 'Khối lượng thấp ở giữa, tăng ở hai đầu. Hình thành chậm.' },
            { title: 'Xác nhận mẫu', desc: 'Giá phá vỡ mức kháng cự cao nhất. Tỷ lệ thành công: 74%.' },
            { title: 'Mục tiêu giá', desc: 'Độ tăng = Chiều cao từ đáy đến điểm bắt đầu/kết thúc.' }
        ],
        stats: { successRate: '74%', avgChange: '+18%', timeForm: '3-6 tuần', pullback: '45%' }
    },
    {
        id: 'diamond-top',
        category: 'reversal',
        module: 'Module 2',
        duration: '14 phút',
        title: 'Mẫu Đỉnh Kim Cương (Diamond Top)',
        description: 'Mẫu Đỉnh Kim Cương có hình dạng kim cương, mở rộng rồi thu hẹp. Mẫu đảo chiều giảm phức tạp nhưng đáng tin cậy.',
        svg: {
            path: 'M 30 140 L 80 100 L 130 140 L 180 80 L 230 140 L 280 100 L 330 160 L 380 200',
            labels: [
                { x: 180, y: 80, r: 8, color: '#f5576c', text: 'Đỉnh', textY: 65 }
            ],
            trendlines: [
                { x1: 30, y1: 140, x2: 180, y2: 80, color: '#f5576c' },
                { x1: 180, y1: 80, x2: 330, y2: 160, color: '#f5576c' },
                { x1: 30, y1: 150, x2: 180, y2: 120, color: '#f5576c' },
                { x1: 180, y1: 120, x2: 330, y2: 160, color: '#f5576c' }
            ]
        },
        legend: [{ color: '#f5576c', text: 'Hình kim cương' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Mở rộng (broadening) rồi thu hẹp (triangle). Hình kim cương.' },
            { title: 'Đặc điểm', desc: 'Biến động tăng rồi giảm. Xuất hiện ở đỉnh xu hướng tăng.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ đường biên dưới. Tỷ lệ thành công: 82%.' },
            { title: 'Mục tiêu giá', desc: 'Độ giảm = Chiều cao kim cương tại điểm rộng nhất.' }
        ],
        stats: { successRate: '82%', avgChange: '-16%', timeForm: '2-4 tuần', pullback: '52%' }
    },
    {
        id: 'diamond-bottom',
        category: 'reversal',
        module: 'Module 2',
        duration: '14 phút',
        title: 'Mẫu Đáy Kim Cương (Diamond Bottom)',
        description: 'Mẫu Đáy Kim Cương là phiên bản ngược của Diamond Top, xuất hiện ở đáy xu hướng giảm và báo hiệu đảo chiều tăng.',
        svg: {
            path: 'M 30 80 L 80 120 L 130 80 L 180 140 L 230 80 L 280 120 L 330 90 L 380 50',
            labels: [
                { x: 180, y: 140, r: 8, color: '#43e97b', text: 'Đáy', textY: 160 }
            ],
            trendlines: [
                { x1: 30, y1: 80, x2: 180, y2: 140, color: '#43e97b' },
                { x1: 180, y1: 140, x2: 330, y2: 90, color: '#43e97b' },
                { x1: 30, y1: 70, x2: 180, y2: 100, color: '#43e97b' },
                { x1: 180, y1: 100, x2: 330, y2: 90, color: '#43e97b' }
            ]
        },
        legend: [{ color: '#43e97b', text: 'Hình kim cương ngược' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Mở rộng rồi thu hẹp ở đáy. Hình kim cương ngược.' },
            { title: 'Đặc điểm', desc: 'Biến động tăng rồi giảm. Xuất hiện ở đáy xu hướng giảm.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ đường biên trên. Tỷ lệ thành công: 80%.' },
            { title: 'Mục tiêu giá', desc: 'Độ tăng = Chiều cao kim cương tại điểm rộng nhất.' }
        ],
        stats: { successRate: '80%', avgChange: '+19%', timeForm: '2-4 tuần', pullback: '55%' }
    },
    {
        id: 'island-top',
        category: 'reversal',
        module: 'Module 2',
        duration: '10 phút',
        title: 'Mẫu Đỉnh Đảo (Island Top)',
        description: 'Mẫu Đỉnh Đảo được hình thành bởi gap up và gap down, tạo thành một "đảo" giá biệt lập ở đỉnh.',
        svg: {
            path: 'M 30 140 L 80 140 L 80 100 L 120 100 L 150 90 L 180 95 L 210 90 L 240 100 L 240 150 L 350 200',
            labels: [
                { x: 165, y: 90, r: 6, color: '#f5576c', text: 'Đảo', textY: 75 }
            ],
            gapAreas: [
                { x: 80, y: 100, w: 5, h: 40, color: 'rgba(102,126,234,0.3)' },
                { x: 240, y: 100, w: 5, h: 50, color: 'rgba(245,87,108,0.3)' }
            ]
        },
        legend: [{ color: '#f5576c', text: 'Đảo biệt lập bởi 2 gaps' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Gap up tạo đảo, gap down xác nhận đảo chiều. Đảo biệt lập.' },
            { title: 'Đặc điểm', desc: 'Ít phiên giao dịch trên đảo. Đảo chiều mạnh và nhanh.' },
            { title: 'Xác nhận mẫu', desc: 'Gap down hoàn tất mẫu. Tỷ lệ thành công: 79%.' },
            { title: 'Mục tiêu giá', desc: 'Độ giảm = Chiều cao đảo + khoảng cách từ đáy đảo.' }
        ],
        stats: { successRate: '79%', avgChange: '-18%', timeForm: '3-7 ngày', pullback: '38%' }
    },
    {
        id: 'island-bottom',
        category: 'reversal',
        module: 'Module 2',
        duration: '10 phút',
        title: 'Mẫu Đáy Đảo (Island Bottom)',
        description: 'Mẫu Đáy Đảo được hình thành bởi gap down và gap up, tạo thành một "đảo" giá biệt lập ở đáy.',
        svg: {
            path: 'M 30 80 L 80 80 L 80 120 L 120 120 L 150 130 L 180 125 L 210 130 L 240 120 L 240 70 L 350 40',
            labels: [
                { x: 165, y: 130, r: 6, color: '#43e97b', text: 'Đảo', textY: 148 }
            ],
            gapAreas: [
                { x: 80, y: 80, w: 5, h: 40, color: 'rgba(245,87,108,0.3)' },
                { x: 240, y: 70, w: 5, h: 50, color: 'rgba(67,233,123,0.3)' }
            ]
        },
        legend: [{ color: '#43e97b', text: 'Đảo biệt lập bởi 2 gaps' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Gap down tạo đảo, gap up xác nhận đảo chiều. Đảo biệt lập.' },
            { title: 'Đặc điểm', desc: 'Ít phiên giao dịch trên đảo. Đảo chiều mạnh và nhanh.' },
            { title: 'Xác nhận mẫu', desc: 'Gap up hoàn tất mẫu. Tỷ lệ thành công: 81%.' },
            { title: 'Mục tiêu giá', desc: 'Độ tăng = Chiều cao đảo + khoảng cách từ đỉnh đảo.' }
        ],
        stats: { successRate: '81%', avgChange: '+20%', timeForm: '3-7 ngày', pullback: '35%' }
    },
    {
        id: 'island-reversal',
        category: 'reversal',
        module: 'Module 2',
        duration: '12 phút',
        title: 'Mẫu Đảo Chiều Đảo (Island Reversal)',
        description: 'Mẫu Island Reversal tổng quát, có thể xuất hiện ở đỉnh hoặc đáy. Đặc trưng bởi hai gap bao quanh vùng giá biệt lập.',
        svg: {
            path: 'M 30 120 L 70 120 L 70 80 L 100 80 L 130 70 L 160 75 L 190 70 L 220 80 L 220 130 L 350 170',
            labels: [
                { x: 145, y: 70, r: 6, color: '#a18cd1', text: 'Đảo', textY: 55 }
            ]
        },
        legend: [{ color: '#a18cd1', text: 'Vùng đảo biệt lập' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Hai gap bao quanh vùng giá biệt lập. Gap 1 tạo đảo, gap 2 xác nhận.' },
            { title: 'Đặc điểm', desc: 'Vùng đảo có 1-4 phiên. Biến động cao, đảo chiều nhanh.' },
            { title: 'Xác nhận mẫu', desc: 'Gap thứ 2 hoàn tất mẫu. Tỷ lệ thành công: 77%.' },
            { title: 'Giao dịch', desc: 'Vào lệnh ngay sau gap xác nhận. StopLoss trên/dưới đảo.' }
        ],
        stats: { successRate: '77%', avgChange: '+/-18%', timeForm: '3-10 ngày', pullback: '40%' }
    },
    {
        id: 'pipe-top',
        category: 'reversal',
        module: 'Module 2',
        duration: '10 phút',
        title: 'Mẫu Ống Đỉnh (Pipe Top)',
        description: 'Mẫu Pipe Top có hai nến dài với thân gần bằng nhau ở đỉnh, tạo thành hình ống. Báo hiệu đảo chiều giảm.',
        svg: {
            path: 'M 30 160 L 80 160 L 80 100 L 100 100 L 100 160 L 130 160 L 130 90 L 150 90 L 150 160 L 350 200',
            labels: [
                { x: 90, y: 95, r: 4, color: '#f5576c', text: 'Nến 1', textY: 80 },
                { x: 140, y: 85, r: 4, color: '#f5576c', text: 'Nến 2', textY: 70 }
            ],
            candles: [
                { x: 75, w: 15, bodyY: 100, bodyH: 60, color: '#f5576c' },
                { x: 125, w: 15, bodyY: 90, bodyH: 70, color: '#f5576c' }
            ]
        },
        legend: [{ color: '#f5576c', text: 'Hai nến dài gần bằng nhau' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Hai nến dài với thân gần bằng nhau, wick dài hai đầu.' },
            { title: 'Đặc điểm', desc: 'Xuất hiện sau xu hướng tăng. Cho thấy sự do dự tại đỉnh.' },
            { title: 'Xác nhận mẫu', desc: 'Nến thứ 3 giảm xác nhận. Tỷ lệ thành công: 68%.' },
            { title: 'Mục tiêu giá', desc: 'Độ giảm = Chiều cao của ống x 2.' }
        ],
        stats: { successRate: '68%', avgChange: '-12%', timeForm: '2-3 ngày', pullback: '55%' }
    },
    {
        id: 'pipe-bottom',
        category: 'reversal',
        module: 'Module 2',
        duration: '10 phút',
        title: 'Mẫu Ống Đáy (Pipe Bottom)',
        description: 'Mẫu Pipe Bottom có hai nến dài với thân gần bằng nhau ở đáy, tạo thành hình ống. Báo hiệu đảo chiều tăng.',
        svg: {
            path: 'M 30 80 L 80 80 L 80 140 L 100 140 L 100 80 L 130 80 L 130 150 L 150 150 L 150 80 L 350 50',
            labels: [
                { x: 90, y: 145, r: 4, color: '#43e97b', text: 'Nến 1', textY: 162 },
                { x: 140, y: 155, r: 4, color: '#43e97b', text: 'Nến 2', textY: 172 }
            ],
            candles: [
                { x: 75, w: 15, bodyY: 80, bodyH: 60, color: '#43e97b' },
                { x: 125, w: 15, bodyY: 80, bodyH: 70, color: '#43e97b' }
            ]
        },
        legend: [{ color: '#43e97b', text: 'Hai nến dài gần bằng nhau' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Hai nến dài với thân gần bằng nhau, wick dài hai đầu.' },
            { title: 'Đặc điểm', desc: 'Xuất hiện sau xu hướng giảm. Cho thấy sự do dự tại đáy.' },
            { title: 'Xác nhận mẫu', desc: 'Nến thứ 3 tăng xác nhận. Tỷ lệ thành công: 70%.' },
            { title: 'Mục tiêu giá', desc: 'Độ tăng = Chiều cao của ống x 2.' }
        ],
        stats: { successRate: '70%', avgChange: '+14%', timeForm: '2-3 ngày', pullback: '52%' }
    },
    {
        id: 'tower-top',
        category: 'reversal',
        module: 'Module 2',
        duration: '12 phút',
        title: 'Mẫu Tháp Đỉnh (Tower Top)',
        description: 'Mẫu Tower Top có đỉnh phẳng như tháp, giá tăng rồi đi ngang trước khi giảm. Báo hiệu đảo chiều giảm.',
        svg: {
            path: 'M 30 160 L 80 120 L 130 100 L 180 90 L 230 90 L 280 90 L 330 100 L 380 140 L 450 200',
            labels: [
                { x: 230, y: 90, r: 8, color: '#f5576c', text: 'Đỉnh tháp', textY: 75 }
            ]
        },
        legend: [{ color: '#f5576c', text: 'Đỉnh phẳng như tháp' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Tăng nhanh, đi ngang tạo đỉnh phẳng, sau đó giảm nhanh.' },
            { title: 'Đặc điểm', desc: 'Đỉnh phẳng có nhiều đỉnh bằng nhau. Hình tháp.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ đáy của đỉnh tháp. Tỷ lệ thành công: 73%.' },
            { title: 'Mục tiêu giá', desc: 'Độ giảm = Chiều cao từ đỉnh đến đáy tháp.' }
        ],
        stats: { successRate: '73%', avgChange: '-14%', timeForm: '2-4 tuần', pullback: '48%' }
    },
    {
        id: 'tower-bottom',
        category: 'reversal',
        module: 'Module 2',
        duration: '12 phút',
        title: 'Mẫu Tháp Đáy (Tower Bottom)',
        description: 'Mẫu Tower Bottom có đáy phẳng như tháp, giá giảm rồi đi ngang trước khi tăng. Báo hiệu đảo chiều tăng.',
        svg: {
            path: 'M 30 60 L 80 100 L 130 120 L 180 130 L 230 130 L 280 130 L 330 120 L 380 90 L 450 40',
            labels: [
                { x: 230, y: 130, r: 8, color: '#43e97b', text: 'Đáy tháp', textY: 148 }
            ]
        },
        legend: [{ color: '#43e97b', text: 'Đáy phẳng như tháp' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Giảm nhanh, đi ngang tạo đáy phẳng, sau đó tăng nhanh.' },
            { title: 'Đặc điểm', desc: 'Đáy phẳng có nhiều đáy bằng nhau. Hình tháp ngược.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ đỉnh của đáy tháp. Tỷ lệ thành công: 75%.' },
            { title: 'Mục tiêu giá', desc: 'Độ tăng = Chiều cao từ đáy đến đỉnh tháp.' }
        ],
        stats: { successRate: '75%', avgChange: '+16%', timeForm: '2-4 tuần', pullback: '45%' }
    },
    {
        id: 'horn-top',
        category: 'reversal',
        module: 'Module 2',
        duration: '11 phút',
        title: 'Mẫu Kèn Đỉnh (Horn Top)',
        description: 'Mẫu Horn Top có hai đỉnh cao dần với đáy giữa cao, tạo hình như chiếc kèn. Báo hiệu đảo chiều giảm.',
        svg: {
            path: 'M 30 140 L 80 100 L 130 130 L 180 80 L 250 150 L 350 200',
            labels: [
                { x: 80, y: 100, r: 6, color: '#f5576c', text: 'Đỉnh 1', textY: 85 },
                { x: 180, y: 80, r: 6, color: '#f5576c', text: 'Đỉnh 2', textY: 65 }
            ]
        },
        legend: [{ color: '#f5576c', text: 'Đỉnh cao dần, đáy giữa cao' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Đỉnh 2 cao hơn đỉnh 1, đáy giữa cao hơn hai đỉnh.' },
            { title: 'Đặc điểm', desc: 'Hình kèn loe ra. Hiếm gặp nhưng đáng tin cậy.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ đáy giữa hai đỉnh. Tỷ lệ thành công: 78%.' },
            { title: 'Mục tiêu giá', desc: 'Độ giảm = Chiều cao từ đỉnh 2 đến đáy giữa.' }
        ],
        stats: { successRate: '78%', avgChange: '-15%', timeForm: '2-3 tuần', pullback: '50%' }
    },
    {
        id: 'horn-bottom',
        category: 'reversal',
        module: 'Module 2',
        duration: '11 phút',
        title: 'Mẫu Kèn Đáy (Horn Bottom)',
        description: 'Mẫu Horn Bottom có hai đáy thấp dần với đỉnh giữa thấp, tạo hình như chiếc kèn ngược. Báo hiệu đảo chiều tăng.',
        svg: {
            path: 'M 30 80 L 80 120 L 130 90 L 180 140 L 250 80 L 350 50',
            labels: [
                { x: 80, y: 120, r: 6, color: '#43e97b', text: 'Đáy 1', textY: 138 },
                { x: 180, y: 140, r: 6, color: '#43e97b', text: 'Đáy 2', textY: 158 }
            ]
        },
        legend: [{ color: '#43e97b', text: 'Đáy thấp dần, đỉnh giữa thấp' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Đáy 2 thấp hơn đáy 1, đỉnh giữa thấp hơn hai đáy.' },
            { title: 'Đặc điểm', desc: 'Hình kèn ngược. Hiếm gặp nhưng đáng tin cậy.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ đỉnh giữa hai đáy. Tỷ lệ thành công: 80%.' },
            { title: 'Mục tiêu giá', desc: 'Độ tăng = Chiều cao từ đáy 2 đến đỉnh giữa.' }
        ],
        stats: { successRate: '80%', avgChange: '+17%', timeForm: '2-3 tuần', pullback: '48%' }
    },
    {
        id: 'bump-run-top',
        category: 'reversal',
        module: 'Module 2',
        duration: '15 phút',
        title: 'Mẫu Bump and Run Top',
        description: 'Mẫu Bump and Run Top bắt đầu với đường dẫn (lead-in), sau đó bump lên mạnh và run xuống. Đảo chiều giảm.',
        svg: {
            path: 'M 30 160 L 100 150 L 170 130 L 200 60 L 240 70 L 280 60 L 320 90 L 400 180',
            labels: [
                { x: 100, y: 150, r: 4, color: '#667eea', text: 'Lead-in', textY: 168 },
                { x: 220, y: 60, r: 6, color: '#f5576c', text: 'Bump', textY: 45 },
                { x: 340, y: 130, r: 4, color: '#f5576c', text: 'Run', textY: 115 }
            ]
        },
        legend: [{ color: '#667eea', text: 'Lead-in → Bump → Run' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Lead-in: tăng nhẹ. Bump: tăng mạnh tạo đỉnh. Run: giảm nhanh.' },
            { title: 'Đặc điểm', desc: 'Bump phải cao hơn ít nhất 50% so với lead-in.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ đường trendline của lead-in. Tỷ lệ thành công: 76%.' },
            { title: 'Mục tiêu giá', desc: 'Độ giảm = Chiều cao từ đỉnh bump đến đường lead-in.' }
        ],
        stats: { successRate: '76%', avgChange: '-18%', timeForm: '3-5 tuần', pullback: '42%' }
    },
    {
        id: 'bump-run-bottom',
        category: 'reversal',
        module: 'Module 2',
        duration: '15 phút',
        title: 'Mẫu Bump and Run Bottom',
        description: 'Mẫu Bump and Run Bottom bắt đầu với đường dẫn, sau đó bump xuống mạnh và run lên. Đảo chiều tăng.',
        svg: {
            path: 'M 30 80 L 100 90 L 170 110 L 200 180 L 240 170 L 280 180 L 320 150 L 400 50',
            labels: [
                { x: 100, y: 90, r: 4, color: '#667eea', text: 'Lead-in', textY: 78 },
                { x: 220, y: 180, r: 6, color: '#43e97b', text: 'Bump', textY: 198 },
                { x: 340, y: 110, r: 4, color: '#43e97b', text: 'Run', textY: 98 }
            ]
        },
        legend: [{ color: '#43e97b', text: 'Lead-in → Bump → Run' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Lead-in: giảm nhẹ. Bump: giảm mạnh tạo đáy. Run: tăng nhanh.' },
            { title: 'Đặc điểm', desc: 'Bump phải thấp hơn ít nhất 50% so với lead-in.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ đường trendline của lead-in. Tỷ lệ thành công: 78%.' },
            { title: 'Mục tiêu giá', desc: 'Độ tăng = Chiều cao từ đáy bump đến đường lead-in.' }
        ],
        stats: { successRate: '78%', avgChange: '+20%', timeForm: '3-5 tuần', pullback: '40%' }
    },
    {
        id: 'three-rising-valleys',
        category: 'reversal',
        module: 'Module 2',
        duration: '14 phút',
        title: 'Mẫu Ba Thung Lũng Tăng (Three Rising Valleys)',
        description: 'Mẫu Three Rising Valleys có ba đáy tăng dần, mỗi đáy cao hơn đáy trước. Báo hiệu đảo chiều tăng.',
        svg: {
            path: 'M 30 180 L 60 140 L 100 160 L 140 120 L 180 140 L 220 100 L 280 110 L 350 50',
            labels: [
                { x: 60, y: 160, r: 5, color: '#43e97b', text: 'Đáy 1', textY: 178 },
                { x: 140, y: 140, r: 5, color: '#43e97b', text: 'Đáy 2', textY: 158 },
                { x: 220, y: 110, r: 5, color: '#43e97b', text: 'Đáy 3', textY: 128 }
            ]
        },
        legend: [{ color: '#43e97b', text: 'Ba đáy tăng dần' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Ba đáy, mỗi đáy cao hơn đáy trước. Giống ascending triangle.' },
            { title: 'Đặc điểm', desc: 'Xuất hiện ở đáy xu hướng giảm. Tích lũy dần.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ đỉnh cao nhất. Tỷ lệ thành công: 79%.' },
            { title: 'Mục tiêu giá', desc: 'Độ tăng = Chiều cao từ đáy 1 đến đỉnh cao nhất.' }
        ],
        stats: { successRate: '79%', avgChange: '+22%', timeForm: '3-5 tuần', pullback: '46%' }
    },
    {
        id: 'three-falling-peaks',
        category: 'reversal',
        module: 'Module 2',
        duration: '14 phút',
        title: 'Mẫu Ba Đỉnh Giảm (Three Falling Peaks)',
        description: 'Mẫu Three Falling Peaks có ba đỉnh giảm dần, mỗi đỉnh thấp hơn đỉnh trước. Báo hiệu đảo chiều giảm.',
        svg: {
            path: 'M 30 60 L 60 100 L 100 80 L 140 120 L 180 100 L 220 140 L 280 120 L 350 180',
            labels: [
                { x: 60, y: 80, r: 5, color: '#f5576c', text: 'Đỉnh 1', textY: 68 },
                { x: 140, y: 100, r: 5, color: '#f5576c', text: 'Đỉnh 2', textY: 88 },
                { x: 220, y: 120, r: 5, color: '#f5576c', text: 'Đỉnh 3', textY: 108 }
            ]
        },
        legend: [{ color: '#f5576c', text: 'Ba đỉnh giảm dần' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Ba đỉnh, mỗi đỉnh thấp hơn đỉnh trước. Giống descending triangle.' },
            { title: 'Đặc điểm', desc: 'Xuất hiện ở đỉnh xu hướng tăng. Phân phối dần.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ đáy thấp nhất. Tỷ lệ thành công: 77%.' },
            { title: 'Mục tiêu giá', desc: 'Độ giảm = Chiều cao từ đỉnh 1 đến đáy thấp nhất.' }
        ],
        stats: { successRate: '77%', avgChange: '-19%', timeForm: '3-5 tuần', pullback: '48%' }
    },
    {
        id: 'hook-reversal',
        category: 'reversal',
        module: 'Module 2',
        duration: '10 phút',
        title: 'Mẫu Đảo Chiều Móc (Hook Reversal)',
        description: 'Mẫu Hook Reversal có dạng móc câu, giá tạo đỉnh/đáy mới rồi đảo chiều ngay tạo thành hình móc.',
        svg: {
            path: 'M 30 140 L 80 100 L 120 110 L 160 60 L 200 90 L 250 140 L 300 170 L 350 160',
            labels: [
                { x: 160, y: 60, r: 6, color: '#f5576c', text: 'Móc', textY: 48 }
            ]
        },
        legend: [{ color: '#f5576c', text: 'Hình móc câu' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Tăng tạo đỉnh mới, sau đó đảo chiều nhanh tạo hình móc.' },
            { title: 'Đặc điểm', desc: 'Hình thành nhanh, 3-5 phiên. Phản ứng nhanh của thị trường.' },
            { title: 'Xác nhận mẫu', desc: 'Nến xác nhận theo hướng đảo chiều. Tỷ lệ thành công: 65%.' },
            { title: 'Giao dịch', desc: 'Vào lệnh sau nến xác nhận. StopLoss trên đỉnh móc.' }
        ],
        stats: { successRate: '65%', avgChange: '-10%', timeForm: '3-5 ngày', pullback: '58%' }
    },
    {
        id: 'adam-eve-top',
        category: 'reversal',
        module: 'Module 2',
        duration: '12 phút',
        title: 'Mẫu Adam và Eva Đỉnh (Adam and Eve Top)',
        description: 'Mẫu Adam-Eve Top có đỉnh nhọn (Adam) bên trái và đỉnh tròn (Eve) bên phải. Báo hiệu đảo chiều giảm.',
        svg: {
            path: 'M 30 160 L 80 120 L 110 60 L 140 120 L 180 100 Q 220 60, 260 100 L 300 130 L 350 170 L 400 190',
            labels: [
                { x: 110, y: 60, r: 6, color: '#f5576c', text: 'Adam', textY: 48 },
                { x: 220, y: 70, r: 6, color: '#667eea', text: 'Eve', textY: 55 }
            ],
            neckline: { x1: 80, y1: 120, x2: 300, y2: 130 }
        },
        legend: [
            { color: '#f5576c', text: 'Adam (đỉnh nhọn)' },
            { color: '#667eea', text: 'Eve (đỉnh tròn)' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Đỉnh trái nhọn (Adam), đỉnh phải tròn (Eve). Hai đỉnh cách nhau.' },
            { title: 'Đặc điểm', desc: 'Adam hình thành nhanh, Eve hình thành chậm hơn.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ đường cổ (neckline). Tỷ lệ thành công: 78%.' },
            { title: 'Mục tiêu giá', desc: 'Độ giảm = Chiều cao từ đỉnh đến neckline.' }
        ],
        stats: { successRate: '78%', avgChange: '-17%', timeForm: '2-4 tuần', pullback: '52%' }
    },
    {
        id: 'adam-eve-bottom',
        category: 'reversal',
        module: 'Module 2',
        duration: '12 phút',
        title: 'Mẫu Adam và Eva Đáy (Adam and Eve Bottom)',
        description: 'Mẫu Adam-Eve Bottom có đáy nhọn (Adam) bên trái và đáy tròn (Eve) bên phải. Báo hiệu đảo chiều tăng.',
        svg: {
            path: 'M 30 60 L 80 100 L 110 160 L 140 100 L 180 120 Q 220 160, 260 120 L 300 90 L 350 50 L 400 30',
            labels: [
                { x: 110, y: 160, r: 6, color: '#43e97b', text: 'Adam', textY: 175 },
                { x: 220, y: 150, r: 6, color: '#667eea', text: 'Eve', textY: 165 }
            ],
            neckline: { x1: 80, y1: 100, x2: 300, y2: 90 }
        },
        legend: [
            { color: '#43e97b', text: 'Adam (đáy nhọn)' },
            { color: '#667eea', text: 'Eve (đáy tròn)' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Đáy trái nhọn (Adam), đáy phải tròn (Eve). Hai đáy cách nhau.' },
            { title: 'Đặc điểm', desc: 'Adam phản ứng nhanh, Eve tích lũy chậm.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ neckline. Tỷ lệ thành công: 80%.' },
            { title: 'Mục tiêu giá', desc: 'Độ tăng = Chiều cao từ đáy đến neckline.' }
        ],
        stats: { successRate: '80%', avgChange: '+19%', timeForm: '2-4 tuần', pullback: '48%' }
    },
    {
        id: 'aco-fern-top',
        category: 'reversal',
        module: 'Module 2',
        duration: '14 phút',
        title: 'Mẫu Aco Fern Đỉnh (Scalloping Top)',
        description: 'Mẫu Aco Fern có dạng vảy sò liên tiếp ở đỉnh, mỗi đỉnh thấp hơn đỉnh trước, báo hiệu giảm.',
        svg: {
            path: 'M 30 100 Q 60 60, 90 80 Q 120 100, 140 90 Q 160 70, 190 85 Q 220 95, 240 88 Q 270 75, 300 90 Q 330 100, 360 95 L 400 140',
            labels: [
                { x: 60, y: 65, r: 5, color: '#f5576c', text: 'Vảy 1', textY: 52 },
                { x: 175, y: 75, r: 5, color: '#f5576c', text: 'Vảy 2', textY: 62 },
                { x: 285, y: 80, r: 5, color: '#f5576c', text: 'Vảy 3', textY: 67 }
            ]
        },
        legend: [{ color: '#f5576c', text: 'Các vảy sò giảm dần' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Nhiều vảy sò (scallop) nhỏ, mỗi đỉnh thấp hơn trước.' },
            { title: 'Đặc điểm', desc: 'Biến động giảm dần, áp lực bán tăng.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ đáy thấp nhất. Tỷ lệ thành công: 62%.' },
            { title: 'Giao dịch', desc: 'Bán khi phá vỡ. StopLoss trên đỉnh cao nhất.' }
        ],
        stats: { successRate: '62%', avgChange: '-12%', timeForm: '4-8 tuần', pullback: '65%' }
    },
    {
        id: 'aco-fern-bottom',
        category: 'reversal',
        module: 'Module 2',
        duration: '14 phút',
        title: 'Mẫu Aco Fern Đáy (Scalloping Bottom)',
        description: 'Mẫu Aco Fern Bottom có dạng vảy sò liên tiếp ở đáy, mỗi đáy cao hơn, báo hiệu tăng.',
        svg: {
            path: 'M 30 140 Q 60 180, 90 160 Q 120 140, 140 155 Q 160 175, 190 158 Q 220 145, 240 155 Q 270 170, 300 152 Q 330 140, 360 150 L 400 110',
            labels: [
                { x: 60, y: 175, r: 5, color: '#43e97b', text: 'Vảy 1', textY: 190 },
                { x: 175, y: 170, r: 5, color: '#43e97b', text: 'Vảy 2', textY: 185 },
                { x: 285, y: 165, r: 5, color: '#43e97b', text: 'Vảy 3', textY: 180 }
            ]
        },
        legend: [{ color: '#43e97b', text: 'Các vảy sò tăng dần' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Nhiều vảy sò nhỏ, mỗi đáy cao hơn trước.' },
            { title: 'Đặc điểm', desc: 'Biến động tăng dần, áp lực mua tích tụ.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ đỉnh cao nhất. Tỷ lệ thành công: 65%.' },
            { title: 'Giao dịch', desc: 'Mua khi phá vỡ. StopLoss dưới đáy thấp nhất.' }
        ],
        stats: { successRate: '65%', avgChange: '+14%', timeForm: '4-8 tuần', pullback: '62%' }
    },
    {
        id: 'stalled-pattern',
        category: 'reversal',
        module: 'Module 2',
        duration: '10 phút',
        title: 'Mẫu Kẹt (Stalled Pattern)',
        description: 'Mẫu Stalled xuất hiện khi xu hướng tăng chậm lại, giá không tạo đỉnh mới, báo hiệu đảo chiều.',
        svg: {
            path: 'M 30 200 L 80 160 L 130 120 L 180 80 L 220 75 L 260 78 L 300 76 L 340 80 L 380 110 L 420 150',
            labels: [
                { x: 180, y: 80, r: 5, color: '#43e97b', text: 'Tăng mạnh', textY: 68 },
                { x: 300, y: 70, r: 6, color: '#f5576c', text: 'Kẹt', textY: 58 },
                { x: 400, y: 130, r: 4, color: '#f5576c', text: 'Đảo', textY: 145 }
            ]
        },
        legend: [{ color: '#f5576c', text: 'Vùng giá kẹt' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Tăng mạnh, sau đó đi ngang (kẹt) không tạo đỉnh mới.' },
            { title: 'Đặc điểm', desc: 'Động lượng giảm, volume thấp khi đi ngang.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ dưới vùng kẹt. Tỷ lệ thành công: 68%.' },
            { title: 'Giao dịch', desc: 'Bán khi phá vỡ. StopLoss trên vùng kẹt.' }
        ],
        stats: { successRate: '68%', avgChange: '-11%', timeForm: '1-3 tuần', pullback: '55%' }
    },
    {
        id: 'six-pushes',
        category: 'reversal',
        module: 'Module 2',
        duration: '12 phút',
        title: 'Mẫu Sáu Lần Đẩy (Six or More Pushes)',
        description: 'Mẫu Six Pushes có 6 hoặc nhiều đợt tăng/đẩy liên tiếp, báo hiệu kiệt sức và đảo chiều giảm.',
        svg: {
            path: 'M 30 200 L 50 180 L 70 185 L 90 160 L 110 165 L 130 140 L 150 145 L 170 120 L 190 125 L 210 100 L 230 105 L 250 85 L 270 90 L 290 70 L 320 110 L 370 160',
            labels: [
                { x: 90, y: 160, r: 3, color: '#43e97b', text: '1', textY: 175 },
                { x: 130, y: 140, r: 3, color: '#43e97b', text: '2', textY: 155 },
                { x: 170, y: 120, r: 3, color: '#43e97b', text: '3', textY: 135 },
                { x: 210, y: 100, r: 3, color: '#43e97b', text: '4', textY: 115 },
                { x: 250, y: 85, r: 3, color: '#43e97b', text: '5', textY: 100 },
                { x: 290, y: 70, r: 4, color: '#f5576c', text: '6', textY: 58 }
            ]
        },
        legend: [{ color: '#43e97b', text: '6 đợt đẩy tăng' }],
        keypoints: [
            { title: 'Cấu trúc', desc: '6 hoặc nhiều đợt tăng (push) liên tiếp, mỗi đợt cao hơn.' },
            { title: 'Đặc điểm', desc: 'Động lượng yếu dần, volume giảm. Kiệt sức.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ đường hỗ trợ gần nhất. Tỷ lệ thành công: 72%.' },
            { title: 'Giao dịch', desc: 'Bán khi phá vỡ. StopLoss trên đỉnh cao nhất.' }
        ],
        stats: { successRate: '72%', avgChange: '-15%', timeForm: '3-5 tuần', pullback: '48%' }
    },
    {
        id: 'bump-run-reversal',
        category: 'reversal',
        module: 'Module 2',
        duration: '14 phút',
        title: 'Mẫu Bump and Run Đảo Chiều (BARR Reversal)',
        description: 'Mẫu BARR Reversal có pha lead-in, bump (đảo ngược) và run. Báo hiệu đảo chiều mạnh.',
        svg: {
            path: 'M 30 180 L 80 160 L 130 140 L 180 120 L 200 100 L 170 60 L 140 80 L 100 70 L 60 100 L 40 150',
            labels: [
                { x: 130, y: 140, r: 4, color: '#667eea', text: 'Lead-in', textY: 155 },
                { x: 185, y: 90, r: 5, color: '#f5576c', text: 'Bump', textY: 78 },
                { x: 80, y: 80, r: 5, color: '#43e97b', text: 'Run', textY: 65 }
            ],
            trendlines: [
                { x1: 30, y1: 180, x2: 180, y2: 120, color: '#667eea' }
            ]
        },
        legend: [
            { color: '#667eea', text: 'Lead-in (đường dẫn)' },
            { color: '#f5576c', text: 'Bump (đảo ngược)' },
            { color: '#43e97b', text: 'Run (chạy)' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Lead-in: tăng đều. Bump: đảo ngược đột ngột. Run: chạy theo hướng đảo.' },
            { title: 'Đặc điểm', desc: 'Bump phải vượt xa đường lead-in.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ đường lead-in. Tỷ lệ thành công: 85%.' },
            { title: 'Mục tiêu giá', desc: 'Độ thay đổi = Khoảng cách từ bump đến lead-in.' }
        ],
        stats: { successRate: '85%', avgChange: '-22%', timeForm: '2-4 tuần', pullback: '38%' }
    },
    {
        id: 'quasimodo',
        category: 'reversal',
        module: 'Module 2',
        duration: '12 phút',
        title: 'Mẫu Quasimodo (Over and Under)',
        description: 'Mẫu Quasimodo có đỉnh/đáy cao/thấp hơn rồi đảo chiều vượt qua mức trước đó. Báo hiệu đảo chiều mạnh.',
        svg: {
            path: 'M 30 140 L 80 100 L 120 130 L 160 60 L 200 120 L 240 150 L 280 180 L 340 150 L 400 120',
            labels: [
                { x: 160, y: 60, r: 6, color: '#f5576c', text: 'Đỉnh', textY: 48 },
                { x: 280, y: 180, r: 6, color: '#43e97b', text: 'Qua', textY: 195 }
            ]
        },
        legend: [{ color: '#f5576c', text: 'Over and Under' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Tạo đỉnh mới, kéo về, sau đó giảm qua đáy trước.' },
            { title: 'Đặc điểm', desc: 'Cấu trúc sóng Elliott. Rất tin cậy.' },
            { title: 'Xác nhận mẫu', desc: 'Giá giảm qua đáy thấp hơn. Tỷ lệ thành công: 82%.' },
            { title: 'Giao dịch', desc: 'Bán khi phá vỡ đáy. StopLoss trên đỉnh.' }
        ],
        stats: { successRate: '82%', avgChange: '-16%', timeForm: '2-3 tuần', pullback: '45%' }
    },
    {
        id: 'adam-adam-top',
        category: 'reversal',
        module: 'Module 2',
        duration: '12 phút',
        title: 'Mẫu Adam-Adam Đỉnh (Adam and Adam Top)',
        description: 'Mẫu Adam-Adam Top có hai đỉnh đều nhọn và sắc. Cả hai đỉnh phản ứng nhanh, báo hiệu đảo chiều giảm.',
        svg: {
            path: 'M 30 160 L 80 120 L 100 60 L 120 120 L 160 100 L 180 55 L 200 100 L 250 140 L 350 180',
            labels: [
                { x: 100, y: 60, r: 6, color: '#f5576c', text: 'Adam 1', textY: 48 },
                { x: 180, y: 55, r: 6, color: '#f5576c', text: 'Adam 2', textY: 43 }
            ],
            neckline: { x1: 80, y1: 120, x2: 200, y2: 100 }
        },
        legend: [{ color: '#f5576c', text: 'Hai đỉnh nhọn (Adam-Adam)' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Hai đỉnh đều nhọn, sắc. Phản ứng nhanh cả hai lần.' },
            { title: 'Đặc điểm', desc: 'Hình thành nhanh hơn Eve. Biến động mạnh.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ neckline. Tỷ lệ thành công: 75%.' },
            { title: 'Mục tiêu giá', desc: 'Độ giảm = Chiều cao từ đỉnh đến neckline.' }
        ],
        stats: { successRate: '75%', avgChange: '-16%', timeForm: '2-3 tuần', pullback: '55%' }
    },
    {
        id: 'adam-adam-bottom',
        category: 'reversal',
        module: 'Module 2',
        duration: '12 phút',
        title: 'Mẫu Adam-Adam Đáy (Adam and Adam Bottom)',
        description: 'Mẫu Adam-Adam Bottom có hai đáy đều nhọn và sắc. Cả hai đáy phản ứng nhanh, báo hiệu đảo chiều tăng.',
        svg: {
            path: 'M 30 60 L 80 100 L 100 160 L 120 100 L 160 120 L 180 165 L 200 120 L 250 90 L 350 50',
            labels: [
                { x: 100, y: 160, r: 6, color: '#43e97b', text: 'Adam 1', textY: 175 },
                { x: 180, y: 165, r: 6, color: '#43e97b', text: 'Adam 2', textY: 180 }
            ],
            neckline: { x1: 80, y1: 100, x2: 200, y2: 120 }
        },
        legend: [{ color: '#43e97b', text: 'Hai đáy nhọn (Adam-Adam)' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Hai đáy đều nhọn, sắc. Phản ứng nhanh cả hai lần.' },
            { title: 'Đặc điểm', desc: 'Hình thành nhanh hơn Eve. Biến động mạnh.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ neckline. Tỷ lệ thành công: 77%.' },
            { title: 'Mục tiêu giá', desc: 'Độ tăng = Chiều cao từ neckline đến đáy.' }
        ],
        stats: { successRate: '77%', avgChange: '+17%', timeForm: '2-3 tuần', pullback: '52%' }
    },
    {
        id: 'eve-adam-top',
        category: 'reversal',
        module: 'Module 2',
        duration: '12 phút',
        title: 'Mẫu Eve-Adam Đỉnh (Eve and Adam Top)',
        description: 'Mẫu Eve-Adam Top có đỉnh trái tròn (Eve), đỉnh phải nhọn (Adam). Báo hiệu đảo chiều giảm.',
        svg: {
            path: 'M 30 160 Q 70 100, 110 100 Q 140 100, 140 60 L 160 120 L 200 100 L 250 140 L 350 180',
            labels: [
                { x: 90, y: 95, r: 6, color: '#667eea', text: 'Eve', textY: 82 },
                { x: 140, y: 60, r: 6, color: '#f5576c', text: 'Adam', textY: 48 }
            ],
            neckline: { x1: 70, y1: 100, x2: 200, y2: 100 }
        },
        legend: [
            { color: '#667eea', text: 'Eve (tròn)' },
            { color: '#f5576c', text: 'Adam (nhọn)' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Đỉnh trái tròn (Eve), đỉnh phải nhọn (Adam).' },
            { title: 'Đặc điểm', desc: 'Eve hình thành chậm, Adam phản ứng nhanh.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ neckline. Tỷ lệ thành công: 76%.' },
            { title: 'Mục tiêu giá', desc: 'Độ giảm = Chiều cao từ đỉnh đến neckline.' }
        ],
        stats: { successRate: '76%', avgChange: '-16%', timeForm: '2-4 tuần', pullback: '53%' }
    },
    {
        id: 'eve-adam-bottom',
        category: 'reversal',
        module: 'Module 2',
        duration: '12 phút',
        title: 'Mẫu Eve-Adam Đáy (Eve and Adam Bottom)',
        description: 'Mẫu Eve-Adam Bottom có đáy trái tròn (Eve), đáy phải nhọn (Adam). Báo hiệu đảo chiều tăng.',
        svg: {
            path: 'M 30 60 Q 70 120, 110 120 Q 140 120, 140 160 L 160 100 L 200 110 L 250 80 L 350 40',
            labels: [
                { x: 90, y: 125, r: 6, color: '#667eea', text: 'Eve', textY: 140 },
                { x: 140, y: 160, r: 6, color: '#43e97b', text: 'Adam', textY: 175 }
            ],
            neckline: { x1: 70, y1: 120, x2: 200, y2: 110 }
        },
        legend: [
            { color: '#667eea', text: 'Eve (tròn)' },
            { color: '#43e97b', text: 'Adam (nhọn)' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Đáy trái tròn (Eve), đáy phải nhọn (Adam).' },
            { title: 'Đặc điểm', desc: 'Eve tích lũy chậm, Adam phản ứng nhanh.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ neckline. Tỷ lệ thành công: 78%.' },
            { title: 'Mục tiêu giá', desc: 'Độ tăng = Chiều cao từ neckline đến đáy.' }
        ],
        stats: { successRate: '78%', avgChange: '+18%', timeForm: '2-4 tuần', pullback: '50%' }
    },
    {
        id: 'eve-eve-top',
        category: 'reversal',
        module: 'Module 2',
        duration: '12 phút',
        title: 'Mẫu Eve-Eve Đỉnh (Eve and Eve Top)',
        description: 'Mẫu Eve-Eve Top có hai đỉnh đều tròn. Cả hai đỉnh hình thành chậm, báo hiệu đảo chiều giảm.',
        svg: {
            path: 'M 30 160 Q 70 100, 100 80 Q 130 100, 130 100 Q 160 60, 190 80 Q 220 100, 250 140 L 350 180',
            labels: [
                { x: 100, y: 80, r: 6, color: '#667eea', text: 'Eve 1', textY: 68 },
                { x: 190, y: 75, r: 6, color: '#667eea', text: 'Eve 2', textY: 62 }
            ],
            neckline: { x1: 70, y1: 100, x2: 220, y2: 100 }
        },
        legend: [{ color: '#667eea', text: 'Hai đỉnh tròn (Eve-Eve)' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Hai đỉnh đều tròn. Tích lũy chậm cả hai lần.' },
            { title: 'Đặc điểm', desc: 'Hình thành lâu nhất trong các biến thể. Biến động nhỏ.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ neckline. Tỷ lệ thành công: 74%.' },
            { title: 'Mục tiêu giá', desc: 'Độ giảm = Chiều cao từ đỉnh đến neckline.' }
        ],
        stats: { successRate: '74%', avgChange: '-14%', timeForm: '3-5 tuần', pullback: '58%' }
    },
    {
        id: 'eve-eve-bottom',
        category: 'reversal',
        module: 'Module 2',
        duration: '12 phút',
        title: 'Mẫu Eve-Eve Đáy (Eve and Eve Bottom)',
        description: 'Mẫu Eve-Eve Bottom có hai đáy đều tròn. Cả hai đáy hình thành chậm, báo hiệu đảo chiều tăng.',
        svg: {
            path: 'M 30 60 Q 70 120, 100 140 Q 130 120, 130 120 Q 160 160, 190 140 Q 220 120, 250 90 L 350 50',
            labels: [
                { x: 100, y: 140, r: 6, color: '#43e97b', text: 'Eve 1', textY: 155 },
                { x: 190, y: 145, r: 6, color: '#43e97b', text: 'Eve 2', textY: 160 }
            ],
            neckline: { x1: 70, y1: 120, x2: 220, y2: 120 }
        },
        legend: [{ color: '#43e97b', text: 'Hai đáy tròn (Eve-Eve)' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Hai đáy đều tròn. Tích lũy chậm cả hai lần.' },
            { title: 'Đặc điểm', desc: 'Hình thành lâu nhất trong các biến thể. Biến động nhỏ.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ neckline. Tỷ lệ thành công: 76%.' },
            { title: 'Mục tiêu giá', desc: 'Độ tăng = Chiều cao từ neckline đến đáy.' }
        ],
        stats: { successRate: '76%', avgChange: '+16%', timeForm: '3-5 tuần', pullback: '55%' }
    },
    // ========== CONTINUATION PATTERNS ==========
    {
        id: 'cup-handle',
        category: 'continuation',
        module: 'Module 3',
        duration: '18 phút',
        title: 'Mẫu Cốc Tay Cầm (Cup and Handle)',
        description: 'Mẫu Cốc Tay Cầm là mẫu tiếp diễn tăng mạnh mẽ, có hình dạng giống chiếc cốc với tay cầm. Đây là một trong những mẫu tin cậy nhất.',
        svg: {
            path: 'M 30 80 Q 80 80, 100 120 Q 120 180, 180 180 Q 240 180, 260 120 Q 280 80, 320 90 Q 350 110, 380 100 L 420 60',
            labels: [
                { x: 180, y: 180, r: 8, color: '#43e97b', text: 'Đáy cốc', textY: 200 },
                { x: 100, y: 120, r: 6, color: '#667eea', text: 'Rim trái', textY: 105 },
                { x: 260, y: 120, r: 6, color: '#667eea', text: 'Rim phải', textY: 105 },
                { x: 350, y: 105, r: 5, color: '#4facfe', text: 'Tay cầm', textY: 90 }
            ]
        },
        legend: [
            { color: '#43e97b', text: 'Đáy cốc tròn' },
            { color: '#4facfe', text: 'Tay cầm (pullback)' },
            { color: '#667eea', text: 'Rim (đỉnh cốc)' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Cốc hình chữ U (không phải V), tay cầm là pullback nhẹ. Rim hai bên bằng nhau.' },
            { title: 'Tay cầm', desc: 'Pullback nhẹ (10-15% từ rim) hình thành trong 1-3 tuần. Không quá sâu.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ rim với khối lượng tăng mạnh. Tỷ lệ thành công: 88%.' },
            { title: 'Mục tiêu giá', desc: 'Độ tăng = Chiều cao từ rim đến đáy cốc. Thường tăng 25-30%.' }
        ],
        stats: { successRate: '88%', avgChange: '+25%', timeForm: '4-8 tuần', pullback: '40%' }
    },
    {
        id: 'ascending-triangle',
        category: 'continuation',
        module: 'Module 3',
        duration: '12 phút',
        title: 'Mẫu Tam Giác Tăng (Ascending Triangle)',
        description: 'Mẫu Tam Giác Tăng có đường biên trên ngang và đường biên dưới tăng dần. Báo hiệu tiếp diễn xu hướng tăng.',
        svg: {
            path: 'M 30 180 L 80 160 L 130 140 L 180 120 L 230 100 L 280 80 L 340 80',
            labels: [
                { x: 80, y: 160, r: 5, color: '#43e97b', text: 'Đáy 1', textY: 175 },
                { x: 180, y: 120, r: 5, color: '#43e97b', text: 'Đáy 2', textY: 135 },
                { x: 280, y: 80, r: 5, color: '#43e97b', text: 'Đáy 3', textY: 95 }
            ],
            trendlines: [
                { x1: 30, y1: 80, x2: 350, y2: 80, color: '#f5576c' },
                { x1: 30, y1: 180, x2: 350, y2: 80, color: '#43e97b' }
            ]
        },
        legend: [
            { color: '#f5576c', text: 'Đường kháng cự ngang' },
            { color: '#43e97b', text: 'Đường hỗ trợ tăng' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Đỉnh ngang (kháng cự), đáy tăng dần (hỗ trợ). Mua mạnh hơn bán.' },
            { title: 'Điểm vào', desc: 'Mua khi phá vỡ đường kháng cự trên với khối lượng lớn.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ với khối lượng cao. Tỷ lệ thành công: 75%.' },
            { title: 'Mục tiêu giá', desc: 'Độ tăng = Chiều cao tam giác tại điểm rộng nhất.' }
        ],
        stats: { successRate: '75%', avgChange: '+15%', timeForm: '2-4 tuần', pullback: '54%' }
    },
    {
        id: 'descending-triangle',
        category: 'continuation',
        module: 'Module 3',
        duration: '12 phút',
        title: 'Mẫu Tam Giác Giảm (Descending Triangle)',
        description: 'Mẫu Tam Giác Giảm có đường biên dưới ngang và đường biên trên giảm dần. Báo hiệu tiếp diễn xu hướng giảm.',
        svg: {
            path: 'M 30 80 L 80 100 L 130 120 L 180 140 L 230 160 L 280 180 L 340 180',
            labels: [
                { x: 80, y: 100, r: 5, color: '#f5576c', text: 'Đỉnh 1', textY: 85 },
                { x: 180, y: 140, r: 5, color: '#f5576c', text: 'Đỉnh 2', textY: 125 },
                { x: 280, y: 180, r: 5, color: '#f5576c', text: 'Đỉnh 3', textY: 165 }
            ],
            trendlines: [
                { x1: 30, y1: 180, x2: 350, y2: 180, color: '#43e97b' },
                { x1: 30, y1: 80, x2: 350, y2: 180, color: '#f5576c' }
            ]
        },
        legend: [
            { color: '#43e97b', text: 'Đường hỗ trợ ngang' },
            { color: '#f5576c', text: 'Đường kháng cự giảm' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Đáy ngang (hỗ trợ), đỉnh giảm dần (kháng cự). Bán mạnh hơn mua.' },
            { title: 'Điểm vào', desc: 'Bán khi phá vỡ đường hỗ trợ dưới với khối lượng lớn.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ với khối lượng cao. Tỷ lệ thành công: 73%.' },
            { title: 'Mục tiêu giá', desc: 'Độ giảm = Chiều cao tam giác tại điểm rộng nhất.' }
        ],
        stats: { successRate: '73%', avgChange: '-14%', timeForm: '2-4 tuần', pullback: '56%' }
    },
    {
        id: 'bull-flag',
        category: 'continuation',
        module: 'Module 3',
        duration: '10 phút',
        title: 'Mẫu Cờ Tăng (Bull Flag)',
        description: 'Mẫu Cờ Tăng xuất hiện sau một đợt tăng mạnh, giá đi ngang/tăng nhẹ trong kênh hẹp rồi tiếp tục tăng.',
        svg: {
            path: 'M 30 200 L 100 80 L 150 100 L 200 90 L 250 110 L 300 100 L 350 85 L 400 50',
            labels: [
                { x: 65, y: 140, r: 5, color: '#43e97b', text: 'Flagpole', textY: 155 },
                { x: 220, y: 100, r: 5, color: '#667eea', text: 'Flag', textY: 85 }
            ],
            trendlines: [
                { x1: 100, y1: 80, x2: 300, y2: 115, color: '#667eea' },
                { x1: 100, y1: 100, x2: 300, y2: 130, color: '#667eea' }
            ]
        },
        legend: [
            { color: '#43e97b', text: 'Flagpole (cột cờ)' },
            { color: '#667eea', text: 'Flag (cờ)' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Tăng mạnh (flagpole), sau đó đi ngang trong kênh hẹp (flag).' },
            { title: 'Flag', desc: 'Cờ là pullback nhẹ, giá đi ngang hoặc giảm nhẹ trong 1-3 tuần.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ đường trên của cờ với khối lượng. Tỷ lệ thành công: 80%.' },
            { title: 'Mục tiêu giá', desc: 'Độ tăng = Chiều dài flagpole.' }
        ],
        stats: { successRate: '80%', avgChange: '+20%', timeForm: '1-3 tuần', pullback: '45%' }
    },
    {
        id: 'bear-flag',
        category: 'continuation',
        module: 'Module 3',
        duration: '10 phút',
        title: 'Mẫu Cờ Giảm (Bear Flag)',
        description: 'Mẫu Cờ Giảm xuất hiện sau một đợt giảm mạnh, giá đi ngang/giảm nhẹ trong kênh hẹp rồi tiếp tục giảm.',
        svg: {
            path: 'M 30 60 L 100 180 L 150 160 L 200 175 L 250 155 L 300 170 L 350 150 L 400 200',
            labels: [
                { x: 65, y: 120, r: 5, color: '#f5576c', text: 'Flagpole', textY: 135 },
                { x: 220, y: 165, r: 5, color: '#667eea', text: 'Flag', textY: 150 }
            ],
            trendlines: [
                { x1: 100, y1: 180, x2: 300, y2: 145, color: '#667eea' },
                { x1: 100, y1: 160, x2: 300, y2: 125, color: '#667eea' }
            ]
        },
        legend: [
            { color: '#f5576c', text: 'Flagpole (cột cờ)' },
            { color: '#667eea', text: 'Flag (cờ)' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Giảm mạnh (flagpole), sau đó đi ngang trong kênh hẹp (flag).' },
            { title: 'Flag', desc: 'Cờ là pullback nhẹ, giá đi ngang hoặc tăng nhẹ trong 1-3 tuần.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ đường dưới của cờ với khối lượng. Tỷ lệ thành công: 78%.' },
            { title: 'Mục tiêu giá', desc: 'Độ giảm = Chiều dài flagpole.' }
        ],
        stats: { successRate: '78%', avgChange: '-18%', timeForm: '1-3 tuần', pullback: '48%' }
    },
    {
        id: 'pennant',
        category: 'continuation',
        module: 'Module 3',
        duration: '10 phút',
        title: 'Mẫu Cờ Đuôi Nhạn (Pennant)',
        description: 'Mẫu Pennant giống cờ nhưng có hình tam giác đối xứng nhỏ. Xuất hiện sau biến động mạnh và tiếp tục xu hướng.',
        svg: {
            path: 'M 30 180 L 100 60 L 150 90 L 200 70 L 250 85 L 300 75 L 350 50',
            labels: [
                { x: 65, y: 120, r: 5, color: '#43e97b', text: 'Flagpole', textY: 135 },
                { x: 200, y: 75, r: 5, color: '#667eea', text: 'Pennant', textY: 60 }
            ],
            trendlines: [
                { x1: 100, y1: 60, x2: 280, y2: 85, color: '#667eea' },
                { x1: 100, y1: 95, x2: 280, y2: 70, color: '#667eea' }
            ]
        },
        legend: [
            { color: '#43e97b', text: 'Flagpole' },
            { color: '#667eea', text: 'Pennant (tam giác nhỏ)' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Biến động mạnh (flagpole), sau đó hội tụ trong tam giác nhỏ.' },
            { title: 'Pennant', desc: 'Tam giác nhỏ, hội tụ nhanh trong vài ngày đến 2 tuần.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ theo hướng xu hướng ban đầu. Tỷ lệ thành công: 76%.' },
            { title: 'Mục tiêu giá', desc: 'Độ thay đổi = Chiều dài flagpole.' }
        ],
        stats: { successRate: '76%', avgChange: '+/-18%', timeForm: '1-2 tuần', pullback: '42%' }
    },
    {
        id: 'rectangle-top',
        category: 'continuation',
        module: 'Module 3',
        duration: '12 phút',
        title: 'Mẫu Hình Chữ Nhật Đỉnh (Rectangle Top)',
        description: 'Mẫu Rectangle Top là vùng tích lũy hình chữ nhật sau xu hướng tăng, thường tiếp tục tăng sau phá vỡ.',
        svg: {
            path: 'M 30 60 L 80 100 L 130 80 L 180 110 L 230 85 L 280 105 L 330 90 L 380 70',
            labels: [
                { x: 200, y: 70, r: 5, color: '#667eea', text: 'Upper', textY: 58 },
                { x: 200, y: 115, r: 5, color: '#f5576c', text: 'Lower', textY: 130 }
            ],
            trendlines: [
                { x1: 30, y1: 60, x2: 380, y2: 70, color: '#667eea' },
                { x1: 30, y1: 120, x2: 380, y2: 110, color: '#f5576c' }
            ]
        },
        legend: [
            { color: '#667eea', text: 'Đường kháng cự' },
            { color: '#f5576c', text: 'Đường hỗ trợ' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Giá dao động giữa hai đường ngang song song sau xu hướng tăng.' },
            { title: 'Đặc điểm', desc: 'Tích lũy, volume giảm dần trong mẫu.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ đường trên với khối lượng. Tỷ lệ thành công: 72%.' },
            { title: 'Mục tiêu giá', desc: 'Độ tăng = Chiều cao hình chữ nhật.' }
        ],
        stats: { successRate: '72%', avgChange: '+15%', timeForm: '2-4 tuần', pullback: '48%' }
    },
    {
        id: 'rectangle-bottom',
        category: 'continuation',
        module: 'Module 3',
        duration: '12 phút',
        title: 'Mẫu Hình Chữ Nhật Đáy (Rectangle Bottom)',
        description: 'Mẫu Rectangle Bottom là vùng tích lũy hình chữ nhật sau xu hướng giảm, thường tiếp tục giảm sau phá vỡ.',
        svg: {
            path: 'M 30 160 L 80 120 L 130 140 L 180 115 L 230 135 L 280 120 L 330 130 L 380 150',
            labels: [
                { x: 200, y: 110, r: 5, color: '#667eea', text: 'Upper', textY: 98 },
                { x: 200, y: 145, r: 5, color: '#f5576c', text: 'Lower', textY: 160 }
            ],
            trendlines: [
                { x1: 30, y1: 100, x2: 380, y2: 110, color: '#667eea' },
                { x1: 30, y1: 160, x2: 380, y2: 150, color: '#f5576c' }
            ]
        },
        legend: [
            { color: '#667eea', text: 'Đường kháng cự' },
            { color: '#f5576c', text: 'Đường hỗ trợ' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Giá dao động giữa hai đường ngang song song sau xu hướng giảm.' },
            { title: 'Đặc điểm', desc: 'Tích lũy, volume giảm dần trong mẫu.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ đường dưới với khối lượng. Tỷ lệ thành công: 70%.' },
            { title: 'Mục tiêu giá', desc: 'Độ giảm = Chiều cao hình chữ nhật.' }
        ],
        stats: { successRate: '70%', avgChange: '-12%', timeForm: '2-4 tuần', pullback: '52%' }
    },
    {
        id: 'scallop-ascending',
        category: 'continuation',
        module: 'Module 3',
        duration: '14 phút',
        title: 'Mẫu Vảy Sò Tăng (Scallop Ascending)',
        description: 'Mẫu Scallop Ascending có hình vảy sò với đáy sau cao hơn đáy trước. Tiếp tục xu hướng tăng.',
        svg: {
            path: 'M 30 150 Q 80 80, 130 120 Q 150 140, 180 100 Q 210 140, 260 90 Q 290 130, 340 80 L 400 60',
            labels: [
                { x: 80, y: 90, r: 5, color: '#43e97b', text: 'Vảy 1', textY: 78 },
                { x: 210, y: 100, r: 5, color: '#43e97b', text: 'Vảy 2', textY: 88 },
                { x: 330, y: 85, r: 5, color: '#43e97b', text: 'Vảy 3', textY: 72 }
            ]
        },
        legend: [{ color: '#43e97b', text: 'Vảy sò tăng dần' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Nhiều vảy sò nối tiếp, mỗi vảy có đáy cao hơn vảy trước.' },
            { title: 'Đặc điểm', desc: 'Tiếp tục xu hướng tăng. Volume thường giảm trong mẫu.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ đỉnh gần nhất. Tỷ lệ thành công: 68%.' },
            { title: 'Giao dịch', desc: 'Mua khi phá vỡ đỉnh. StopLoss dưới đáy gần nhất.' }
        ],
        stats: { successRate: '68%', avgChange: '+18%', timeForm: '3-6 tuần', pullback: '55%' }
    },
    {
        id: 'scallop-descending',
        category: 'continuation',
        module: 'Module 3',
        duration: '14 phút',
        title: 'Mẫu Vảy Sò Giảm (Scallop Descending)',
        description: 'Mẫu Scallop Descending có hình vảy sò ngược với đỉnh sau thấp hơn đỉnh trước. Tiếp tục giảm.',
        svg: {
            path: 'M 30 60 Q 80 130, 130 90 Q 160 70, 190 110 Q 220 80, 270 120 Q 300 100, 350 130 L 400 160',
            labels: [
                { x: 80, y: 120, r: 5, color: '#f5576c', text: 'Vảy 1', textY: 135 },
                { x: 220, y: 110, r: 5, color: '#f5576c', text: 'Vảy 2', textY: 125 },
                { x: 330, y: 125, r: 5, color: '#f5576c', text: 'Vảy 3', textY: 140 }
            ]
        },
        legend: [{ color: '#f5576c', text: 'Vảy sò giảm dần' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Nhiều vảy sò ngược nối tiếp, mỗi vảy có đỉnh thấp hơn.' },
            { title: 'Đặc điểm', desc: 'Tiếp tục xu hướng giảm. Volume thường giảm trong mẫu.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ đáy gần nhất. Tỷ lệ thành công: 65%.' },
            { title: 'Giao dịch', desc: 'Bán khi phá vỡ đáy. StopLoss trên đỉnh gần nhất.' }
        ],
        stats: { successRate: '65%', avgChange: '-15%', timeForm: '3-6 tuần', pullback: '58%' }
    },
    {
        id: 'cup-high-handle',
        category: 'continuation',
        module: 'Module 3',
        duration: '16 phút',
        title: 'Mẫu Cốc Tay Cầm Cao (Cup with High Handle)',
        description: 'Mẫu Cup with High Handle có tay cầm nằm cao hơn rim của cốc. Dạng hiếm nhưng tin cậy.',
        svg: {
            path: 'M 30 100 Q 80 100, 110 140 Q 140 180, 200 180 Q 260 180, 290 140 Q 320 100, 350 100 L 350 80 Q 380 95, 420 80 L 460 50',
            labels: [
                { x: 200, y: 180, r: 8, color: '#43e97b', text: 'Đáy cốc', textY: 198 },
                { x: 110, y: 130, r: 5, color: '#667eea', text: 'Rim', textY: 118 },
                { x: 385, y: 70, r: 5, color: '#4facfe', text: 'Handle cao', textY: 58 }
            ]
        },
        legend: [
            { color: '#43e97b', text: 'Đáy cốc' },
            { color: '#4facfe', text: 'Tay cầm cao' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Cốc hình chữ U, tay cầm nằm CAO hơn rim của cốc.' },
            { title: 'Đặc điểm', desc: 'Dạng hiếm. Cho thấy sức mua rất mạnh.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ tay cầm. Tỷ lệ thành công: 82%.' },
            { title: 'Mục tiêu giá', desc: 'Độ tăng = 1.5x chiều cao cốc.' }
        ],
        stats: { successRate: '82%', avgChange: '+28%', timeForm: '4-8 tuần', pullback: '35%' }
    },
    {
        id: 'cup-low-handle',
        category: 'continuation',
        module: 'Module 3',
        duration: '16 phút',
        title: 'Mẫu Cốc Tay Cầm Thấp (Cup with Low Handle)',
        description: 'Mẫu Cup with Low Handle có tay cầm nằm thấp hơn rim, là dạng phổ biến hơn của cup and handle.',
        svg: {
            path: 'M 30 100 Q 80 100, 110 140 Q 140 180, 200 180 Q 260 180, 290 140 Q 320 100, 350 100 L 350 120 Q 390 145, 420 130 L 460 60',
            labels: [
                { x: 200, y: 180, r: 8, color: '#43e97b', text: 'Đáy cốc', textY: 198 },
                { x: 110, y: 130, r: 5, color: '#667eea', text: 'Rim', textY: 118 },
                { x: 385, y: 135, r: 5, color: '#f5576c', text: 'Handle thấp', textY: 150 }
            ]
        },
        legend: [
            { color: '#43e97b', text: 'Đáy cốc' },
            { color: '#f5576c', text: 'Tay cầm thấp' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Cốc hình chữ U, tay cầm nằm THẤP hơn rim (pullback).' },
            { title: 'Đặc điểm', desc: 'Dạng phổ biến. Pullback nhẹ trước khi tăng tiếp.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ đường kháng cự. Tỷ lệ thành công: 78%.' },
            { title: 'Mục tiêu giá', desc: 'Độ tăng = Chiều cao cốc.' }
        ],
        stats: { successRate: '78%', avgChange: '+22%', timeForm: '4-8 tuần', pullback: '45%' }
    },
    {
        id: 'lazy-s',
        category: 'continuation',
        module: 'Module 3',
        duration: '12 phút',
        title: 'Mẫu Chữ S Lười (Lazy S)',
        description: 'Mẫu Lazy S có hình dạng chữ S nằm ngang, biến động nhỏ và tiếp tục xu hướng ban đầu.',
        svg: {
            path: 'M 30 80 Q 80 60, 130 90 Q 180 120, 230 85 Q 280 50, 330 80 Q 380 110, 420 90',
            labels: [
                { x: 100, y: 70, r: 4, color: '#667eea', text: 'S', textY: 58 },
                { x: 280, y: 70, r: 4, color: '#667eea', text: 'l', textY: 58 }
            ]
        },
        legend: [{ color: '#667eea', text: 'Hình chữ S nhẹ' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Biến động nhẹ hình chữ S nằm ngang.' },
            { title: 'Đặc điểm', desc: 'Không có breakout rõ ràng. Tiếp tục xu hướng chậm.' },
            { title: 'Xác nhận mẫu', desc: 'Giá tiếp tục xu hướng ban đầu. Tỷ lệ thành công: 58%.' },
            { title: 'Giao dịch', desc: 'Íu tin cậy, cần kết hợp indicators khác.' }
        ],
        stats: { successRate: '58%', avgChange: '+/-8%', timeForm: '2-4 tuần', pullback: '70%' }
    },
    {
        id: 'high-tight-flag',
        category: 'continuation',
        module: 'Module 3',
        duration: '14 phút',
        title: 'Mẫu Cờ Cao Siêu (High and Tight Flag)',
        description: 'Mẫu High-Tight Flag tăng 90%+ trong 2 tháng, sau đó đi ngang hẹp. Tiếp tục tăng mạnh sau đó.',
        svg: {
            path: 'M 30 200 L 80 160 L 130 120 L 180 80 L 220 50 L 250 55 L 280 48 L 320 52 L 360 50 L 400 30',
            labels: [
                { x: 130, y: 120, r: 5, color: '#43e97b', text: '+90%', textY: 135 },
                { x: 290, y: 40, r: 6, color: '#667eea', text: 'Flag', textY: 28 }
            ],
            trendlines: [
                { x1: 220, y1: 45, x2: 360, y2: 48, color: '#667eea' },
                { x1: 220, y1: 58, x2: 360, y2: 55, color: '#667eea' }
            ]
        },
        legend: [
            { color: '#43e97b', text: 'Tăng 90%+' },
            { color: '#667eea', text: 'Cờ hẹp' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Tăng ít nhất 90% trong 2 tháng, sau đó đi ngang hẹp 3-5 tuần.' },
            { title: 'Đặc điểm', desc: 'Rất hiếm nhưng cực kỳ tin cậy. Flag hẹp và ngắn.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ lên từ flag. Tỷ lệ thành công: 90%.' },
            { title: 'Mục tiêu giá', desc: 'Độ tăng = 50-100% từ điểm phá vỡ.' }
        ],
        stats: { successRate: '90%', avgChange: '+50%', timeForm: '6-10 tuần', pullback: '25%' }
    },
    {
        id: 'flag',
        category: 'continuation',
        module: 'Module 3',
        duration: '10 phút',
        title: 'Mẫu Cờ Tổng Quát (Flag)',
        description: 'Mẫu Cờ là mẫu tiếp diễn phổ biến, có cột cờ (flagpole) và phần cờ (flag) đi ngang/hắt nhẹ. Có thể tăng hoặc giảm.',
        svg: {
            path: 'M 30 180 L 100 60 L 150 80 L 200 65 L 250 85 L 300 70 L 350 40',
            labels: [
                { x: 65, y: 120, r: 5, color: '#43e97b', text: 'Flagpole', textY: 135 },
                { x: 220, y: 68, r: 5, color: '#667eea', text: 'Flag', textY: 55 }
            ],
            trendlines: [
                { x1: 100, y1: 60, x2: 300, y2: 80, color: '#667eea' },
                { x1: 100, y1: 85, x2: 300, y2: 60, color: '#667eea' }
            ]
        },
        legend: [
            { color: '#43e97b', text: 'Flagpole (cột cờ)' },
            { color: '#667eea', text: 'Flag (cờ)' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Biến động mạnh (flagpole), sau đó đi ngang trong kênh hẹp (flag).' },
            { title: 'Đặc điểm', desc: 'Flag ngắn (1-3 tuần), volume giảm trong flag.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ theo hướng xu hướng ban đầu. Tỷ lệ thành công: 75%.' },
            { title: 'Mục tiêu giá', desc: 'Độ thay đổi = Chiều dài flagpole.' }
        ],
        stats: { successRate: '75%', avgChange: '+/-18%', timeForm: '1-3 tuần', pullback: '45%' }
    },
    {
        id: 'inverted-scallop',
        category: 'continuation',
        module: 'Module 3',
        duration: '14 phút',
        title: 'Mẫu Vảy Sò Ngược (Inverted Scallop)',
        description: 'Mẫu Inverted Scallop có hình vòm ngược úp xuống, thường xuất hiện sau xu hướng tăng và tiếp tục tăng.',
        svg: {
            path: 'M 30 120 L 80 100 Q 160 40, 240 100 L 300 80 L 380 50',
            labels: [
                { x: 160, y: 50, r: 6, color: '#f5576c', text: 'Đỉnh vòm', textY: 38 },
                { x: 280, y: 75, r: 5, color: '#43e97b', text: 'Tiếp tục', textY: 62 }
            ]
        },
        legend: [
            { color: '#f5576c', text: 'Vòm ngược' },
            { color: '#43e97b', text: 'Tiếp tục xu hướng' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Vòm ngược (inverted cup), đỉnh vòm nằm dưới. Sau đó tăng tiếp.' },
            { title: 'Đặc điểm', desc: 'Ít phổ biến hơn cup and handle. Có thể hiểu là pullback.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ đỉnh vòm. Tỷ lệ thành công: 62%.' },
            { title: 'Giao dịch', desc: 'Mua khi giá vượt qua đỉnh vòm. StopLoss dưới đáy.' }
        ],
        stats: { successRate: '62%', avgChange: '+14%', timeForm: '3-5 tuần', pullback: '58%' }
    },
    // ========== BILATERAL PATTERNS ==========
    {
        id: 'symmetrical-triangle',
        category: 'bilateral',
        module: 'Module 4',
        duration: '14 phút',
        title: 'Mẫu Tam Giác Đối Xứng (Symmetrical Triangle)',
        description: 'Mẫu Tam Giác Đối Xứng có hai đường biên hội tụ. Có thể phá vỡ theo cả hai hướng, cần đợi xác nhận.',
        svg: {
            path: 'M 30 80 L 80 120 L 130 100 L 180 130 L 230 115 L 280 140 L 330 125 L 380 150',
            labels: [
                { x: 100, y: 110, r: 4, color: '#a18cd1', text: '', textY: 95 },
                { x: 250, y: 125, r: 4, color: '#a18cd1', text: '', textY: 110 }
            ],
            trendlines: [
                { x1: 30, y1: 80, x2: 400, y2: 160, color: '#a18cd1' },
                { x1: 30, y1: 160, x2: 400, y2: 120, color: '#a18cd1' }
            ]
        },
        legend: [
            { color: '#a18cd1', text: 'Hai đường biên hội tụ' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Đỉnh thấp dần, đáy cao dần, hai đường biên hội tụ thành điểm.' },
            { title: 'Tính chất', desc: 'Mẫu hai chiều - có thể phá vỡ tăng hoặc giảm. Không dự đoán trước.' },
            { title: 'Xác nhận mẫu', desc: 'Đợi phá vỡ một trong hai đường biên. Tỷ lệ thành công: 64%.' },
            { title: 'Mục tiêu giá', desc: 'Độ thay đổi = Chiều cao tam giác tại điểm rộng nhất.' }
        ],
        stats: { successRate: '64%', avgChange: '+/-12%', timeForm: '2-4 tuần', pullback: '58%' }
    },
    {
        id: 'broadening-top',
        category: 'bilateral',
        module: 'Module 4',
        duration: '12 phút',
        title: 'Mẫu Mở Rộng Đỉnh (Broadening Top)',
        description: 'Mẫu Mở Rộng Đỉnh có hai đường biên phân kỳ, đỉnh cao dần và đáy thấp dần. Thường báo hiệu đảo chiều.',
        svg: {
            path: 'M 30 120 L 80 80 L 130 140 L 180 60 L 230 160 L 280 40 L 330 180 L 380 30',
            labels: [
                { x: 100, y: 110, r: 4, color: '#f5576c', text: '', textY: 125 },
                { x: 250, y: 100, r: 4, color: '#f5576c', text: '', textY: 115 }
            ],
            trendlines: [
                { x1: 30, y1: 120, x2: 400, y2: 30, color: '#f5576c' },
                { x1: 30, y1: 120, x2: 400, y2: 180, color: '#f5576c' }
            ]
        },
        legend: [
            { color: '#f5576c', text: 'Hai đường biên phân kỳ' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Đỉnh cao dần, đáy thấp dần. Hai đường biên mở rộng ra.' },
            { title: 'Tính chất', desc: 'Biến động tăng dần, thị trường không xác định. Thường ở đỉnh.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ đường biên dưới. Tỷ lệ thành công khi giảm: 60%.' },
            { title: 'Mục tiêu giá', desc: 'Độ giảm = Chiều cao mẫu tại điểm phá vỡ.' }
        ],
        stats: { successRate: '60%', avgChange: '-15%', timeForm: '2-4 tuần', pullback: '65%' }
    },
    {
        id: 'broadening-bottom',
        category: 'bilateral',
        module: 'Module 4',
        duration: '12 phút',
        title: 'Mẫu Mở Rộng Đáy (Broadening Bottom)',
        description: 'Mẫu Mở Rộng Đáy có hai đường biên phân kỳ ở đáy, thường báo hiệu đảo chiều tăng nhưng cũng có thể giảm.',
        svg: {
            path: 'M 30 60 L 80 100 L 130 80 L 180 120 L 230 90 L 280 140 L 330 100 L 380 160',
            labels: [
                { x: 100, y: 90, r: 4, color: '#43e97b', text: '', textY: 105 },
                { x: 250, y: 115, r: 4, color: '#43e97b', text: '', textY: 130 }
            ],
            trendlines: [
                { x1: 30, y1: 50, x2: 400, y2: 100, color: '#43e97b' },
                { x1: 30, y1: 70, x2: 400, y2: 170, color: '#43e97b' }
            ]
        },
        legend: [{ color: '#43e97b', text: 'Hai đường biên phân kỳ' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Đỉnh cao dần, đáy thấp dần. Hai đường biên mở rộng ra.' },
            { title: 'Tính chất', desc: 'Biến động tăng dần, xuất hiện ở đáy xu hướng giảm.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ đường biên trên. Tỷ lệ thành công khi tăng: 55%.' },
            { title: 'Mục tiêu giá', desc: 'Độ tăng = Chiều cao mẫu tại điểm phá vỡ.' }
        ],
        stats: { successRate: '55%', avgChange: '+14%', timeForm: '2-4 tuần', pullback: '68%' }
    },
    {
        id: 'broadening-wedge-ascending',
        category: 'bilateral',
        module: 'Module 4',
        duration: '14 phút',
        title: 'Mẫu Nêm Mở Rộng Tăng (Broadening Wedge Ascending)',
        description: 'Mẫu Nêm Mở Rộng Tăng có hai đường biên dâng lên nhưng mở rộng ra. Thường báo hiệu tiếp tục tăng.',
        svg: {
            path: 'M 30 160 L 80 130 L 130 140 L 180 100 L 230 115 L 280 70 L 330 85 L 380 50',
            labels: [
                { x: 100, y: 135, r: 4, color: '#43e97b', text: '', textY: 150 },
                { x: 250, y: 95, r: 4, color: '#43e97b', text: '', textY: 80 }
            ],
            trendlines: [
                { x1: 30, y1: 160, x2: 400, y2: 50, color: '#43e97b' },
                { x1: 30, y1: 130, x2: 400, y2: 40, color: '#43e97b' }
            ]
        },
        legend: [{ color: '#43e97b', text: 'Hai đường dâng lên, mở rộng' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Cả hai đường biên đều dâng lên, nhưng mở rộng ra.' },
            { title: 'Tính chất', desc: 'Biến động tăng, thường tiếp tục xu hướng tăng.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ đường trên. Tỷ lệ thành công khi tăng: 62%.' },
            { title: 'Mục tiêu giá', desc: 'Độ tăng = Chiều cao mẫu tại điểm phá vỡ.' }
        ],
        stats: { successRate: '62%', avgChange: '+16%', timeForm: '3-5 tuần', pullback: '58%' }
    },
    {
        id: 'broadening-wedge-descending',
        category: 'bilateral',
        module: 'Module 4',
        duration: '14 phút',
        title: 'Mẫu Nêm Mở Rộng Giảm (Broadening Wedge Descending)',
        description: 'Mẫu Nêm Mở Rộng Giảm có hai đường biên hạ xuống và mở rộng ra. Thường báo hiệu tiếp tục giảm.',
        svg: {
            path: 'M 30 50 L 80 80 L 130 70 L 180 100 L 230 90 L 280 130 L 330 120 L 380 160',
            labels: [
                { x: 100, y: 65, r: 4, color: '#f5576c', text: '', textY: 52 },
                { x: 250, y: 105, r: 4, color: '#f5576c', text: '', textY: 120 }
            ],
            trendlines: [
                { x1: 30, y1: 40, x2: 400, y2: 150, color: '#f5576c' },
                { x1: 30, y1: 60, x2: 400, y2: 180, color: '#f5576c' }
            ]
        },
        legend: [{ color: '#f5576c', text: 'Hai đường hạ xuống, mở rộng' }],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Cả hai đường biên đều hạ xuống và mở rộng ra.' },
            { title: 'Tính chất', desc: 'Biến động tăng, thường tiếp tục xu hướng giảm.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ đường dưới. Tỷ lệ thành công khi giảm: 58%.' },
            { title: 'Mục tiêu giá', desc: 'Độ giảm = Chiều cao mẫu tại điểm phá vỡ.' }
        ],
        stats: { successRate: '58%', avgChange: '-14%', timeForm: '3-5 tuần', pullback: '62%' }
    },
    {
        id: 'right-angled-broadening-ascending',
        category: 'bilateral',
        module: 'Module 4',
        duration: '14 phút',
        title: 'Mẫu Mở Rộng Vuông Tăng (Right-Angled Broadening Ascending)',
        description: 'Mẫu có đường đáy ngang và đường đỉnh dâng lên. Hai chiều, cần xác nhận phá vỡ.',
        svg: {
            path: 'M 30 140 L 80 140 L 130 110 L 180 140 L 230 80 L 280 140 L 330 60 L 380 140',
            labels: [
                { x: 200, y: 145, r: 5, color: '#667eea', text: 'Đáy ngang', textY: 160 },
                { x: 300, y: 60, r: 5, color: '#f5576c', text: 'Đỉnh dâng', textY: 48 }
            ],
            trendlines: [
                { x1: 30, y1: 140, x2: 400, y2: 140, color: '#667eea' },
                { x1: 30, y1: 140, x2: 400, y2: 40, color: '#f5576c' }
            ]
        },
        legend: [
            { color: '#667eea', text: 'Đáy ngang' },
            { color: '#f5576c', text: 'Đỉnh dâng lên' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Đường đáy nằm ngang, đường đỉnh dâng lên (mở rộng).' },
            { title: 'Tính chất', desc: 'Mẫu hai chiều. Phá vỡ lên thường tăng, phá vỡ xuống thường giảm.' },
            { title: 'Xác nhận mẫu', desc: 'Đợi phá vỡ một trong hai đường. Tỷ lệ thành công: 52%.' },
            { title: 'Giao dịch', desc: 'Vào lệnh theo hướng phá vỡ. StopLoss ngược hướng.' }
        ],
        stats: { successRate: '52%', avgChange: '+/-12%', timeForm: '2-4 tuần', pullback: '70%' }
    },
    {
        id: 'right-angled-broadening-descending',
        category: 'bilateral',
        module: 'Module 4',
        duration: '14 phút',
        title: 'Mẫu Mở Rộng Vuông Giảm (Right-Angled Broadening Descending)',
        description: 'Mẫu có đường đỉnh ngang và đường đáy hạ xuống. Hai chiều, cần xác nhận phá vỡ.',
        svg: {
            path: 'M 30 60 L 80 60 L 130 90 L 180 60 L 230 120 L 280 60 L 330 140 L 380 60',
            labels: [
                { x: 200, y: 55, r: 5, color: '#667eea', text: 'Đỉnh ngang', textY: 42 },
                { x: 300, y: 140, r: 5, color: '#f5576c', text: 'Đáy hạ', textY: 155 }
            ],
            trendlines: [
                { x1: 30, y1: 60, x2: 400, y2: 60, color: '#667eea' },
                { x1: 30, y1: 60, x2: 400, y2: 160, color: '#f5576c' }
            ]
        },
        legend: [
            { color: '#667eea', text: 'Đỉnh ngang' },
            { color: '#f5576c', text: 'Đáy hạ xuống' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Đường đỉnh nằm ngang, đường đáy hạ xuống (mở rộng).' },
            { title: 'Tính chất', desc: 'Mẫu hai chiều. Thường phá vỡ giảm hơn tăng.' },
            { title: 'Xác nhận mẫu', desc: 'Đợi phá vỡ một trong hai đường. Tỷ lệ thành công: 55%.' },
            { title: 'Giao dịch', desc: 'Vào lệnh theo hướng phá vỡ. StopLoss ngược hướng.' }
        ],
        stats: { successRate: '55%', avgChange: '-13%', timeForm: '2-4 tuần', pullback: '68%' }
    },
    {
        id: 'complex-head-shoulders',
        category: 'bilateral',
        module: 'Module 4',
        duration: '16 phút',
        title: 'Mẫu Đầu Vai Phức Tạp (Complex Head and Shoulders)',
        description: 'Mẫu Complex H&S có nhiều đỉnh phụ trên vai hoặc đầu. Có thể phá vỡ hai chiều.',
        svg: {
            path: 'M 30 140 L 60 100 L 90 120 L 120 90 L 150 110 L 180 60 L 220 110 L 260 90 L 300 115 L 340 95 L 380 140',
            labels: [
                { x: 60, y: 100, r: 4, color: '#a18cd1', text: 'Vai T', textY: 88 },
                { x: 120, y: 90, r: 4, color: '#a18cd1', text: 'Vai T2', textY: 78 },
                { x: 180, y: 60, r: 6, color: '#f5576c', text: 'Đầu', textY: 48 },
                { x: 260, y: 90, r: 4, color: '#a18cd1', text: 'Vai P', textY: 78 },
                { x: 340, y: 95, r: 4, color: '#a18cd1', text: 'Vai P2', textY: 83 }
            ],
            neckline: { x1: 60, y1: 120, x2: 340, y2: 115 }
        },
        legend: [
            { color: '#f5576c', text: 'Đầu chính' },
            { color: '#a18cd1', text: 'Nhiều vai phụ' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Đầu giữa, nhiều đỉnh phụ trên mỗi vai. Neckline không đều.' },
            { title: 'Tính chất', desc: 'Mẫu phức tạp, khó xác định. Có thể hai chiều.' },
            { title: 'Xác nhận mẫu', desc: 'Phá vỡ neckline với khối lượng. Tỷ lệ thành công: 65%.' },
            { title: 'Giao dịch', desc: 'Cần thận trọng. Đợi xác nhận rõ ràng trước vào lệnh.' }
        ],
        stats: { successRate: '65%', avgChange: '+/-15%', timeForm: '4-8 tuần', pullback: '55%' }
    },
    // ========== GAP PATTERNS (4 patterns) ==========
    {
        id: 'breakaway-gap',
        category: 'gap',
        module: 'Module 5',
        duration: '10 phút',
        title: 'Gap Phá Vỡ (Breakaway Gap)',
        description: 'Gap Phá Vỡ xuất hiện khi giá thoát khỏi vùng cô lập (consolidation) và bắt đầu xu hướng mới.',
        svg: {
            path: 'M 30 180 L 80 180 L 80 120 L 150 120 L 200 80 L 280 50 L 350 30',
            labels: [
                { x: 55, y: 150, r: 5, color: '#667eea', text: 'Cô lập', textY: 170 },
                { x: 115, y: 100, r: 6, color: '#43e97b', text: 'GAP', textY: 95 },
                { x: 250, y: 55, r: 4, color: '#43e97b', text: 'Xu hướng mới', textY: 40 }
            ],
            gapArea: { x: 80, y: 120, w: 70, h: 60 }
        },
        legend: [
            { color: '#667eea', text: 'Vùng cô lập' },
            { color: '#43e97b', text: 'Gap & Xu hướng mới' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Khoảng trống giá khi thoát khỏi vùng tích lũy. Bắt đầu xu hướng mới.' },
            { title: 'Đặc điểm', desc: 'Khối lượng cao khi gap. Không được lấp đầy trong ngắn hạn.' },
            { title: 'Xác nhận', desc: 'Gap kèm khối lượng lớn, giá tiếp tục theo hướng gap.' },
            { title: 'Giao dịch', desc: 'Mua theo hướng gap sau khi xác nhận. Đặt stop dưới gap.' }
        ],
        stats: { successRate: '70%', avgChange: '+/-20%', timeForm: '1 ngày', pullback: '35%' }
    },
    {
        id: 'runaway-gap',
        category: 'gap',
        module: 'Module 5',
        duration: '10 phút',
        title: 'Gap Chạy (Runaway Gap)',
        description: 'Gap Chạy xuất hiện giữa xu hướng mạnh, xác nhận động lực và đánh dấu điểm 50% của xu hướng.',
        svg: {
            path: 'M 30 200 L 60 150 L 90 170 L 120 100 L 120 60 L 160 60 L 200 40 L 260 30 L 300 50 L 340 30',
            labels: [
                { x: 75, y: 160, r: 4, color: '#43e97b', text: '', textY: 175 },
                { x: 140, y: 50, r: 6, color: '#667eea', text: 'GAP 1', textY: 40 },
                { x: 280, y: 35, r: 6, color: '#667eea', text: 'GAP 2', textY: 22 }
            ],
            gapAreas: [
                { x: 120, y: 60, w: 40, h: 40 },
                { x: 260, y: 30, w: 40, h: 20 }
            ]
        },
        legend: [
            { color: '#43e97b', text: 'Xu hướng tăng' },
            { color: '#667eea', text: 'Runaway Gaps' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Xuất hiện giữa xu hướng mạnh, không ở đầu hoặc cuối.' },
            { title: 'Ý nghĩa', desc: 'Đánh dấu điểm giữa (50%) của xu hướng. Xác nhận động lực mạnh.' },
            { title: 'Xác nhận', desc: 'Khối lượng trung bình, gap không được lấp ngay.' },
            { title: 'Giao dịch', desc: 'Tiếp tục theo xu hướng. Mục tiêu = khoảng cách đã đi × 2.' }
        ],
        stats: { successRate: '75%', avgChange: '+/-25%', timeForm: '1 ngày', pullback: '40%' }
    },
    {
        id: 'exhaustion-gap',
        category: 'gap',
        module: 'Module 5',
        duration: '10 phút',
        title: 'Gap Kiệt Sức (Exhaustion Gap)',
        description: 'Gap Kiệt Sức xuất hiện cuối xu hướng, báo hiệu động lực cạn kiệt và đảo chiều sắp xảy ra.',
        svg: {
            path: 'M 30 200 L 80 150 L 130 100 L 180 60 L 220 60 L 260 30 L 300 30 L 350 80 L 400 130 L 450 180',
            labels: [
                { x: 150, y: 80, r: 4, color: '#43e97b', text: 'Tăng', textY: 95 },
                { x: 240, y: 35, r: 6, color: '#f5576c', text: 'GAP!', textY: 22 },
                { x: 380, y: 110, r: 4, color: '#f5576c', text: 'Đảo chiều', textY: 125 }
            ],
            gapArea: { x: 220, y: 30, w: 40, h: 30 }
        },
        legend: [
            { color: '#43e97b', text: 'Xu hướng tăng' },
            { color: '#f5576c', text: 'Exhaustion Gap' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Xuất hiện cuối xu hướng mạnh, sau khi đã tăng/giảm nhiều.' },
            { title: 'Đặc điểm', desc: 'Gap lên nhưng giá không đi được xa, đảo chiều nhanh.' },
            { title: 'Xác nhận', desc: 'Gap được lấp đầy trong 1-2 ngày. Đảo chiều sau đó.' },
            { title: 'Giao dịch', desc: 'Chuẩn bị vào lệnh ngược hướng khi gap được lấp.' }
        ],
        stats: { successRate: '68%', avgChange: 'Đảo chiều', timeForm: '1-2 ngày', pullback: 'N/A' }
    },
    {
        id: 'common-gap',
        category: 'gap',
        module: 'Module 5',
        duration: '8 phút',
        title: 'Gap Phổ Biến (Common Gap)',
        description: 'Gap Phổ Biến xuất hiện trong vùng tích lũy, không có ý nghĩa dự báo và thường được lấp đầy nhanh.',
        svg: {
            path: 'M 30 140 L 80 140 L 80 100 L 130 100 L 180 120 L 230 110 L 280 125 L 350 115',
            labels: [
                { x: 105, y: 85, r: 5, color: '#667eea', text: 'GAP', textY: 72 },
                { x: 200, y: 115, r: 4, color: '#a18cd1', text: 'Lấp đầy', textY: 100 }
            ],
            gapArea: { x: 80, y: 100, w: 50, h: 40 }
        },
        legend: [
            { color: '#667eea', text: 'Common Gap' },
            { color: '#a18cd1', text: 'Được lấp đầy' }
        ],
        keypoints: [
            { title: 'Cấu trúc', desc: 'Xuất hiện trong vùng tích lũy, không ở đầu/kết thúc xu hướng.' },
            { title: 'Đặc điểm', desc: 'Không có ý nghĩa kỹ thuật. Thường được lấp trong vài ngày.' },
            { title: 'Xác nhận', desc: 'Khối lượng thấp, giá quay về lấp gap nhanh.' },
            { title: 'Giao dịch', desc: 'Không giao dịch dựa trên gap này. Bỏ qua.' }
        ],
        stats: { successRate: 'N/A', avgChange: '0%', timeForm: '1-3 ngày', pullback: '90%' }
    }
];

// State with current lesson index
const state = {
    currentSection: 'home',
    currentQuizQuestion: 0,
    quizScore: 0,
    quizStartTime: null,
    selectedAnswer: null,
    answered: false,
    learnedPatterns: [],
    totalTimeSpent: 0,
    streak: 3,
    achievements: ['Khởi đầu', 'Học viên', 'Chính xác'],
    theme: 'dark',
    currentLessonIndex: 0
};

// Load state from localStorage
function loadState() {
    const saved = localStorage.getItem('chartPatternState');
    if (saved) {
        const parsed = JSON.parse(saved);
        Object.assign(state, parsed);
    }
}

// Save state to localStorage
function saveState() {
    localStorage.setItem('chartPatternState', JSON.stringify(state));
}

// ========================================
// Initialization
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    loadState();
    initParticles();
    initNavigation();
    initSearch();
    initPatternCards();
    initQuiz();
    initProgress();
    initAnimations();
    initThemeToggle();
    animateStats();
    initSmoothScroll();
    initPatternAnimation();
    initLessonSystem();

    // Show home section
    document.getElementById('home').classList.add('active');
});

// ========================================
// Particles Animation
// ========================================

function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        container.appendChild(particle);
    }
}

// ========================================
// Navigation
// ========================================

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Section navigation
    navLinkItems.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.dataset.section;
            navigateToSection(section);

            // Update active link
            navLinkItems.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Close mobile menu
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Scroll spy
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('.section');
        let current = 'home';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinkItems.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.section === current) {
                link.classList.add('active');
            }
        });
    });
}

function navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });

        // Update state
        state.currentSection = sectionId;
        saveState();
    }
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ========================================
// Search
// ========================================

function initSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchModal = document.getElementById('searchModal');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    // Open search
    searchBtn.addEventListener('click', () => {
        searchModal.classList.add('active');
        searchInput.focus();
    });

    // Close search
    searchClose.addEventListener('click', () => {
        searchModal.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
    });

    // Close on overlay click
    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
            searchModal.classList.remove('active');
        }
    });

    // Search input
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }

        const results = Object.entries(patternsData).filter(([key, pattern]) =>
            pattern.name.toLowerCase().includes(query) ||
            pattern.nameEn.toLowerCase().includes(query)
        );

        searchResults.innerHTML = results.map(([key, pattern]) => `
            <div class="search-result-item" data-pattern="${key}">
                <div class="pattern-badge ${pattern.category}">${getCategoryLabel(pattern.category)}</div>
                <div>
                    <strong>${pattern.name}</strong>
                    <small>${pattern.nameEn}</small>
                </div>
            </div>
        `).join('');

        // Add click handlers
        searchResults.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                const patternKey = item.dataset.pattern;
                openPatternModal(patternKey);
                searchModal.classList.remove('active');
                searchInput.value = '';
                searchResults.innerHTML = '';
            });
        });
    });

    // Keyboard shortcut
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchBtn.click();
        }
        if (e.key === 'Escape' && searchModal.classList.contains('active')) {
            searchClose.click();
        }
    });
}

function getCategoryLabel(category) {
    const labels = {
        reversal: 'Đảo chiều',
        continuation: 'Tiếp diễn',
        bilateral: 'Hai chiều'
    };
    return labels[category] || category;
}

// ========================================
// Pattern Cards - Library System
// ========================================

function initPatternCards() {
    const patternsGrid = document.getElementById('patternsGrid');
    if (!patternsGrid) return;

    // Generate all pattern cards dynamically
    generatePatternCards();

    // Initialize library controls
    initLibraryControls();

    // Update counts
    updateCategoryCounts();
    updateLearnedCount();
}

function generatePatternCards() {
    const patternsGrid = document.getElementById('patternsGrid');
    if (!patternsGrid) return;

    const progress = JSON.parse(localStorage.getItem('chartPatternProgress') || '{}');
    const learned = progress.learned || [];

    const cardsHTML = Object.entries(patternsData).map(([key, pattern]) => {
        const isLearned = learned.includes(key);
        return `
            <a href="pattern.html?id=${key}" class="pattern-card glass-card animate-fade-in"
               data-category="${pattern.category}" data-pattern="${key}" data-name="${pattern.name}" data-name-en="${pattern.nameEn}">
                ${isLearned ? '<div class="pattern-learned-badge"><i class="fas fa-check"></i> Đã học</div>' : ''}
                <div class="pattern-badge ${pattern.category}">${getCategoryLabel(pattern.category)}</div>
                <div class="pattern-visual">
                    ${getPatternSVG(key)}
                </div>
                <h3 class="pattern-name">${pattern.name}</h3>
                <p class="pattern-name-en">${pattern.nameEn}</p>
                <div class="pattern-stats">
                    <div class="stat">
                        <span class="stat-label">Tỷ lệ thành công</span>
                        <span class="stat-value success">${pattern.successRate}%</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">${pattern.avgMove >= 0 ? 'Độ tăng TB' : 'Độ giảm TB'}</span>
                        <span class="stat-value ${pattern.avgMove >= 0 ? 'positive' : ''}">${pattern.avgMove >= 0 ? '+' : ''}${pattern.avgMove}%</span>
                    </div>
                </div>
                <div class="pattern-action">
                    <i class="fas fa-arrow-right"></i> Xem chi tiết
                </div>
            </a>
        `;
    }).join('');

    patternsGrid.innerHTML = cardsHTML;
}

function getPatternSVG(key) {
    const svgs = {
        // ========== REVERSAL PATTERNS ==========
        'head-shoulders': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 80 Q 30 40, 50 60 Q 70 80, 100 30 Q 130 80, 150 60 Q 170 40, 190 70" stroke="#f5576c" stroke-width="2" fill="none"/><circle cx="50" cy="60" r="3" fill="#f5576c"/><circle cx="100" cy="30" r="3" fill="#f5576c"/><circle cx="150" cy="60" r="3" fill="#f5576c"/><line x1="10" y1="70" x2="190" y2="70" stroke="#f5576c" stroke-width="1" stroke-dasharray="5,3"/><text x="50" y="50" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Vai</text><text x="100" y="20" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đầu</text><text x="150" y="50" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Vai</text><text x="100" y="90" fill="#f5576c" font-size="6" text-anchor="middle">Neckline</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Đầu Vai: 3 đỉnh, giữa cao nhất → Phá neckline → Giảm</text></svg>`,
        'inverse-head-shoulders': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 30 Q 30 70, 50 50 Q 70 30, 100 90 Q 130 30, 150 50 Q 170 70, 190 40" stroke="#43e97b" stroke-width="2" fill="none"/><circle cx="50" cy="50" r="3" fill="#43e97b"/><circle cx="100" cy="90" r="3" fill="#43e97b"/><circle cx="150" cy="50" r="3" fill="#43e97b"/><line x1="10" y1="50" x2="190" y2="50" stroke="#43e97b" stroke-width="1" stroke-dasharray="5,3"/><text x="50" y="60" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Vai</text><text x="100" y="100" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đầu</text><text x="150" y="60" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Vai</text><text x="100" y="42" fill="#43e97b" font-size="6" text-anchor="middle">Neckline</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Đầu Vai Ngược: 3 đáy, giữa thấp nhất → Phá neckline → Tăng</text></svg>`,
        'double-top': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 90 L 40 40 L 80 80 L 120 40 L 160 80 L 190 100" stroke="#f5576c" stroke-width="2" fill="none"/><circle cx="40" cy="40" r="3" fill="#f5576c"/><circle cx="120" cy="40" r="3" fill="#f5576c"/><line x1="10" y1="80" x2="180" y2="80" stroke="#f5576c" stroke-width="1" stroke-dasharray="5,3"/><text x="40" y="30" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đỉnh 1</text><text x="120" y="30" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đỉnh 2</text><text x="100" y="95" fill="#f5576c" font-size="6" text-anchor="middle">Neckline</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Đỉnh Kép: 2 đỉnh bằng nhau → Phá neckline → Giảm</text></svg>`,
        'double-bottom': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 30 L 40 80 L 80 40 L 120 80 L 160 40 L 190 20" stroke="#43e97b" stroke-width="2" fill="none"/><circle cx="40" cy="80" r="3" fill="#43e97b"/><circle cx="120" cy="80" r="3" fill="#43e97b"/><line x1="10" y1="40" x2="180" y2="40" stroke="#43e97b" stroke-width="1" stroke-dasharray="5,3"/><text x="40" y="95" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đáy 1</text><text x="120" y="95" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đáy 2</text><text x="100" y="35" fill="#43e97b" font-size="6" text-anchor="middle">Neckline</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Đáy Kép: 2 đáy bằng nhau → Phá neckline → Tăng</text></svg>`,
        'triple-top': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 90 L 30 40 L 60 80 L 100 40 L 140 80 L 170 40 L 190 100" stroke="#f5576c" stroke-width="2" fill="none"/><circle cx="30" cy="40" r="3" fill="#f5576c"/><circle cx="100" cy="40" r="3" fill="#f5576c"/><circle cx="170" cy="40" r="3" fill="#f5576c"/><line x1="10" y1="80" x2="190" y2="80" stroke="#f5576c" stroke-width="1" stroke-dasharray="5,3"/><text x="30" y="30" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đỉnh 1</text><text x="100" y="30" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đỉnh 2</text><text x="170" y="30" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đỉnh 3</text><text x="100" y="95" fill="#f5576c" font-size="6" text-anchor="middle">Neckline</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Đỉnh Ba: 3 đỉnh bằng nhau → Phá neckline → Giảm</text></svg>`,
        'triple-bottom': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 30 L 30 80 L 60 40 L 100 80 L 140 40 L 170 80 L 190 20" stroke="#43e97b" stroke-width="2" fill="none"/><circle cx="30" cy="80" r="3" fill="#43e97b"/><circle cx="100" cy="80" r="3" fill="#43e97b"/><circle cx="170" cy="80" r="3" fill="#43e97b"/><line x1="10" y1="40" x2="190" y2="40" stroke="#43e97b" stroke-width="1" stroke-dasharray="5,3"/><text x="30" y="95" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đáy 1</text><text x="100" y="95" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đáy 2</text><text x="170" y="95" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đáy 3</text><text x="100" y="35" fill="#43e97b" font-size="6" text-anchor="middle">Neckline</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Đáy Ba: 3 đáy bằng nhau → Phá neckline → Tăng</text></svg>`,
        'rising-wedge': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 100 L 50 70 L 90 80 L 130 50 L 170 60 L 190 40" stroke="#f5576c" stroke-width="2" fill="none"/><line x1="10" y1="100" x2="190" y2="55" stroke="#f5576c" stroke-width="1.5" stroke-dasharray="5,3"/><line x1="10" y1="75" x2="190" y2="35" stroke="#f5576c" stroke-width="1.5" stroke-dasharray="5,3"/><circle cx="50" cy="70" r="3" fill="#f5576c"/><circle cx="130" cy="50" r="3" fill="#f5576c"/><text x="100" y="15" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">2 đường dâng lên</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Nêm Tăng: Dâng lên hội tụ → Phá đáy → Giảm</text></svg>`,
        'falling-wedge': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 30 L 50 60 L 90 50 L 130 80 L 170 70 L 190 100" stroke="#43e97b" stroke-width="2" fill="none"/><line x1="10" y1="25" x2="190" y2="85" stroke="#43e97b" stroke-width="1.5" stroke-dasharray="5,3"/><line x1="10" y1="50" x2="190" y2="105" stroke="#43e97b" stroke-width="1.5" stroke-dasharray="5,3"/><circle cx="50" cy="60" r="3" fill="#43e97b"/><circle cx="130" cy="80" r="3" fill="#43e97b"/><text x="100" y="15" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">2 đường hạ xuống</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Nêm Giảm: Hạ xuống hội tụ → Phá đỉnh → Tăng</text></svg>`,
        'rounding-top': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 100 Q 30 95, 50 85 Q 70 70, 90 50 Q 110 30, 130 50 Q 150 70, 170 85 Q 185 95, 190 100" stroke="#f5576c" stroke-width="2" fill="none"/><circle cx="110" cy="30" r="3" fill="#f5576c"/><line x1="10" y1="95" x2="190" y2="95" stroke="#f5576c" stroke-width="1" stroke-dasharray="5,3"/><text x="110" y="20" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đỉnh tròn</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Đỉnh Tròn: Nhiều đỉnh tròn → Giảm dần</text></svg>`,
        'rounding-bottom': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 20 Q 30 25, 50 35 Q 70 50, 90 70 Q 110 90, 130 70 Q 150 50, 170 35 Q 185 25, 190 20" stroke="#43e97b" stroke-width="2" fill="none"/><circle cx="110" cy="90" r="3" fill="#43e97b"/><line x1="10" y1="25" x2="190" y2="25" stroke="#43e97b" stroke-width="1" stroke-dasharray="5,3"/><text x="110" y="100" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đáy tròn</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Đáy Tròn: Nhiều đáy tròn → Tăng dần</text></svg>`,
        'v-top': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 90 L 80 30 L 100 20 L 120 30 L 190 90" stroke="#f5576c" stroke-width="2" fill="none"/><circle cx="100" cy="20" r="3" fill="#f5576c"/><line x1="80" y1="35" x2="120" y2="35" stroke="#f5576c" stroke-width="1" stroke-dasharray="5,3"/><text x="100" y="12" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đỉnh nhọn</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">V-Top: Tăng nhanh → Đỉnh nhọn → Giảm nhanh</text></svg>`,
        'v-bottom': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 30 L 80 90 L 100 100 L 120 90 L 190 30" stroke="#43e97b" stroke-width="2" fill="none"/><circle cx="100" cy="100" r="3" fill="#43e97b"/><line x1="80" y1="85" x2="120" y2="85" stroke="#43e97b" stroke-width="1" stroke-dasharray="5,3"/><text x="100" y="112" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đáy nhọn</text><text x="100" y="15" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">V-Bottom: Giảm nhanh → Đáy nhọn → Tăng nhanh</text></svg>`,
        'diamond-top': `<svg viewBox="0 0 200 120"><path d="M 100 10 L 160 50 L 100 95 L 40 50 Z" fill="rgba(245,87,108,0.1)" stroke="#f5576c" stroke-width="1" stroke-dasharray="3,3"/><path class="pattern-svg" d="M 10 80 L 40 50 L 70 65 L 100 30 L 130 65 L 160 50 L 190 100" stroke="#f5576c" stroke-width="2" fill="none"/><circle cx="100" cy="30" r="3" fill="#f5576c"/><text x="100" y="15" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đỉnh kim cương</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Kim Cương Đỉnh: Hình thoi tại đỉnh → Phá đáy → Giảm</text></svg>`,
        'diamond-bottom': `<svg viewBox="0 0 200 120"><path d="M 100 20 L 160 70 L 100 110 L 40 70 Z" fill="rgba(67,233,123,0.1)" stroke="#43e97b" stroke-width="1" stroke-dasharray="3,3"/><path class="pattern-svg" d="M 10 20 L 40 70 L 70 55 L 100 90 L 130 55 L 160 70 L 190 40" stroke="#43e97b" stroke-width="2" fill="none"/><circle cx="100" cy="90" r="3" fill="#43e97b"/><text x="100" y="105" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đáy kim cương</text><text x="100" y="15" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Kim Cương Đáy: Hình thoi tại đáy → Phá đỉnh → Tăng</text></svg>`,
        'island-top': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 90 L 50 90" stroke="#43e97b" stroke-width="2" fill="none"/><line x1="50" y1="90" x2="50" y2="60" stroke="#667eea" stroke-width="1" stroke-dasharray="4,3"/><rect x="55" y="40" width="85" height="35" fill="rgba(245,87,108,0.15)" stroke="#f5576c" stroke-width="1" stroke-dasharray="3,3"/><path d="M 60 55 L 80 48 L 100 58 L 120 45 L 135 52" stroke="#f5576c" stroke-width="1.5" fill="none"/><line x1="140" y1="60" x2="140" y2="95" stroke="#667eea" stroke-width="1" stroke-dasharray="4,3"/><path d="M 145 95 L 190 100" stroke="#f5576c" stroke-width="2" fill="none"/><circle cx="100" cy="55" r="3" fill="#f5576c"/><text x="50" y="80" fill="#667eea" font-size="6" text-anchor="middle">Gap↑</text><text x="140" y="85" fill="#667eea" font-size="6" text-anchor="middle">Gap↓</text><text x="100" y="32" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đảo (Island)</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Đảo Đỉnh: Gap lên → Đảo cô lập → Gap xuống → Giảm</text></svg>`,
        'island-bottom': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 30 L 50 30" stroke="#f5576c" stroke-width="2" fill="none"/><line x1="50" y1="30" x2="50" y2="55" stroke="#667eea" stroke-width="1" stroke-dasharray="4,3"/><rect x="55" y="45" width="85" height="35" fill="rgba(67,233,123,0.15)" stroke="#43e97b" stroke-width="1" stroke-dasharray="3,3"/><path d="M 60 60 L 80 68 L 100 58 L 120 70 L 135 63" stroke="#43e97b" stroke-width="1.5" fill="none"/><line x1="140" y1="55" x2="140" y2="25" stroke="#667eea" stroke-width="1" stroke-dasharray="4,3"/><path d="M 145 25 L 190 20" stroke="#43e97b" stroke-width="2" fill="none"/><circle cx="100" cy="65" r="3" fill="#43e97b"/><text x="50" y="48" fill="#667eea" font-size="6" text-anchor="middle">Gap↓</text><text x="140" y="35" fill="#667eea" font-size="6" text-anchor="middle">Gap↑</text><text x="100" y="95" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đảo (Island)</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Đảo Đáy: Gap xuống → Đảo cô lập → Gap lên → Tăng</text></svg>`,
        'island-reversal': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 60 L 50 60" stroke="#667eea" stroke-width="2" fill="none"/><line x1="50" y1="60" x2="50" y2="40" stroke="#a18cd1" stroke-width="1" stroke-dasharray="4,3"/><rect x="55" y="30" width="85" height="45" fill="rgba(161,140,209,0.15)" stroke="#a18cd1" stroke-width="1" stroke-dasharray="3,3"/><path d="M 60 50 L 80 42 L 100 55 L 120 40 L 135 48" stroke="#a18cd1" stroke-width="1.5" fill="none"/><line x1="140" y1="60" x2="140" y2="80" stroke="#a18cd1" stroke-width="1" stroke-dasharray="4,3"/><path d="M 145 80 L 190 85" stroke="#a18cd1" stroke-width="2" fill="none"/><circle cx="100" cy="50" r="3" fill="#a18cd1"/><text x="50" y="52" fill="#a18cd1" font-size="6" text-anchor="middle">Gap</text><text x="140" y="72" fill="#a18cd1" font-size="6" text-anchor="middle">Gap</text><text x="100" y="22" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đảo (Island)</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Đảo Chiều: Giá bị cô lập bởi 2 gaps → Đảo chiều</text></svg>`,
        'pipe-top': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 90 L 50 45" stroke="#f5576c" stroke-width="2" fill="none"/><rect x="55" y="25" width="50" height="30" fill="rgba(245,87,108,0.15)" stroke="#f5576c" stroke-width="1" stroke-dasharray="3,3"/><line x1="65" y1="25" x2="65" y2="12" stroke="#f5576c" stroke-width="2"/><line x1="80" y1="25" x2="80" y2="12" stroke="#f5576c" stroke-width="2"/><line x1="95" y1="25" x2="95" y2="12" stroke="#f5576c" stroke-width="2"/><path d="M 105 40 L 150 80 L 190 100" stroke="#f5576c" stroke-width="2" fill="none"/><circle cx="80" cy="25" r="3" fill="#f5576c"/><text x="80" y="45" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">2-3 nến dài</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Ống Đỉnh: 2-3 nến dài tại đỉnh → Giảm mạnh</text></svg>`,
        'pipe-bottom': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 30 L 50 75" stroke="#43e97b" stroke-width="2" fill="none"/><rect x="55" y="60" width="50" height="35" fill="rgba(67,233,123,0.15)" stroke="#43e97b" stroke-width="1" stroke-dasharray="3,3"/><line x1="65" y1="95" x2="65" y2="108" stroke="#43e97b" stroke-width="2"/><line x1="80" y1="95" x2="80" y2="108" stroke="#43e97b" stroke-width="2"/><line x1="95" y1="95" x2="95" y2="108" stroke="#43e97b" stroke-width="2"/><path d="M 105 80 L 150 40 L 190 20" stroke="#43e97b" stroke-width="2" fill="none"/><circle cx="80" cy="95" r="3" fill="#43e97b"/><text x="80" y="78" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">2-3 nến dài</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Ống Đáy: 2-3 nến dài tại đáy → Tăng mạnh</text></svg>`,
        'tower-top': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 90 L 30 55" stroke="#f5576c" stroke-width="2" fill="none"/><rect x="30" y="30" width="18" height="28" fill="rgba(245,87,108,0.2)" stroke="#f5576c" stroke-width="1" stroke-dasharray="3,3"/><rect x="50" y="30" width="18" height="28" fill="rgba(245,87,108,0.25)" stroke="#f5576c" stroke-width="1" stroke-dasharray="3,3"/><rect x="70" y="30" width="18" height="28" fill="rgba(245,87,108,0.3)" stroke="#f5576c" stroke-width="1" stroke-dasharray="3,3"/><rect x="90" y="30" width="18" height="28" fill="rgba(245,87,108,0.3)" stroke="#f5576c" stroke-width="1" stroke-dasharray="3,3"/><rect x="110" y="30" width="18" height="28" fill="rgba(245,87,108,0.25)" stroke="#f5576c" stroke-width="1" stroke-dasharray="3,3"/><rect x="130" y="30" width="18" height="28" fill="rgba(245,87,108,0.2)" stroke="#f5576c" stroke-width="1" stroke-dasharray="3,3"/><path d="M 148 58 L 170 85 L 190 100" stroke="#f5576c" stroke-width="2" fill="none"/><line x1="25" y1="65" x2="155" y2="65" stroke="#f5576c" stroke-width="1" stroke-dasharray="5,3"/><circle cx="80" cy="30" r="3" fill="#f5576c"/><text x="80" y="22" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Tháp nến</text><text x="100" y="80" fill="#f5576c" font-size="6" text-anchor="middle">Hỗ trợ</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Tháp Đỉnh: Nến gom tạo tháp → Phá hỗ trợ → Giảm</text></svg>`,
        'tower-bottom': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 30 L 30 65" stroke="#43e97b" stroke-width="2" fill="none"/><rect x="30" y="58" width="18" height="28" fill="rgba(67,233,123,0.2)" stroke="#43e97b" stroke-width="1" stroke-dasharray="3,3"/><rect x="50" y="58" width="18" height="28" fill="rgba(67,233,123,0.25)" stroke="#43e97b" stroke-width="1" stroke-dasharray="3,3"/><rect x="70" y="58" width="18" height="28" fill="rgba(67,233,123,0.3)" stroke="#43e97b" stroke-width="1" stroke-dasharray="3,3"/><rect x="90" y="58" width="18" height="28" fill="rgba(67,233,123,0.3)" stroke="#43e97b" stroke-width="1" stroke-dasharray="3,3"/><rect x="110" y="58" width="18" height="28" fill="rgba(67,233,123,0.25)" stroke="#43e97b" stroke-width="1" stroke-dasharray="3,3"/><rect x="130" y="58" width="18" height="28" fill="rgba(67,233,123,0.2)" stroke="#43e97b" stroke-width="1" stroke-dasharray="3,3"/><path d="M 148 62 L 170 35 L 190 20" stroke="#43e97b" stroke-width="2" fill="none"/><line x1="25" y1="55" x2="155" y2="55" stroke="#43e97b" stroke-width="1" stroke-dasharray="5,3"/><circle cx="80" cy="86" r="3" fill="#43e97b"/><text x="80" y="100" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Tháp nến</text><text x="100" y="50" fill="#43e97b" font-size="6" text-anchor="middle">Kháng cự</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Tháp Đáy: Nến gom tạo tháp → Phá kháng cự → Tăng</text></svg>`,
        'horn-top': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 80 L 50 50 L 100 70 L 150 50 L 190 30" stroke="#f5576c" stroke-width="2" fill="none"/><circle cx="50" cy="50" r="3" fill="#f5576c"/><circle cx="150" cy="50" r="3" fill="#f5576c"/><line x1="45" y1="45" x2="155" y2="45" stroke="#f5576c" stroke-width="1" stroke-dasharray="5,3"/><text x="50" y="40" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Sừng 1</text><text x="150" y="40" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Sừng 2</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Sừng Đỉnh: 2 đỉnh cao dần → Giảm</text></svg>`,
        'horn-bottom': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 30 L 50 60 L 100 40 L 150 60 L 190 80" stroke="#43e97b" stroke-width="2" fill="none"/><circle cx="50" cy="60" r="3" fill="#43e97b"/><circle cx="150" cy="60" r="3" fill="#43e97b"/><line x1="45" y1="65" x2="155" y2="65" stroke="#43e97b" stroke-width="1" stroke-dasharray="5,3"/><text x="50" y="78" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Sừng 1</text><text x="150" y="78" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Sừng 2</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Sừng Đáy: 2 đáy thấp dần → Tăng</text></svg>`,
        'bump-run-top': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 90 L 50 85 L 80 70 L 110 35 L 140 50 L 170 80 L 190 100" stroke="#f5576c" stroke-width="2" fill="none"/><line x1="10" y1="85" x2="110" y2="85" stroke="#f5576c" stroke-width="1" stroke-dasharray="5,3"/><line x1="80" y1="70" x2="140" y2="50" stroke="#f5576c" stroke-width="1" stroke-dasharray="3,3"/><circle cx="110" cy="35" r="3" fill="#f5576c"/><text x="60" y="80" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Lead-in</text><text x="110" y="25" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Bump</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Bump & Run: Tăng dốc → Bump đột ngột → Run → Giảm</text></svg>`,
        'bump-run-bottom': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 30 L 50 35 L 80 50 L 110 85 L 140 70 L 170 40 L 190 20" stroke="#43e97b" stroke-width="2" fill="none"/><line x1="10" y1="35" x2="110" y2="35" stroke="#43e97b" stroke-width="1" stroke-dasharray="5,3"/><line x1="80" y1="50" x2="140" y2="70" stroke="#43e97b" stroke-width="1" stroke-dasharray="3,3"/><circle cx="110" cy="85" r="3" fill="#43e97b"/><text x="60" y="42" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Lead-in</text><text x="110" y="98" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Bump</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Bump & Run Đáy: Giảm dốc → Bump đột ngột → Run → Tăng</text></svg>`,
        'adam-adam-top': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 90 L 40 35 L 80 80 L 120 35 L 160 80 L 190 100" stroke="#f5576c" stroke-width="2" fill="none"/><circle cx="40" cy="35" r="3" fill="#f5576c"/><circle cx="120" cy="35" r="3" fill="#f5576c"/><line x1="10" y1="80" x2="180" y2="80" stroke="#f5576c" stroke-width="1" stroke-dasharray="5,3"/><text x="40" y="25" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Adam</text><text x="120" y="25" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Adam</text><text x="100" y="95" fill="#f5576c" font-size="6" text-anchor="middle">Neckline</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Adam Adam Đỉnh: 2 đỉnh nhọn → Phá neckline → Giảm</text></svg>`,
        'adam-adam-bottom': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 30 L 40 85 L 80 40 L 120 85 L 160 40 L 190 20" stroke="#43e97b" stroke-width="2" fill="none"/><circle cx="40" cy="85" r="3" fill="#43e97b"/><circle cx="120" cy="85" r="3" fill="#43e97b"/><line x1="10" y1="40" x2="180" y2="40" stroke="#43e97b" stroke-width="1" stroke-dasharray="5,3"/><text x="40" y="98" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Adam</text><text x="120" y="98" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Adam</text><text x="100" y="35" fill="#43e97b" font-size="6" text-anchor="middle">Neckline</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Adam Adam Đáy: 2 đáy nhọn → Phá neckline → Tăng</text></svg>`,
        'adam-eve-top': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 90 L 40 35 L 80 80 L 120 25 L 160 80 L 190 100" stroke="#f5576c" stroke-width="2" fill="none"/><circle cx="40" cy="35" r="3" fill="#f5576c"/><circle cx="120" cy="25" r="3" fill="#f5576c"/><line x1="10" y1="80" x2="180" y2="80" stroke="#f5576c" stroke-width="1" stroke-dasharray="5,3"/><text x="40" y="25" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Adam</text><text x="120" y="18" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Eve</text><text x="100" y="95" fill="#f5576c" font-size="6" text-anchor="middle">Neckline</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Adam Eve Đỉnh: Đỉnh nhọn + Đỉnh tròn → Giảm</text></svg>`,
        'adam-eve-bottom': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 30 L 40 85 L 80 40 L 120 95 L 160 40 L 190 20" stroke="#43e97b" stroke-width="2" fill="none"/><circle cx="40" cy="85" r="3" fill="#43e97b"/><circle cx="120" cy="95" r="3" fill="#43e97b"/><line x1="10" y1="40" x2="180" y2="40" stroke="#43e97b" stroke-width="1" stroke-dasharray="5,3"/><text x="40" y="98" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Adam</text><text x="120" y="108" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Eve</text><text x="100" y="35" fill="#43e97b" font-size="6" text-anchor="middle">Neckline</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Adam Eve Đáy: Đáy nhọn + Đáy tròn → Tăng</text></svg>`,
        'eve-adam-top': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 90 L 40 25 L 80 80 L 120 35 L 160 80 L 190 100" stroke="#f5576c" stroke-width="2" fill="none"/><circle cx="40" cy="25" r="3" fill="#f5576c"/><circle cx="120" cy="35" r="3" fill="#f5576c"/><line x1="10" y1="80" x2="180" y2="80" stroke="#f5576c" stroke-width="1" stroke-dasharray="5,3"/><text x="40" y="18" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Eve</text><text x="120" y="25" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Adam</text><text x="100" y="95" fill="#f5576c" font-size="6" text-anchor="middle">Neckline</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Eve Adam Đỉnh: Đỉnh tròn + Đỉnh nhọn → Giảm</text></svg>`,
        'eve-adam-bottom': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 30 L 40 95 L 80 40 L 120 85 L 160 40 L 190 20" stroke="#43e97b" stroke-width="2" fill="none"/><circle cx="40" cy="95" r="3" fill="#43e97b"/><circle cx="120" cy="85" r="3" fill="#43e97b"/><line x1="10" y1="40" x2="180" y2="40" stroke="#43e97b" stroke-width="1" stroke-dasharray="5,3"/><text x="40" y="108" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Eve</text><text x="120" y="98" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Adam</text><text x="100" y="35" fill="#43e97b" font-size="6" text-anchor="middle">Neckline</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Eve Adam Đáy: Đáy tròn + Đáy nhọn → Tăng</text></svg>`,
        'eve-eve-top': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 90 L 40 25 L 80 80 L 120 25 L 160 80 L 190 100" stroke="#f5576c" stroke-width="2" fill="none"/><circle cx="40" cy="25" r="3" fill="#f5576c"/><circle cx="120" cy="25" r="3" fill="#f5576c"/><line x1="10" y1="80" x2="180" y2="80" stroke="#f5576c" stroke-width="1" stroke-dasharray="5,3"/><text x="40" y="18" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Eve</text><text x="120" y="18" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Eve</text><text x="100" y="95" fill="#f5576c" font-size="6" text-anchor="middle">Neckline</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Eve Eve Đỉnh: 2 đỉnh tròn → Phá neckline → Giảm</text></svg>`,
        'eve-eve-bottom': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 30 L 40 95 L 80 40 L 120 95 L 160 40 L 190 20" stroke="#43e97b" stroke-width="2" fill="none"/><circle cx="40" cy="95" r="3" fill="#43e97b"/><circle cx="120" cy="95" r="3" fill="#43e97b"/><line x1="10" y1="40" x2="180" y2="40" stroke="#43e97b" stroke-width="1" stroke-dasharray="5,3"/><text x="40" y="108" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Eve</text><text x="120" y="108" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Eve</text><text x="100" y="35" fill="#43e97b" font-size="6" text-anchor="middle">Neckline</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Eve Eve Đáy: 2 đáy tròn → Phá neckline → Tăng</text></svg>`,
        'three-rising-valleys': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 100 L 30 50 L 50 70 L 80 40 L 100 60 L 130 30 L 150 50 L 190 20" stroke="#43e97b" stroke-width="2" fill="none"/><circle cx="50" cy="70" r="3" fill="#43e97b"/><circle cx="100" cy="60" r="3" fill="#43e97b"/><circle cx="150" cy="50" r="3" fill="#43e97b"/><line x1="45" y1="75" x2="155" y2="45" stroke="#43e97b" stroke-width="1.5" stroke-dasharray="5,3"/><text x="50" y="85" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đáy 1</text><text x="100" y="75" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đáy 2</text><text x="150" y="65" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đáy 3</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Ba Đáy Tăng: 3 đáy cao dần → Xu hướng tăng</text></svg>`,
        'three-falling-peaks': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 20 L 30 70 L 50 50 L 80 80 L 100 60 L 130 90 L 150 70 L 190 100" stroke="#f5576c" stroke-width="2" fill="none"/><circle cx="50" cy="50" r="3" fill="#f5576c"/><circle cx="100" cy="60" r="3" fill="#f5576c"/><circle cx="150" cy="70" r="3" fill="#f5576c"/><line x1="45" y1="45" x2="155" y2="75" stroke="#f5576c" stroke-width="1.5" stroke-dasharray="5,3"/><text x="50" y="40" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đỉnh 1</text><text x="100" y="50" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đỉnh 2</text><text x="150" y="60" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đỉnh 3</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Ba Đỉnh Giảm: 3 đỉnh thấp dần → Xu hướng giảm</text></svg>`,
        'hook-reversal': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 80 L 60 80 L 60 50 L 70 30 L 80 50 L 80 80 L 190 80" stroke="#667eea" stroke-width="2" fill="none"/><circle cx="70" cy="30" r="3" fill="#f5576c"/><path d="M 60 38 Q 70 22, 80 38" stroke="#f5576c" stroke-width="1.5" stroke-dasharray="3,3" fill="none"/><line x1="10" y1="80" x2="190" y2="80" stroke="#667eea" stroke-width="1" stroke-dasharray="5,3"/><text x="70" y="20" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Hook</text><text x="70" y="95" fill="#667eea" font-size="6" text-anchor="middle">Đường cơ sở</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Hook: Móc ngược tại đỉnh/đáy → Đảo chiều</text></svg>`,

        // ========== CONTINUATION PATTERNS ==========
        'cup-handle': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 70 L 25 45" stroke="#43e97b" stroke-width="2" fill="none"/><circle cx="25" cy="45" r="3" fill="#43e97b"/><path class="pattern-svg" d="M 25 45 Q 40 55, 55 85 Q 70 105, 100 105 Q 130 105, 145 85 Q 160 55, 170 45" stroke="#43e97b" stroke-width="2" fill="none"/><ellipse cx="100" cy="75" rx="55" ry="35" stroke="#43e97b" stroke-width="1" stroke-dasharray="3,3" fill="none"/><circle cx="100" cy="105" r="3" fill="#43e97b"/><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đáy cốc</text><path d="M 170 45 Q 175 55, 180 50 Q 185 55, 190 45" stroke="#fa709a" stroke-width="2" fill="none"/><rect x="165" y="40" width="28" height="20" stroke="#fa709a" stroke-width="1" stroke-dasharray="3,3" fill="none"/><text x="178" y="75" fill="#fa709a" font-size="6" text-anchor="middle">Tay cầm</text><line x1="20" y1="45" x2="170" y2="45" stroke="#43e97b" stroke-width="1" stroke-dasharray="5,3"/><text x="100" y="25" fill="#43e97b" font-size="7" text-anchor="middle">CỐC (Cup)</text><text x="100" y="38" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đáy tròn, 2 vai bằng nhau</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Cốc Tay Cầm: Đáy tròn + Tay nhỏ → Phá vỡ → Tăng tiếp</text></svg>`,
        'cup-high-handle': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 50 L 30 50" stroke="#43e97b" stroke-width="2" fill="none"/><path class="pattern-svg" d="M 30 50 Q 70 105, 110 105 Q 150 105, 170 50" stroke="#43e97b" stroke-width="2" fill="none"/><ellipse cx="110" cy="75" rx="50" ry="35" stroke="#43e97b" stroke-width="1" stroke-dasharray="3,3" fill="none"/><path d="M 170 50 Q 175 55, 180 52 Q 185 48, 190 40" stroke="#43e97b" stroke-width="2" fill="none"/><rect x="165" y="38" width="25" height="22" stroke="#43e97b" stroke-width="1" stroke-dasharray="3,3" fill="none"/><text x="177" y="55" fill="rgba(255,255,255,0.5)" font-size="5" text-anchor="middle">Tay cao</text><line x1="20" y1="50" x2="190" y2="50" stroke="#43e97b" stroke-width="1" stroke-dasharray="5,3"/><text x="110" y="25" fill="#43e97b" font-size="7" text-anchor="middle">CỐC (Cup)</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Cốc Tay Cao: Tay cầm ở mức cao → Tăng mạnh</text></svg>`,
        'cup-low-handle': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 40 L 30 40" stroke="#43e97b" stroke-width="2" fill="none"/><path class="pattern-svg" d="M 30 40 Q 70 108, 110 108 Q 150 108, 170 40" stroke="#43e97b" stroke-width="2" fill="none"/><ellipse cx="110" cy="75" rx="50" ry="35" stroke="#43e97b" stroke-width="1" stroke-dasharray="3,3" fill="none"/><path d="M 170 40 Q 175 55, 180 65 Q 185 75, 190 70" stroke="#f5576c" stroke-width="2" fill="none"/><rect x="165" y="62" width="25" height="18" stroke="#f5576c" stroke-width="1" stroke-dasharray="3,3" fill="none"/><text x="177" y="75" fill="rgba(255,255,255,0.5)" font-size="5" text-anchor="middle">Tay thấp</text><line x1="20" y1="40" x2="170" y2="40" stroke="#43e97b" stroke-width="1" stroke-dasharray="5,3"/><text x="110" y="25" fill="#43e97b" font-size="7" text-anchor="middle">CỐC (Cup)</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Cốc Tay Thấp: Tay cầm thấp hơn → Tăng vừa</text></svg>`,
        'ascending-triangle': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 100 L 50 60 L 90 75 L 130 50 L 170 60 L 190 40" stroke="#43e97b" stroke-width="2" fill="none"/><line x1="10" y1="40" x2="190" y2="40" stroke="#43e97b" stroke-width="1.5" stroke-dasharray="5,3"/><circle cx="50" cy="60" r="3" fill="#43e97b"/><circle cx="130" cy="50" r="3" fill="#43e97b"/><circle cx="90" cy="75" r="3" fill="#43e97b"/><text x="100" y="25" fill="#43e97b" font-size="6" text-anchor="middle">Kháng cự ngang</text><text x="100" y="95" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đáy cao dần</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Tam Giác Tăng: Đáy cao dần + Kháng cự ngang → Phá → Tăng</text></svg>`,
        'descending-triangle': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 30 L 50 60 L 90 50 L 130 70 L 170 60 L 190 80" stroke="#f5576c" stroke-width="2" fill="none"/><line x1="10" y1="80" x2="190" y2="80" stroke="#f5576c" stroke-width="1.5" stroke-dasharray="5,3"/><circle cx="50" cy="60" r="3" fill="#f5576c"/><circle cx="130" cy="70" r="3" fill="#f5576c"/><circle cx="90" cy="50" r="3" fill="#f5576c"/><text x="100" y="95" fill="#f5576c" font-size="6" text-anchor="middle">Hỗ trợ ngang</text><text x="100" y="25" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đỉnh thấp dần</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Tam Giác Giảm: Đỉnh thấp dần + Hỗ trợ ngang → Phá → Giảm</text></svg>`,
        'flag': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 100 L 50 40" stroke="#667eea" stroke-width="2" fill="none"/><polygon points="50,40 45,48 55,48" fill="#667eea"/><rect x="55" y="35" width="100" height="40" fill="rgba(102,126,234,0.1)" stroke="#667eea" stroke-width="1" stroke-dasharray="3,3"/><path d="M 60 45 L 80 55 L 100 48 L 120 58 L 140 50 L 150 55" stroke="#667eea" stroke-width="1.5" fill="none"/><line x1="55" y1="35" x2="155" y2="35" stroke="#667eea" stroke-width="1" stroke-dasharray="5,3"/><line x1="55" y1="75" x2="155" y2="75" stroke="#667eea" stroke-width="1" stroke-dasharray="5,3"/><path d="M 155 55 L 180 35 L 190 25" stroke="#667eea" stroke-width="2" fill="none"/><circle cx="50" cy="40" r="3" fill="#667eea"/><text x="30" y="75" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle" transform="rotate(-55, 30, 75)">Pole</text><text x="105" y="90" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">FLAG (Cờ)</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Cờ: Di chuyển mạnh → Gom hình cờ → Tiếp tục</text></svg>`,
        'bull-flag': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 100 L 50 40" stroke="#43e97b" stroke-width="2" fill="none"/><polygon points="50,40 45,48 55,48" fill="#43e97b"/><rect x="55" y="35" width="100" height="35" fill="rgba(67,233,123,0.1)" stroke="#43e97b" stroke-width="1" stroke-dasharray="3,3"/><path d="M 60 45 L 80 55 L 100 48 L 120 58 L 140 50 L 150 55" stroke="#43e97b" stroke-width="1.5" fill="none"/><line x1="55" y1="35" x2="155" y2="35" stroke="#43e97b" stroke-width="1" stroke-dasharray="5,3"/><line x1="55" y1="70" x2="155" y2="70" stroke="#43e97b" stroke-width="1" stroke-dasharray="5,3"/><path d="M 155 52 L 180 32 L 190 22" stroke="#43e97b" stroke-width="2" fill="none"/><circle cx="50" cy="40" r="3" fill="#43e97b"/><text x="30" y="75" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle" transform="rotate(-55, 30, 75)">Pole</text><text x="105" y="85" fill="#43e97b" font-size="6" text-anchor="middle">CỜ TĂNG</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Cờ Tăng: Tăng mạnh → Gom → Tăng tiếp</text></svg>`,
        'bear-flag': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 20 L 50 80" stroke="#f5576c" stroke-width="2" fill="none"/><polygon points="50,80 45,72 55,72" fill="#f5576c"/><rect x="55" y="50" width="100" height="35" fill="rgba(245,87,108,0.1)" stroke="#f5576c" stroke-width="1" stroke-dasharray="3,3"/><path d="M 60 60 L 80 55 L 100 62 L 120 52 L 140 58 L 150 55" stroke="#f5576c" stroke-width="1.5" fill="none"/><line x1="55" y1="50" x2="155" y2="50" stroke="#f5576c" stroke-width="1" stroke-dasharray="5,3"/><line x1="55" y1="85" x2="155" y2="85" stroke="#f5576c" stroke-width="1" stroke-dasharray="5,3"/><path d="M 155 68 L 180 88 L 190 98" stroke="#f5576c" stroke-width="2" fill="none"/><circle cx="50" cy="80" r="3" fill="#f5576c"/><text x="30" y="50" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle" transform="rotate(55, 30, 50)">Pole</text><text x="105" y="45" fill="#f5576c" font-size="6" text-anchor="middle">CỜ GIẢM</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Cờ Giảm: Giảm mạnh → Gom → Giảm tiếp</text></svg>`,
        'pennant': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 100 L 50 35" stroke="#667eea" stroke-width="2" fill="none"/><polygon points="50,35 45,43 55,43" fill="#667eea"/><polygon points="55,30 55,85 150,55" fill="rgba(102,126,234,0.1)" stroke="#667eea" stroke-width="1" stroke-dasharray="3,3"/><path d="M 60 45 L 80 55 L 100 48 L 120 58 L 140 52" stroke="#667eea" stroke-width="1.5" fill="none"/><line x1="55" y1="30" x2="150" y2="55" stroke="#667eea" stroke-width="1.5" stroke-dasharray="5,3"/><line x1="55" y1="85" x2="150" y2="55" stroke="#667eea" stroke-width="1.5" stroke-dasharray="5,3"/><path d="M 150 55 L 180 35 L 190 25" stroke="#667eea" stroke-width="2" fill="none"/><circle cx="50" cy="35" r="3" fill="#667eea"/><text x="30" y="75" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle" transform="rotate(-55, 30, 75)">Pole</text><text x="100" y="100" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">PENNANT</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Pennant: Tăng mạnh → Tam giác nhỏ hội tụ → Tăng tiếp</text></svg>`,
        'high-tight-flag': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 105 L 30 100 L 40 70 L 50 45 L 60 25" stroke="#43e97b" stroke-width="2" fill="none"/><circle cx="60" cy="25" r="3" fill="#43e97b"/><line x1="40" y1="70" x2="60" y2="25" stroke="#43e97b" stroke-width="1" stroke-dasharray="5,3"/><rect x="65" y="20" width="90" height="18" fill="rgba(67,233,123,0.1)" stroke="#43e97b" stroke-width="1" stroke-dasharray="3,3"/><line x1="75" y1="25" x2="75" y2="33" stroke="#43e97b" stroke-width="1.5"/><line x1="95" y1="25" x2="95" y2="33" stroke="#43e97b" stroke-width="1.5"/><line x1="115" y1="25" x2="115" y2="33" stroke="#43e97b" stroke-width="1.5"/><line x1="135" y1="25" x2="135" y2="33" stroke="#43e97b" stroke-width="1.5"/><path d="M 155 29 L 180 20 L 190 12" stroke="#43e97b" stroke-width="2" fill="none"/><text x="40" y="95" fill="#43e97b" font-size="6" text-anchor="middle">+90%</text><text x="110" y="50" fill="#43e97b" font-size="6" text-anchor="middle">FLAG CHẶT</text><text x="110" y="60" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">(Cờ gọn, hẹp)</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Cờ Cao Chặt: Tăng +90% → Cờ hẹp → Tăng tiếp mạnh</text></svg>`,
        'rectangle-top': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 95 L 30 55" stroke="#667eea" stroke-width="2" fill="none"/><rect x="30" y="35" width="115" height="40" fill="rgba(245,87,108,0.1)" stroke="#f5576c" stroke-width="1" stroke-dasharray="3,3"/><path d="M 35 55 L 55 42 L 75 62 L 95 40 L 115 60 L 135 45 L 145 55" stroke="#f5576c" stroke-width="1.5" fill="none"/><line x1="30" y1="35" x2="145" y2="35" stroke="#f5576c" stroke-width="1.5" stroke-dasharray="5,3"/><line x1="30" y1="75" x2="145" y2="75" stroke="#f5576c" stroke-width="1.5" stroke-dasharray="5,3"/><path d="M 145 75 L 170 95 L 190 105" stroke="#f5576c" stroke-width="2" fill="none"/><circle cx="95" cy="40" r="3" fill="#f5576c"/><circle cx="55" cy="42" r="3" fill="#f5576c"/><text x="90" y="25" fill="#f5576c" font-size="6" text-anchor="middle">KHÁNG CỰ</text><text x="90" y="90" fill="#f5576c" font-size="6" text-anchor="middle">HỖ TRỢ</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Chữ Nhật Đỉnh: Gom ngang → Phá hỗ trợ → Giảm</text></svg>`,
        'rectangle-bottom': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 25 L 30 65" stroke="#667eea" stroke-width="2" fill="none"/><rect x="30" y="45" width="115" height="40" fill="rgba(67,233,123,0.1)" stroke="#43e97b" stroke-width="1" stroke-dasharray="3,3"/><path d="M 35 65 L 55 78 L 75 58 L 95 80 L 115 60 L 135 75 L 145 65" stroke="#43e97b" stroke-width="1.5" fill="none"/><line x1="30" y1="45" x2="145" y2="45" stroke="#43e97b" stroke-width="1.5" stroke-dasharray="5,3"/><line x1="30" y1="85" x2="145" y2="85" stroke="#43e97b" stroke-width="1.5" stroke-dasharray="5,3"/><path d="M 145 45 L 170 25 L 190 15" stroke="#43e97b" stroke-width="2" fill="none"/><circle cx="95" cy="80" r="3" fill="#43e97b"/><circle cx="55" cy="78" r="3" fill="#43e97b"/><text x="90" y="38" fill="#43e97b" font-size="6" text-anchor="middle">KHÁNG CỰ</text><text x="90" y="100" fill="#43e97b" font-size="6" text-anchor="middle">HỖ TRỢ</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Chữ Nhật Đáy: Gom ngang → Phá kháng cự → Tăng</text></svg>`,
        'scallop-ascending': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 60 Q 35 100, 60 50" stroke="#43e97b" stroke-width="2" fill="none"/><ellipse cx="35" cy="70" rx="20" ry="25" stroke="#43e97b" stroke-width="1" stroke-dasharray="3,3" fill="none"/><path class="pattern-svg" d="M 60 50 Q 85 85, 110 35" stroke="#43e97b" stroke-width="2" fill="none"/><ellipse cx="85" cy="55" rx="20" ry="22" stroke="#43e97b" stroke-width="1" stroke-dasharray="3,3" fill="none"/><path class="pattern-svg" d="M 110 35 Q 135 60, 160 20" stroke="#43e97b" stroke-width="2" fill="none"/><ellipse cx="135" cy="40" rx="20" ry="18" stroke="#43e97b" stroke-width="1" stroke-dasharray="3,3" fill="none"/><path d="M 160 20 L 190 15" stroke="#43e97b" stroke-width="2" fill="none"/><line x1="20" y1="95" x2="170" y2="20" stroke="#43e97b" stroke-width="1.5" stroke-dasharray="5,3"/><circle cx="35" cy="95" r="3" fill="#43e97b"/><circle cx="85" cy="75" r="3" fill="#43e97b"/><circle cx="135" cy="55" r="3" fill="#43e97b"/><text x="35" y="108" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đáy 1</text><text x="85" y="90" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đáy 2</text><text x="135" y="68" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đáy 3</text><text x="100" y="12" fill="#43e97b" font-size="7" text-anchor="middle">↑ Xu hướng tăng</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Scallop Tăng: Nhiều vòm, đáy cao dần → Tăng tiếp</text></svg>`,
        'scallop-descending': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 60 Q 35 25, 60 70" stroke="#f5576c" stroke-width="2" fill="none"/><ellipse cx="35" cy="50" rx="20" ry="22" stroke="#f5576c" stroke-width="1" stroke-dasharray="3,3" fill="none"/><path class="pattern-svg" d="M 60 70 Q 85 40, 110 85" stroke="#f5576c" stroke-width="2" fill="none"/><ellipse cx="85" cy="65" rx="20" ry="20" stroke="#f5576c" stroke-width="1" stroke-dasharray="3,3" fill="none"/><path class="pattern-svg" d="M 110 85 Q 135 55, 160 95" stroke="#f5576c" stroke-width="2" fill="none"/><ellipse cx="135" cy="75" rx="20" ry="18" stroke="#f5576c" stroke-width="1" stroke-dasharray="3,3" fill="none"/><path d="M 160 95 L 190 105" stroke="#f5576c" stroke-width="2" fill="none"/><line x1="20" y1="30" x2="170" y2="100" stroke="#f5576c" stroke-width="1.5" stroke-dasharray="5,3"/><circle cx="35" cy="28" r="3" fill="#f5576c"/><circle cx="85" cy="45" r="3" fill="#f5576c"/><circle cx="135" cy="60" r="3" fill="#f5576c"/><text x="35" y="18" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đỉnh 1</text><text x="85" y="35" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đỉnh 2</text><text x="135" y="50" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đỉnh 3</text><text x="100" y="115" fill="#f5576c" font-size="7" text-anchor="middle">↓ Xu hướng giảm</text></svg>`,
        'inverted-scallop': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 90 L 40 70" stroke="#f5576c" stroke-width="2" fill="none"/><path class="pattern-svg" d="M 40 70 Q 100 20, 160 70" stroke="#f5576c" stroke-width="2" fill="none"/><ellipse cx="100" cy="50" rx="55" ry="35" stroke="#f5576c" stroke-width="1" stroke-dasharray="3,3" fill="none"/><path d="M 160 70 L 190 100" stroke="#f5576c" stroke-width="2" fill="none"/><circle cx="100" cy="20" r="3" fill="#f5576c"/><line x1="100" y1="25" x2="100" y2="50" stroke="#f5576c" stroke-width="1" stroke-dasharray="3,3"/><text x="100" y="14" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đỉnh vòm</text><text x="100" y="100" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Hình vòm ngược</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Scallop Ngược: Vòm úp xuống → Giảm</text></svg>`,
        'lazy-s': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 80 L 40 80 L 60 60 L 80 80 L 100 80 L 120 60 L 140 80 L 160 60 L 180 60 L 190 50" stroke="#667eea" stroke-width="2" fill="none"/><line x1="30" y1="88" x2="130" y2="88" stroke="#667eea" stroke-width="1" stroke-dasharray="5,3"/><line x1="70" y1="52" x2="170" y2="52" stroke="#667eea" stroke-width="1" stroke-dasharray="5,3"/><text x="100" y="100" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Hỗ trợ</text><text x="100" y="45" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Kháng cự</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Lazy S: Dao động ngang trong kênh → Tiếp tục xu hướng</text></svg>`,

        // ========== BILATERAL PATTERNS ==========
        'symmetrical-triangle': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 90 L 50 60 L 90 75 L 130 55 L 170 65 L 190 60" stroke="#a18cd1" stroke-width="2" fill="none"/><line x1="10" y1="90" x2="190" y2="60" stroke="#a18cd1" stroke-width="1.5" stroke-dasharray="5,3"/><line x1="10" y1="30" x2="190" y2="60" stroke="#a18cd1" stroke-width="1.5" stroke-dasharray="5,3"/><circle cx="50" cy="60" r="3" fill="#a18cd1"/><circle cx="130" cy="55" r="3" fill="#a18cd1"/><text x="100" y="20" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Hội tụ</text><text x="100" y="100" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">2 đường chéo</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Tam Giác Đối Xứng: Hội tụ → Phá vỡ theo hướng nào cũng được</text></svg>`,
        'broadening-top': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 20 60 L 50 50 L 80 65 L 110 40 L 150 70 L 180 30" stroke="#a18cd1" stroke-width="2" fill="none"/><line x1="20" y1="50" x2="180" y2="25" stroke="#a18cd1" stroke-width="1.5" stroke-dasharray="5,3"/><line x1="20" y1="70" x2="180" y2="85" stroke="#a18cd1" stroke-width="1.5" stroke-dasharray="5,3"/><circle cx="50" cy="50" r="3" fill="#a18cd1"/><circle cx="110" cy="40" r="3" fill="#a18cd1"/><circle cx="150" cy="70" r="3" fill="#a18cd1"/><text x="100" y="15" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Mở rộng ra</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Mở Rộng Đỉnh: 2 đường diverge → Phá vỡ bất định</text></svg>`,
        'broadening-bottom': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 20 60 L 50 70 L 80 55 L 110 80 L 150 50 L 180 90" stroke="#a18cd1" stroke-width="2" fill="none"/><line x1="20" y1="50" x2="180" y2="25" stroke="#a18cd1" stroke-width="1.5" stroke-dasharray="5,3"/><line x1="20" y1="70" x2="180" y2="95" stroke="#a18cd1" stroke-width="1.5" stroke-dasharray="5,3"/><circle cx="50" cy="70" r="3" fill="#a18cd1"/><circle cx="110" cy="80" r="3" fill="#a18cd1"/><circle cx="150" cy="50" r="3" fill="#a18cd1"/><text x="100" y="15" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Mở rộng ra</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Mở Rộng Đáy: 2 đường diverge → Phá vỡ bất định</text></svg>`,
        'broadening-wedge-ascending': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 90 L 50 60 L 90 70 L 130 50 L 170 55 L 190 40" stroke="#43e97b" stroke-width="2" fill="none"/><line x1="10" y1="90" x2="190" y2="40" stroke="#43e97b" stroke-width="1.5" stroke-dasharray="5,3"/><line x1="10" y1="60" x2="190" y2="30" stroke="#43e97b" stroke-width="1.5" stroke-dasharray="5,3"/><circle cx="50" cy="60" r="3" fill="#43e97b"/><circle cx="130" cy="50" r="3" fill="#43e97b"/><text x="100" y="20" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">2 đường dâng lên</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Nêm Mở Rộng Tăng: Dâng lên, mở rộng → Thường tăng</text></svg>`,
        'broadening-wedge-descending': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 30 L 50 60 L 90 50 L 130 70 L 170 60 L 190 80" stroke="#f5576c" stroke-width="2" fill="none"/><line x1="10" y1="30" x2="190" y2="80" stroke="#f5576c" stroke-width="1.5" stroke-dasharray="5,3"/><line x1="10" y1="50" x2="190" y2="100" stroke="#f5576c" stroke-width="1.5" stroke-dasharray="5,3"/><circle cx="50" cy="60" r="3" fill="#f5576c"/><circle cx="130" cy="70" r="3" fill="#f5576c"/><text x="100" y="20" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">2 đường hạ xuống</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Nêm Mở Rộng Giảm: Hạ xuống, mở rộng → Thường giảm</text></svg>`,
        'right-angled-broadening-ascending': `<svg viewBox="0 0 200 120"><line x1="10" y1="90" x2="190" y2="90" stroke="#a18cd1" stroke-width="1.5" stroke-dasharray="5,3"/><line x1="10" y1="90" x2="190" y2="30" stroke="#a18cd1" stroke-width="1.5" stroke-dasharray="5,3"/><path class="pattern-svg" d="M 10 90 L 50 70 L 90 75 L 130 55 L 170 50 L 190 40" stroke="#a18cd1" stroke-width="2" fill="none"/><circle cx="50" cy="70" r="3" fill="#a18cd1"/><circle cx="130" cy="55" r="3" fill="#a18cd1"/><text x="100" y="15" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đáy ngang + Đỉnh dâng</text><text x="100" y="100" fill="#a18cd1" font-size="6" text-anchor="middle">Đáy ngang</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Mở Rộng Vuông Tăng: Đáy ngang + Đỉnh tăng → Hai chiều</text></svg>`,
        'right-angled-broadening-descending': `<svg viewBox="0 0 200 120"><line x1="10" y1="30" x2="190" y2="30" stroke="#a18cd1" stroke-width="1.5" stroke-dasharray="5,3"/><line x1="10" y1="30" x2="190" y2="90" stroke="#a18cd1" stroke-width="1.5" stroke-dasharray="5,3"/><path class="pattern-svg" d="M 10 30 L 50 50 L 90 45 L 130 65 L 170 60 L 190 80" stroke="#a18cd1" stroke-width="2" fill="none"/><circle cx="50" cy="50" r="3" fill="#a18cd1"/><circle cx="130" cy="65" r="3" fill="#a18cd1"/><text x="100" y="20" fill="#a18cd1" font-size="6" text-anchor="middle">Đỉnh ngang</text><text x="100" y="100" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đỉnh ngang + Đáy hạ</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Mở Rộng Vuông Giảm: Đỉnh ngang + Đáy giảm → Hai chiều</text></svg>`,
        'complex-head-shoulders': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 80 Q 20 50, 30 60 Q 40 70, 50 55 Q 60 40, 70 60 Q 85 80, 100 25 Q 115 80, 130 60 Q 140 40, 150 55 Q 160 70, 170 60 Q 180 50, 190 70" stroke="#a18cd1" stroke-width="2" fill="none"/><line x1="10" y1="65" x2="190" y2="65" stroke="#a18cd1" stroke-width="1" stroke-dasharray="5,3"/><circle cx="100" cy="25" r="3" fill="#a18cd1"/><text x="100" y="15" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đầu</text><text x="100" y="80" fill="#a18cd1" font-size="6" text-anchor="middle">Neckline</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Đầu Vai Phức Tạp: Nhiều đỉnh phụ → Hai chiều</text></svg>`,

        // ========== GAP PATTERNS ==========
        'breakaway-gap': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 80 L 60 80" stroke="#667eea" stroke-width="2" fill="none"/><rect x="15" y="60" width="50" height="35" fill="none" stroke="#667eea" stroke-width="1" stroke-dasharray="3,3"/><text x="40" y="80" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Cô lập</text><line x1="60" y1="75" x2="60" y2="45" stroke="#43e97b" stroke-width="1.5" stroke-dasharray="5,3"/><polygon points="60,45 55,55 65,55" fill="#43e97b"/><rect x="65" y="32" width="28" height="20" fill="rgba(67,233,123,0.2)" stroke="#43e97b" stroke-width="1.5" stroke-dasharray="3,3"/><text x="79" y="46" fill="#43e97b" font-size="6" font-weight="bold" text-anchor="middle">GAP</text><path d="M 93 38 L 130 28 L 160 20 L 190 15" stroke="#43e97b" stroke-width="2" fill="none"/><line x1="20" y1="45" x2="170" y2="15" stroke="#43e97b" stroke-width="1" stroke-dasharray="5,3"/><circle cx="60" cy="60" r="3" fill="#43e97b"/><text x="60" y="52" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Phá vỡ</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Gap Phá Vỡ: Thoát vùng cô lập → Bắt đầu xu hướng mới</text></svg>`,
        'runaway-gap': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 100 L 40 75 L 55 55" stroke="#43e97b" stroke-width="2" fill="none"/><line x1="55" y1="55" x2="55" y2="35" stroke="#667eea" stroke-width="1.5" stroke-dasharray="5,3"/><rect x="58" y="30" width="24" height="18" fill="rgba(102,126,234,0.2)" stroke="#667eea" stroke-width="1.5" stroke-dasharray="3,3"/><text x="70" y="43" fill="#667eea" font-size="6" font-weight="bold" text-anchor="middle">GAP</text><path d="M 82 35 L 110 25 L 130 18" stroke="#43e97b" stroke-width="2" fill="none"/><line x1="130" y1="18" x2="130" y2="8" stroke="#667eea" stroke-width="1.5" stroke-dasharray="5,3"/><rect x="133" y="5" width="24" height="14" fill="rgba(102,126,234,0.2)" stroke="#667eea" stroke-width="1.5" stroke-dasharray="3,3"/><text x="145" y="15" fill="#667eea" font-size="5" font-weight="bold" text-anchor="middle">GAP</text><path d="M 157 10 L 175 8 L 190 5" stroke="#43e97b" stroke-width="2" fill="none"/><line x1="20" y1="100" x2="160" y2="10" stroke="#43e97b" stroke-width="1" stroke-dasharray="5,3"/><circle cx="90" cy="50" r="8" stroke="#43e97b" stroke-width="1" fill="none" stroke-dasharray="3,3"/><text x="90" y="53" fill="#43e97b" font-size="5" text-anchor="middle">50%</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Gap Chạy: Xuất hiện giữa xu hướng → Đánh dấu 50% đường đi</text></svg>`,
        'exhaustion-gap': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 100 L 40 80 L 70 60 L 90 40" stroke="#43e97b" stroke-width="2" fill="none"/><line x1="90" y1="40" x2="90" y2="22" stroke="#f5576c" stroke-width="1.5" stroke-dasharray="5,3"/><rect x="93" y="18" width="24" height="18" fill="rgba(245,87,108,0.2)" stroke="#f5576c" stroke-width="1.5" stroke-dasharray="3,3"/><text x="105" y="31" fill="#f5576c" font-size="6" font-weight="bold" text-anchor="middle">GAP</text><line x1="117" y1="32" x2="117" y2="50" stroke="#f5576c" stroke-width="1.5" stroke-dasharray="5,3"/><path d="M 120 50 L 150 70 L 175 90 L 190 100" stroke="#f5576c" stroke-width="2" fill="none"/><line x1="20" y1="100" x2="100" y2="30" stroke="#43e97b" stroke-width="1" stroke-dasharray="5,3"/><line x1="100" y1="30" x2="190" y2="100" stroke="#f5576c" stroke-width="1" stroke-dasharray="5,3"/><circle cx="105" cy="35" r="3" fill="#f5576c"/><text x="105" y="12" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Hết sức</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Gap Kiệt Sức: Gap cuối xu hướng → Đảo chiều mạnh</text></svg>`,
        'common-gap': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 80 L 65 80" stroke="#667eea" stroke-width="2" fill="none"/><line x1="65" y1="80" x2="65" y2="45" stroke="#667eea" stroke-width="1.5" stroke-dasharray="5,3"/><rect x="70" y="52" width="28" height="20" fill="rgba(102,126,234,0.2)" stroke="#667eea" stroke-width="1.5" stroke-dasharray="3,3"/><text x="84" y="66" fill="#667eea" font-size="6" font-weight="bold" text-anchor="middle">GAP</text><line x1="98" y1="45" x2="98" y2="55" stroke="#667eea" stroke-width="1.5" stroke-dasharray="5,3"/><path d="M 98 45 L 190 45" stroke="#667eea" stroke-width="2" fill="none"/><line x1="30" y1="60" x2="175" y2="60" stroke="#667eea" stroke-width="1" stroke-dasharray="5,3"/><circle cx="84" cy="62" r="3" fill="#667eea"/><text x="40" y="95" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Đóng cửa</text><text x="150" y="40" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">Mở cửa</text><text x="100" y="115" fill="rgba(255,255,255,0.5)" font-size="7" text-anchor="middle">Gap Phổ Biến: Không có ý nghĩa → Được lấp đầy nhanh</text></svg>`,
    };

    // Fallback SVG for any patterns not defined
    return svgs[key] || `<svg viewBox="0 0 200 120">
        <path class="pattern-svg" d="M 10 60 Q 50 30, 100 60 Q 150 90, 190 60" stroke="#667eea" stroke-width="2" fill="none"/>
        <circle cx="100" cy="60" r="4" fill="#764ba2"/>
    </svg>`;
}

function initLibraryControls() {
    // Category filter buttons
    const filterBtns = document.querySelectorAll('.library-filters .filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;

            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter cards
            filterPatternCards(category);
        });
    });

    // Library search
    const searchInput = document.getElementById('librarySearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            searchPatternCards(query);
        });
    }

    // View toggle
    const viewBtns = document.querySelectorAll('.view-btn');
    const patternsGrid = document.getElementById('patternsGrid');

    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            viewBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const view = btn.dataset.view;
            if (view === 'list') {
                patternsGrid.classList.add('list-view');
            } else {
                patternsGrid.classList.remove('list-view');
            }
        });
    });
}

function filterPatternCards(category) {
    const cards = document.querySelectorAll('.pattern-card');
    let visibleCount = 0;

    cards.forEach(card => {
        const cardCategory = card.dataset.category;
        const shouldShow = category === 'all' || cardCategory === category;

        if (shouldShow) {
            card.style.display = '';
            setTimeout(() => card.style.opacity = '1', 10);
            visibleCount++;
        } else {
            card.style.opacity = '0';
            setTimeout(() => card.style.display = 'none', 300);
        }
    });

    updateVisibleCount(visibleCount);
    hideSearchResultCount();
}

function searchPatternCards(query) {
    const cards = document.querySelectorAll('.pattern-card');
    let visibleCount = 0;

    if (!query) {
        // Reset to show all based on current filter
        const activeFilter = document.querySelector('.library-filters .filter-btn.active');
        const category = activeFilter ? activeFilter.dataset.category : 'all';
        filterPatternCards(category);
        return;
    }

    cards.forEach(card => {
        const name = (card.dataset.name || '').toLowerCase();
        const nameEn = (card.dataset.nameEn || '').toLowerCase();
        const shouldShow = name.includes(query) || nameEn.includes(query);

        if (shouldShow) {
            card.style.display = '';
            card.style.opacity = '1';
            visibleCount++;
        } else {
            card.style.display = 'none';
            card.style.opacity = '0';
        }
    });

    updateVisibleCount(visibleCount);
    showSearchResultCount(visibleCount);
}

function updateCategoryCounts() {
    const counts = { all: 0, reversal: 0, continuation: 0, bilateral: 0 };

    Object.values(patternsData).forEach(pattern => {
        counts.all++;
        if (counts[pattern.category] !== undefined) {
            counts[pattern.category]++;
        }
    });

    document.getElementById('countAll').textContent = counts.all;
    document.getElementById('countReversal').textContent = counts.reversal;
    document.getElementById('countContinuation').textContent = counts.continuation;
    document.getElementById('countBilateral').textContent = counts.bilateral;
    document.getElementById('libraryTotal').textContent = counts.all;
}

function updateLearnedCount() {
    const progress = JSON.parse(localStorage.getItem('chartPatternProgress') || '{}');
    const learned = progress.learned || [];
    document.getElementById('libraryLearned').textContent = learned.length;
}

function updateVisibleCount(count) {
    const el = document.getElementById('visibleCount');
    if (el) el.textContent = count;
}

function showSearchResultCount(count) {
    const el = document.querySelector('.search-result-count');
    if (el) el.style.display = 'flex';
}

function hideSearchResultCount() {
    const el = document.querySelector('.search-result-count');
    if (el) el.style.display = 'none';
}

function openPatternModal(patternKey) {
    const pattern = patternsData[patternKey];
    if (!pattern) return;

    const modal = document.getElementById('patternModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.getElementById('modalClose');

    modalTitle.textContent = `${pattern.name} (${pattern.nameEn})`;

    let statsHtml = '';
    if (pattern.statistics) {
        statsHtml = `
            <div class="pattern-stats-detail">
                <h4><i class="fas fa-chart-bar"></i> Thống kê chi tiết</h4>
                <div class="stats-grid-modal">
                    <div class="stat-item-modal">
                        <span class="stat-label">Phá vỡ tăng</span>
                        <span class="stat-value">${pattern.statistics.bullishBreakout}%</span>
                    </div>
                    <div class="stat-item-modal">
                        <span class="stat-label">Phá vỡ giảm</span>
                        <span class="stat-value">${pattern.statistics.bearishBreakout}%</span>
                    </div>
                    <div class="stat-item-modal">
                        <span class="stat-label">Tăng TB</span>
                        <span class="stat-value">${pattern.statistics.averageRise}%</span>
                    </div>
                    <div class="stat-item-modal">
                        <span class="stat-label">Giảm TB</span>
                        <span class="stat-value">${pattern.statistics.averageDecline}%</span>
                    </div>
                    <div class="stat-item-modal">
                        <span class="stat-label">Pullback</span>
                        <span class="stat-value">${pattern.statistics.pullbackRate}%</span>
                    </div>
                </div>
            </div>
        `;
    }

    modalBody.innerHTML = `
        <div class="pattern-detail">
            <div class="pattern-detail-header">
                <span class="pattern-badge ${pattern.category}">${getCategoryLabel(pattern.category)}</span>
                <div class="pattern-detail-stats">
                    <div class="stat">
                        <span class="stat-label">Tỷ lệ thành công</span>
                        <span class="stat-value success">${pattern.successRate}%</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">Biến động TB</span>
                        <span class="stat-value ${pattern.avgMove >= 0 ? 'positive' : ''}">${pattern.avgMove >= 0 ? '+' : ''}${pattern.avgMove}%</span>
                    </div>
                    ${pattern.avgDuration ? `<div class="stat">
                        <span class="stat-label">Thời gian TB</span>
                        <span class="stat-value">${pattern.avgDuration}</span>
                    </div>` : ''}
                </div>
            </div>

            <p class="pattern-description">${pattern.description}</p>

            <div class="pattern-section">
                <h4><i class="fas fa-sitemap"></i> Cấu trúc mẫu</h4>
                <ul>
                    ${pattern.structure.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>

            <div class="pattern-section">
                <h4><i class="fas fa-exchange-alt"></i> Quy tắc giao dịch</h4>
                <ul>
                    ${pattern.tradingRules.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>

            <div class="pattern-section">
                <h4><i class="fas fa-lightbulb"></i> Mẹo giao dịch</h4>
                <ul>
                    ${pattern.tips.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>

            ${statsHtml}

            <div class="pattern-actions">
                <button class="btn-glass btn-primary" onclick="markAsLearned('${patternKey}')">
                    <i class="fas fa-check"></i> Đánh dấu đã học
                </button>
            </div>
        </div>
    `;

    modal.classList.add('active');

    // Close modal
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.querySelector('.modal-overlay').addEventListener('click', () => {
        modal.classList.remove('active');
    });
}

function markAsLearned(patternKey) {
    if (!state.learnedPatterns.includes(patternKey)) {
        state.learnedPatterns.push(patternKey);
        saveState();
        showNotification('Đã đánh dấu là đã học!', 'success');
        updateProgress();
    } else {
        showNotification('Bạn đã học mẫu này rồi', 'info');
    }
}

// ========================================
// Quiz
// ========================================

function initQuiz() {
    renderQuizQuestion();

    document.getElementById('submitAnswer').addEventListener('click', submitAnswer);
    document.getElementById('skipQuestion').addEventListener('click', skipQuestion);
    document.getElementById('retakeQuiz').addEventListener('click', retakeQuiz);
    document.getElementById('reviewAnswers').addEventListener('click', reviewAnswers);
}

function renderQuizQuestion() {
    const question = quizData[state.currentQuizQuestion];
    const quizContent = document.getElementById('quizContent');

    let visualHtml = '';
    if (question.visual) {
        const pattern = patternsData[question.visual];
        if (pattern) {
            visualHtml = `
                <div class="quiz-question-visual">
                    <p><strong>Mẫu biểu đồ:</strong> ${pattern.name}</p>
                </div>
            `;
        }
    }

    quizContent.innerHTML = `
        <div class="quiz-question">
            <h3>${question.question}</h3>
            ${visualHtml}
            <div class="quiz-options">
                ${question.options.map((option, index) => `
                    <div class="quiz-option" data-index="${index}">
                        <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                        <span class="option-text">${option}</span>
                    </div>
                `).join('')}
            </div>
            <div class="quiz-explanation" id="quizExplanation" style="display: none;">
                <p>${question.explanation}</p>
            </div>
        </div>
    `;

    // Add click handlers to options
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('click', () => selectOption(option));
    });

    // Update progress
    updateQuizProgress();

    // Reset state
    state.selectedAnswer = null;
    state.answered = false;
    document.getElementById('submitAnswer').disabled = true;

    // Start timer
    if (!state.quizStartTime) {
        state.quizStartTime = Date.now();
    }
}

function selectOption(option) {
    if (state.answered) return;

    // Remove previous selection
    document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.classList.remove('selected');
    });

    // Add selection
    option.classList.add('selected');
    state.selectedAnswer = parseInt(option.dataset.index);
    document.getElementById('submitAnswer').disabled = false;
}

function submitAnswer() {
    if (state.selectedAnswer === null || state.answered) return;

    state.answered = true;
    const question = quizData[state.currentQuizQuestion];
    const options = document.querySelectorAll('.quiz-option');

    // Show correct/incorrect
    options.forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === state.selectedAnswer) {
            option.classList.add('incorrect');
        }
    });

    // Update score
    if (state.selectedAnswer === question.correct) {
        state.quizScore++;
        document.getElementById('quizScore').textContent = state.quizScore;
        showNotification('Chính xác!', 'success');
    } else {
        showNotification('Chưa đúng, hãy xem giải thích', 'warning');
    }

    // Show explanation
    document.getElementById('quizExplanation').style.display = 'block';

    // Move to next question after delay
    setTimeout(() => {
        nextQuestion();
    }, 2500);
}

function skipQuestion() {
    nextQuestion();
}

function nextQuestion() {
    state.currentQuizQuestion++;

    if (state.currentQuizQuestion >= quizData.length) {
        showQuizResults();
    } else {
        renderQuizQuestion();
    }
}

function showQuizResults() {
    document.querySelector('.quiz-container').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';

    const totalQuestions = quizData.length;
    const correctPercent = Math.round((state.quizScore / totalQuestions) * 100);
    const timeSpent = Math.round((Date.now() - state.quizStartTime) / 1000);
    const minutes = Math.floor(timeSpent / 60);
    const seconds = timeSpent % 60;

    document.getElementById('finalScore').textContent = `${state.quizScore}/${totalQuestions}`;
    document.getElementById('correctPercent').textContent = `${correctPercent}%`;
    document.getElementById('timeSpent').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Update achievements
    if (correctPercent === 100 && !state.achievements.includes('Chính xác')) {
        state.achievements.push('Chính xác');
        saveState();
    }
}

function retakeQuiz() {
    state.currentQuizQuestion = 0;
    state.quizScore = 0;
    state.quizStartTime = null;
    state.answered = false;
    state.selectedAnswer = null;

    document.getElementById('quizScore').textContent = '0';
    document.querySelector('.quiz-container').style.display = 'block';
    document.getElementById('quizResults').style.display = 'none';

    renderQuizQuestion();
}

function reviewAnswers() {
    showNotification('Tính năng đang được phát triển', 'info');
}

function updateQuizProgress() {
    const progress = ((state.currentQuizQuestion + 1) / quizData.length) * 100;
    document.getElementById('quizProgress').style.width = `${progress}%`;
    document.getElementById('currentQuestion').textContent = state.currentQuizQuestion + 1;
    document.getElementById('totalQuestions').textContent = quizData.length;
}

// ========================================
// Progress
// ========================================

function initProgress() {
    updateProgress();
}

function updateProgress() {
    const totalPatterns = Object.keys(patternsData).length;
    const learned = state.learnedPatterns.length;
    const percent = Math.round((learned / totalPatterns) * 100);

    // Update ring
    const ring = document.getElementById('progressRing');
    if (ring) {
        const circumference = 2 * Math.PI * 85;
        const offset = circumference - (percent / 100) * circumference;
        ring.style.strokeDashoffset = offset;
    }

    // Update stats
    const overallProgress = document.getElementById('overallProgress');
    const learnedPatterns = document.getElementById('learnedPatterns');

    if (overallProgress) overallProgress.textContent = `${percent}%`;
    if (learnedPatterns) learnedPatterns.textContent = learned;

    // Update achievements display
    document.querySelectorAll('.achievement').forEach(achievement => {
        const name = achievement.querySelector('.achievement-name').textContent;
        if (state.achievements.includes(name)) {
            achievement.classList.add('unlocked');
        }
    });
}

// ========================================
// Animations
// ========================================

function initAnimations() {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.pattern-card, .path-item, .stat-card').forEach(el => {
        observer.observe(el);
    });
}

function animateStats() {
    document.querySelectorAll('.stat-number[data-count]').forEach(stat => {
        const target = parseInt(stat.dataset.count);
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current);
            }
        }, 30);
    });
}

function initPatternAnimation() {
    const animateBtn = document.getElementById('animatePattern');
    const resetBtn = document.getElementById('resetPattern');

    if (animateBtn) {
        animateBtn.addEventListener('click', () => {
            const patternLine = document.getElementById('patternLine');
            const neckline = document.getElementById('neckline');
            const labels = document.getElementById('patternLabels');
            const volumeBars = document.getElementById('volumeBars');

            // Reset first
            patternLine.classList.remove('animate');

            // Animate pattern line
            setTimeout(() => {
                patternLine.classList.add('animate');
            }, 100);

            // Show neckline
            setTimeout(() => {
                neckline.style.opacity = '1';
                neckline.style.animation = 'fadeIn 0.5s ease';
            }, 2000);

            // Show labels
            setTimeout(() => {
                labels.style.opacity = '1';
                labels.style.animation = 'fadeIn 0.5s ease';
            }, 2500);

            // Show volume bars
            setTimeout(() => {
                volumeBars.style.opacity = '1';
                volumeBars.style.animation = 'fadeIn 0.5s ease';
            }, 3000);
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            const patternLine = document.getElementById('patternLine');
            const neckline = document.getElementById('neckline');
            const labels = document.getElementById('patternLabels');
            const volumeBars = document.getElementById('volumeBars');

            patternLine.classList.remove('animate');
            neckline.style.opacity = '0';
            labels.style.opacity = '0';
            volumeBars.style.opacity = '0';
        });
    }
}

// ========================================
// Lesson Rendering System
// ========================================

function initLessonSystem() {
    renderCurrentLesson();
    updateProgressIndicator();
}

function renderCurrentLesson() {
    const lesson = lessonsData[state.currentLessonIndex];
    if (!lesson) return;

    const container = document.getElementById('lessonContainer');
    if (!container) return;

    container.innerHTML = generateLessonHTML(lesson);
    initLessonAnimations();
}

function generateLessonHTML(lesson) {
    const prevDisabled = state.currentLessonIndex === 0 ? 'disabled' : '';
    const isLast = state.currentLessonIndex >= lessonsData.length - 1;
    const nextText = isLast ? 'Hoàn thành <i class="fas fa-check"></i>' : 'Bài tiếp theo <i class="fas fa-arrow-right"></i>';

    return `
        <div class="lesson-header">
            <div class="lesson-meta">
                <span class="lesson-module"><i class="fas fa-layer-group"></i> ${lesson.module}</span>
                <span class="lesson-duration"><i class="fas fa-clock"></i> ${lesson.duration}</span>
                <span class="lesson-progress">${state.currentLessonIndex + 1}/${lessonsData.length}</span>
            </div>
            <h3 class="lesson-title">${lesson.title}</h3>
            <p class="lesson-description">${lesson.description}</p>
        </div>

        <div class="lesson-content">
            <!-- Interactive Chart -->
            <div class="lesson-chart glass-card">
                <div class="chart-header">
                    <h4><i class="fas fa-chart-area"></i> Cấu trúc mẫu</h4>
                    <div class="chart-controls">
                        <button class="btn-glass btn-sm" id="animatePattern">
                            <i class="fas fa-play"></i> Xem animation
                        </button>
                        <button class="btn-glass btn-sm" id="resetPattern">
                            <i class="fas fa-redo"></i> Reset
                        </button>
                    </div>
                </div>
                <div class="chart-container" id="interactiveChart">
                    ${generateLessonSVG(lesson)}
                </div>
                <div class="chart-legend">
                    ${lesson.legend.map(l => `
                        <div class="legend-item">
                            <span class="legend-color" style="background: ${l.color}"></span>
                            <span>${l.text}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Key Points -->
            <div class="lesson-keypoints glass-card">
                <h4><i class="fas fa-lightbulb"></i> Điểm quan trọng</h4>
                <div class="keypoints-list">
                    ${lesson.keypoints.map((kp, i) => `
                        <div class="keypoint" data-index="${i + 1}">
                            <div class="keypoint-icon">
                                <i class="fas fa-check-circle"></i>
                            </div>
                            <div class="keypoint-content">
                                <h5>${kp.title}</h5>
                                <p>${kp.desc}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Statistics -->
            <div class="lesson-stats glass-card">
                <h4><i class="fas fa-chart-bar"></i> Thống kê từ Bulkowski</h4>
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-icon success">
                            <i class="fas fa-bullseye"></i>
                        </div>
                        <div class="stat-info">
                            <span class="stat-value">${lesson.stats.successRate}</span>
                            <span class="stat-label">Tỷ lệ thành công</span>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon ${lesson.stats.avgChange.includes('+') ? 'success' : 'warning'}">
                            <i class="fas fa-arrow-${lesson.stats.avgChange.includes('+') ? 'up' : 'down'}"></i>
                        </div>
                        <div class="stat-info">
                            <span class="stat-value">${lesson.stats.avgChange}</span>
                            <span class="stat-label">Độ thay đổi TB</span>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon info">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="stat-info">
                            <span class="stat-value">${lesson.stats.timeForm}</span>
                            <span class="stat-label">Thời gian hình thành</span>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon primary">
                            <i class="fas fa-percentage"></i>
                        </div>
                        <div class="stat-info">
                            <span class="stat-value">${lesson.stats.pullback}</span>
                            <span class="stat-label">Pullback tần suất</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="lesson-navigation">
            <button class="btn-glass btn-prev" ${prevDisabled} onclick="prevLesson()">
                <i class="fas fa-arrow-left"></i> Bài trước
            </button>
            <button class="btn-glass btn-primary btn-next" onclick="nextLesson()">
                ${nextText}
            </button>
        </div>
    `;
}

function generateLessonSVG(lesson) {
    const svg = lesson.svg;
    let trendlinesHTML = '';
    let necklineHTML = '';
    let labelsHTML = '';
    let volumeHTML = '';
    let gapAreaHTML = '';

    // Trendlines
    if (svg.trendlines) {
        trendlinesHTML = svg.trendlines.map(tl =>
            `<line x1="${tl.x1}" y1="${tl.y1}" x2="${tl.x2}" y2="${tl.y2}" stroke="${tl.color}" stroke-width="1.5" stroke-dasharray="8,4"/>`
        ).join('');
    }

    // Neckline
    if (svg.neckline) {
        necklineHTML = `<line id="neckline" x1="${svg.neckline.x1}" y1="${svg.neckline.y1}" x2="${svg.neckline.x2}" y2="${svg.neckline.y2}" stroke="#ff6b6b" stroke-width="2" stroke-dasharray="10,5" opacity="0"/>`;
    }

    // Labels
    if (svg.labels) {
        labelsHTML = `
            <g id="patternLabels" opacity="0">
                ${svg.labels.map(l => `
                    <circle cx="${l.x}" cy="${l.y}" r="${l.r}" fill="${l.color}" class="label-dot"/>
                    ${l.text ? `<text x="${l.x}" y="${l.textY}" class="chart-label-text ${l.highlight ? 'highlight' : ''}" text-anchor="middle">${l.text}</text>` : ''}
                `).join('')}
            </g>
        `;
    }

    // Volume
    if (svg.volume) {
        volumeHTML = `
            <g id="volumeBars" opacity="0">
                ${svg.volume.map(v => `
                    <rect x="${v.x}" y="${v.y}" width="${v.w}" height="${v.h}" fill="${v.color}" rx="2"/>
                `).join('')}
                <text x="200" y="290" class="volume-label" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-size="8">Khối lượng</text>
            </g>
        `;
    }

    // Gap Area (single)
    if (svg.gapArea) {
        gapAreaHTML = `
            <rect x="${svg.gapArea.x}" y="${svg.gapArea.y}" width="${svg.gapArea.w}" height="${svg.gapArea.h}"
                  fill="rgba(102,126,234,0.15)" stroke="#667eea" stroke-width="1.5" stroke-dasharray="4,2" rx="3"/>
        `;
    }

    // Gap Areas (multiple)
    if (svg.gapAreas) {
        gapAreaHTML = svg.gapAreas.map(ga =>
            `<rect x="${ga.x}" y="${ga.y}" width="${ga.w}" height="${ga.h}"
                   fill="rgba(102,126,234,0.15)" stroke="#667eea" stroke-width="1.5" stroke-dasharray="4,2" rx="3"/>`
        ).join('');
    }

    return `
        <svg viewBox="0 0 450 300" class="lesson-svg">
            <!-- Grid -->
            <defs>
                <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="0.5"/>
                </pattern>
                <linearGradient id="patternGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#667eea"/>
                    <stop offset="50%" style="stop-color:#764ba2"/>
                    <stop offset="100%" style="stop-color:#f093fb"/>
                </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>

            <!-- Pattern Line -->
            <path id="patternLine" class="animated-pattern-line" d="${svg.path}" stroke="url(#patternGradient)" stroke-width="3" fill="none"/>

            <!-- Trendlines -->
            ${trendlinesHTML}

            <!-- Neckline -->
            ${necklineHTML}

            <!-- Gap Areas -->
            ${gapAreaHTML}

            <!-- Labels -->
            ${labelsHTML}

            <!-- Volume -->
            ${volumeHTML}
        </svg>
    `;
}

function initLessonAnimations() {
    const animateBtn = document.getElementById('animatePattern');
    const resetBtn = document.getElementById('resetPattern');

    if (animateBtn) {
        animateBtn.onclick = () => {
            const patternLine = document.getElementById('patternLine');
            const neckline = document.getElementById('neckline');
            const labels = document.getElementById('patternLabels');
            const volumeBars = document.getElementById('volumeBars');

            if (patternLine) {
                patternLine.classList.remove('animate');
                setTimeout(() => patternLine.classList.add('animate'), 100);
            }
            setTimeout(() => { if (neckline) neckline.style.opacity = '1'; }, 2000);
            setTimeout(() => { if (labels) labels.style.opacity = '1'; }, 2500);
            setTimeout(() => { if (volumeBars) volumeBars.style.opacity = '1'; }, 3000);
        };
    }

    if (resetBtn) {
        resetBtn.onclick = () => {
            const patternLine = document.getElementById('patternLine');
            const neckline = document.getElementById('neckline');
            const labels = document.getElementById('patternLabels');
            const volumeBars = document.getElementById('volumeBars');

            if (patternLine) patternLine.classList.remove('animate');
            if (neckline) neckline.style.opacity = '0';
            if (labels) labels.style.opacity = '0';
            if (volumeBars) volumeBars.style.opacity = '0';
        };
    }
}

function nextLesson() {
    if (state.currentLessonIndex < lessonsData.length - 1) {
        state.currentLessonIndex++;
        saveState();
        renderCurrentLesson();
        updateProgressIndicator();
    } else {
        showNotification('Chúc mừng! Bạn đã hoàn thành tất cả bài học!');
    }
}

function prevLesson() {
    if (state.currentLessonIndex > 0) {
        state.currentLessonIndex--;
        saveState();
        renderCurrentLesson();
        updateProgressIndicator();
    }
}

function updateProgressIndicator() {
    const percent = ((state.currentLessonIndex + 1) / lessonsData.length) * 100;
    const progressBar = document.querySelector('.path-item[data-step="2"] .progress-bar');
    if (progressBar) {
        progressBar.style.width = `${percent}%`;
    }
}

// ========================================
// Theme Toggle
// ========================================

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');

    // Load saved theme
    if (state.theme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener('click', () => {
        if (document.body.hasAttribute('data-theme')) {
            document.body.removeAttribute('data-theme');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            state.theme = 'dark';
        } else {
            document.body.setAttribute('data-theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            state.theme = 'light';
        }
        saveState();
    });
}

// ========================================
// Notifications
// ========================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'warning' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;

    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '16px 24px',
        background: type === 'success' ? 'rgba(67, 233, 123, 0.2)' : type === 'warning' ? 'rgba(251, 194, 235, 0.2)' : 'rgba(102, 126, 234, 0.2)',
        backdropFilter: 'blur(20px)',
        border: `1px solid ${type === 'success' ? '#43e97b' : type === 'warning' ? '#fbc2eb' : '#667eea'}`,
        borderRadius: '12px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        zIndex: 9999,
        animation: 'slideUp 0.3s ease'
    });

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// ========================================
// Keyboard Shortcuts
// ========================================

document.addEventListener('keydown', (e) => {
    // Navigate sections with number keys
    if (e.key >= '1' && e.key <= '5' && !e.ctrlKey && !e.metaKey) {
        const sections = ['home', 'patterns', 'learn', 'quiz', 'progress'];
        navigateToSection(sections[parseInt(e.key) - 1]);
    }
});

// ========================================
// Make functions globally available
// ========================================

window.markAsLearned = markAsLearned;
window.navigateToSection = navigateToSection;
